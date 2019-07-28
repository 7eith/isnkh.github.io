<template>
  <div>
    <loading class="animated fadeIn"/>
    <navbar></navbar>
    <nuxt class="animated fadeInDown"/>
  </div>
</template>

<script>
import Loading from '~/components/Loading.vue'
import Navbar from '~/components/Navbar.vue'


export default {
  components: {
    Loading,
    Navbar
  }
}
</script>
