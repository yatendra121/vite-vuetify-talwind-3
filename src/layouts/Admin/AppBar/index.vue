<template>
  <v-app-bar
    height="70"
    app
    :border="false"
    :elevation="1"
    :rounded="false"
    :collapse="false"
    flat
    floating
  >
    <v-app-bar-nav-icon @click="updateSidebar"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-btn flat color="" @click="logOutUser"> Logout </v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/reactivity/app'
import useAuthUserRepository from '@/composables/auth/useAuthUserRepository'

export default defineComponent({
  name: 'AppBar',
  setup() {
    const store = useAppStore()

    const updateSidebar = async () => {
      store.changeSidebar()
    }

    const { logOutUser } = useAuthUserRepository()

    return {
      store,
      sidebar: computed(() => store.sidebarValue),
      updateSidebar,
      logOutUser
    }
  }
})
</script>
