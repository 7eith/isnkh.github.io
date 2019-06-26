<template>
  <section class="loading">
    <vue-typer :text="loadingText" :repeat="loadingRepeat"></vue-typer>
    <div class="loading-container">
      <div class="loading-bar" v-bind:style="{ width: loadingNumber + '%', backgroundColor: loadingColor }"/>
    </div>
    <vue-typer :text="loadingFooter"></vue-typer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loadingText: 'Initializing...',
      loadingNumber : 0,
      loadingColor: '#00C58E',
      loadingRepeat: 0,
      loadingFooter: ''
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.loadingText = ' > Logging as snkh@snkh.me'
    }, 0);

    setTimeout(() => {
      this.loadingNumber = 90
      this.loadingText = 'snkh@snkh.me [master]: Loading...'
    }, 2500);

    setTimeout(() => {
      this.loadingColor = 'red'
      this.loadingText = ' > Error!'
    }, 9500);

    setTimeout(() => this.loadingText = '> Maintenance mode: [OK]', 12000);

    setTimeout(() => {
      this.loadingRepeat = 69
      this.loadingColor = 'rgb(92, 81, 157)'
      this.loadingText = '[irc] snkh@snkh.me: V2 coming!'
      this.loadingFooter = '[info] contact: hi@snkh.me | discord: Snkh#8559'
    }, 17000);
  }
}
</script>
