<template>
  <div id="app">
    <nav-side-bar></nav-side-bar>
    <div class="mainContent">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavSideBar from './components/NavSideBar';

export default {
  name: 'App',
  components: {
    NavSideBar,
  },
};
</script>

<style>
  @import './assets/common.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }
  .mainContent {
    margin-left: 200px;
    top: 0px;
  }
</style>
