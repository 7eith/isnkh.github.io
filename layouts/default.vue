<template>
  <div>
    <loading class="animated fadeIn"/>
    <nuxt/>
  </div>
</template>

<script>
import Loading from '~/components/Loading.vue'

export default {
  components: {
    Loading
  }
}
</script>
