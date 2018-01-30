<template>
  <div id="app">
    <nav-side-bar></nav-side-bar>
    <router-view/>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
