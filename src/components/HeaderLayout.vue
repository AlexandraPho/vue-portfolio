<template>
    <header>
      <!--Icon logo-->
      <router-link :to="{ name: 'HomeApp' }"><img src="../assets/header-logo.png" class="icon-logo" alt="logo-AP"></router-link>
      <!--<NavigationLayout/>-->
    </header>
  </template>
  
  <script>
    //import NavigationLayout from '/components/NavigationLayout.vue';
  
  export default {
    name: 'HeaderLayout',
    components : {
      //NavigationLayout
    }
  }
  </script>
  
  <style>
    header {
      background-color: black;
      display: flex;
      justify-content: space-around;
    }
    .icon-logo {
      width: 300px;
      margin-right: 100px;
    }
    
  
  </style>
  