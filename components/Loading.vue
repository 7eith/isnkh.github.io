<template>
  <div class="loadingComponent" v-if="loadingApplication">
    <div class="loading">
      <p>Alexis 'iSnkh' M.</p>
      <div class="loading-container">
        <div class="loading-bar" v-bind:style="{ width: loadingNumber + '%' }"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingNumber : 0,
      loadingApplication: true
    }
  },
  mounted: function () {
    setTimeout(() => { this.loadingNumber = 100;}, 1000);
    setTimeout(() => { this.loadingApplication = false; }, 5000)
  }
}
</script>
