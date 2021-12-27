<template>
  <NavigationDrawer />
  <AppBar />
  <v-main>
    <v-container fluid>
      <v-fade-transition>
        <router-view></router-view>
      </v-fade-transition>
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
import AppBar from './Layout/AppBar.vue'
import Footer from './Layout/Footer.vue'
import NavigationDrawer from './Layout/NavigationDrawer.vue'
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
  }
})
</script>
