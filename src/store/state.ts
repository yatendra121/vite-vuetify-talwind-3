import { UserProfile } from '@/types/auth'

// define your typings for the store state

export type AppState = {
    drawer: boolean
    [key: string]: any
}

export type State = {
    profile: UserProfile | null
    app: AppState
}

export const state: State = {
    profile: null,
    app: {
        drawer: true
    }
}
