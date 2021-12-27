<template>
  <v-app :theme="theme" id="inspire">
    <router-view :key="$route" v-show="!authLoading" />
  </v-app>
</template>
<script lang="ts">
import { defineComponent, watch, PropType, ref, computed, onMounted } from 'vue'
import { useTitle } from '@vueuse/core'
import { useStore } from 'vuex'
import { AuthStatus } from '@/types/auth'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  props: {
    authLoading: {
      type: Boolean,
      default: () => true,
      required: true
    },
    authStatus: {
      type: String as PropType<AuthStatus>,
      default: () => 'pending',
      required: true
    }
  },
  setup(props) {
    // Current theme light/dark
    const theme = ref('light')

    // Navigation redirection
    const route = useRoute()
    const router = useRouter()
    const redirectToAuth = () => {
      if (route.meta.type === 'not_found');
      else if (props.authStatus === 'authenticated') {
        router.push({ name: 'dashboard' })
      } else {
        router.push({ name: 'login' })
      }
    }

    watch(props, () => {
      redirectToAuth()
    })
    redirectToAuth()

    // Navigation Guard
    const store = useStore()
    const title = useTitle()
    router.beforeEach((to, from, next) => {
      if (!props.authLoading) {
        if (store.getters.authProfile && to.meta.isPublic) return
        if (!store.getters.authProfile && !to.meta.isPublic) return
      }
      next()

      // Browser Tab Title
      title.value = to.meta.title
    })

    // Close loader if exist
    onMounted(() => {
      setTimeout(() => {
        let appLoading = document.querySelector('#initial_startup')
        if (appLoading) appLoading.remove()
      }, 300)
    })

    return { theme }
  }
})
</script>
