<template>
  <div class="footer">
    <span class="footer_content">All right reserved. &copy; <span id="year">2018 </span><span><router-link class="nav_link" :to="{ name: '' }"><b> Terms and Conditions</b></router-link> ♥</span></span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.footer {
	background-color: #1b1c1d;
  	color: rgba(255, 255, 255, 0.9);
  	min-height: 45px;
}
.footer {
  text-align: center;
  margin: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.footer_content {
  padding-top: 15px;
}
.nav_link:hover {
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.5);
}
</style>
