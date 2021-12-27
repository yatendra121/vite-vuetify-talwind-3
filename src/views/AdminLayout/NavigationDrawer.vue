<template>
  <v-navigation-drawer v-model="drawer" app :elevation="1">
    <v-list>
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

      <v-list-item :to="{ name: 'drawer' }" link title="Drawer" />
      <v-list-item :to="{ name: 'dashboard' }" link title="Dashboard" />
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item title="I'm a single list item" />
      <v-list-group>
        <template #header="props">
          <v-list-item v-bind="props" title="I'm a group header" />
        </template>
        <v-list-item link title="Drawer" />
        <v-list-item link title="Dashboard" />
      </v-list-group>
    </v-list>

    <v-list nav dense>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item link v-for="(item, i) in items" :key="i">
          <v-list-item-icon> </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/reactivity/app'
//import { ActionTypes } from '@/store/modules/app'

export default defineComponent({
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
      drawer
    }
  }
})
</script>
