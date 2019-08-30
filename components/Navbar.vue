<template>
  <navbar>
    <div class="logo">Snkh |</div>
    <nav>
       <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <div class="hamburger hamburger--spin">
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div>
  </navbar>
</template>

<script>
export default {
  data: () => {
    showMobileMenu: false
  }
}
</script>
