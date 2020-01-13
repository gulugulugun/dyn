<template>
    <div id="app">
<!--        <sample></sample>-->
<!--        <example></example>-->
<!--        <my-date></my-date>-->
<!--        <login></login>-->
<!--        <nav-menu></nav-menu>-->
        <router-view></router-view>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
<script>
  import Sample from "@/components/Sample";
  import Example from "@/components/Example";
  import MyDate from "./components/myDate";
  import NavMenu from "./components/navMenu";
  import Login from "./components/Login";

  export default {
      components: {NavMenu,Login, MyDate, Example, Sample}
  }
</script>