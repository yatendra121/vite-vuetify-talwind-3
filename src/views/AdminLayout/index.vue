<template>
  <NavigationDrawer />
  <AppBar />
  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
    <Footer />
  </v-main>
  <!-- <div
    v-if="authProfile"
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
  >
    <div class="flex-shrink-0">
      <img
        class="h-12 w-12"
        :src="authProfile.profile_image ? authProfile.profile_image.path : ''"
        alt="ChitChat Logo"
      />
    </div>
    <div>
      <div class="text-xl font-medium text-black">{{ authProfile.name }}</div>
      <p class="text-gray-500">{{ authProfile.email }}</p>
    </div>
  </div> -->
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { store } from '@/store'
//import { ActionTypes } from '@/store/modules/app'
import AppBar from './AppBar.vue'
import Footer from './Footer.vue'
import NavigationDrawer from './NavigationDrawer.vue'
export default defineComponent({
  components: {
    AppBar,
    Footer,
    NavigationDrawer
  },
  setup() {
    const store = useStore()
    //console.log(store.getters.authProfile);
    return {
      // access a getter in computed function
      authProfile: computed(() => store.getters.authProfile)
    }
  },
  data() {
    return {
      model: 1,
      drawer: false,
      selectedItem: null,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' }
      ],
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
    }
  }
})
</script>
