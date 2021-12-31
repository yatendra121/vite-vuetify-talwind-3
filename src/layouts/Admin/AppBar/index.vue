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
    <v-spacer></v-spacer>

    <v-btn
      size="small"
      @click="appStore.changeTheme()"
      :icon="theme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
    ></v-btn>
    <v-btn size="small" @click="fullscreen" icon="mdi-fullscreen"></v-btn>

    <v-btn flat color="" @click="logOutUser"> Logout </v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/reactivity/app'
import useAuthUserRepository from '@/composables/auth/useAuthUserRepository'

export default defineComponent({
  name: 'AppBar',
  props: {
    fullscreen: {
      type: Function,
      required: true
    }
  },
  setup() {
    const appStore = useAppStore()

    const updateSidebar = async () => {
      appStore.changeSidebar()
    }

    const { logOutUser } = useAuthUserRepository()

    return {
      appStore,
      sidebar: computed(() => appStore.sidebarValue),
      theme: computed(() => appStore.themeValue),
      updateSidebar,
      logOutUser
    }
  }
})
</script>
