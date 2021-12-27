import { InjectionKey } from 'vue'
import {
    createStore,
    createLogger,
    Store as VuexStore,
    CommitOptions,
    DispatchOptions
} from 'vuex'
import profile from './modules/profile'
import app from './modules/app'
import { Mutations, Actions } from './modules/profile'
import { getters, Getters } from './getters'
import { State, state } from '@/store/state'

// store.ts
export const store = createStore<State>({
    plugins: [createLogger()],
    //state: state,
    // mutations: {},
    // actions: {},
    modules: { profile, app },
    getters
})

export function useStore() {
    return store as Store
}

export type Store = Omit<
    VuexStore<State>,
    'getters' | 'commit' | 'dispatch'
> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload?: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    }
}

export default store
