<template>
  <div id="home">
    <navbar />
    <h1>Home</h1>
  </div>
</template>

<!--========Script========-->
<script>
import navbar from '@/components/navbar.vue';

export default {
  name: 'Home',
  components: {
    navbar
  }
};
</script>

<!--========Css========-->
<style scoped>
h1 {
  margin: 50px auto;
}
</style>