<template>
  <v-app-bar
    height="77"
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
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/reactivity/app'

export default defineComponent({
  name: 'AppBar',
  setup() {
    const store = useAppStore()

    console.log(store)

    const updateSidebar = async () => {
      store.changeSidebar()
    }

    return {
      store,
      sidebar: computed(() => store.sidebarValue),
      updateSidebar
    }
  }
})
</script>
