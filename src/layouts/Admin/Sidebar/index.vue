<template>
  <v-navigation-drawer v-model="drawer" app :elevation="1">
    <!-- <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> John Leider </v-list-item-title>
          <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list> -->
    <v-divider></v-divider>
    <v-list>
      <sidebar-item
        :item="route"
        v-for="route in router.options?.routes"
        :key="route"
      />
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/reactivity/app'
import router from '@/router'
import SidebarItem from './SidebarItem.vue'
//import { ActionTypes } from '@/store/modules/app'

export default defineComponent({
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  data() {
    return {
      drawer: false,
      selectedItem: null,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' }
      ],
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
    }
  },
  setup() {
    const store = useAppStore()

    const drawer = computed({
      get: () => store.sidebarValue,
      set: (val: boolean) => {
        store.updateSidebar(val)
      }
    })

    return {
      drawer,
      router
    }
  }
})
</script>
