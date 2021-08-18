<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <div>
    <router-view v-wechat-title='$route.meta.title'></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
@import url(./assets/css/reset.css);
}
</style>
