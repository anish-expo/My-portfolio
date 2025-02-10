<script>

import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';


export default{
  components: { Navbar},

};

</script>

<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <Navbar />
    <main>
      
      <RouterView />
    </main>
  </div>
 
</template>


<style>
html {
  scroll-behavior: smooth;
}
</style>