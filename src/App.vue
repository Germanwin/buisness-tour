<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/layout/navbar.vue';
import Footer from './components/layout/footer.vue';
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>