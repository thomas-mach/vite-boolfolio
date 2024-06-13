<template>
  <NavBar />

  <main>
    <RouterView />
  </main>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  },

  data() {
    return {
    }
  }
}
</script>

<style></style>