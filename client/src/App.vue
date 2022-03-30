<template>
  <div class="relative">
    <div class="page__background absolute -z-10"></div>

    <div class="max-w-[1320px] mx-auto">
      <nav-bar/>

      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
export default {
  components: { NavBar },
};
</script>
