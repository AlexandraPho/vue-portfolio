<template>
    <header>
      <NavigationMobileLayout/>
      <div class="content" :class="{'open':showNav}">
        <div class="top-bar">
          <router-link :to="{ name: 'HomeApp' }"><img src="../assets/header-logo.png" class="icon-logo" alt="logo-AP"></router-link>
          <div id="navigation-icon" v-if="showMobileMenu" @click="showNav = !showNav">
            <img src="../assets/menu.svg" alt="menu">
          </div>
          <NavigationLayout v-if="!showMobileMenu"/>
        </div>
      </div>
    </header>
  </template>
  
  <script>
    import NavigationLayout from '../components/NavigationLayout.vue';
    import NavigationMobileLayout from '../components/NavigationMobileLayout.vue';

  export default {
    name: 'HeaderLayout',
    data: ()=> {
      return {
        showMobileMenu: true,
        showNav: false
      }
    },
    methods: {
    showMenu() {
    this.showMobileMenu = window.innerWidht <= 990;
    },
    },
    components : {
      NavigationLayout,
      NavigationMobileLayout
    },
    created() {
      this.showMenu();
    }

  }
  </script>
  
  <style>
    header {
      position: relative;
      background-color: white;
      width: calc(50% - 20px);
      height: calc(50vh - 20px);
      color: black;
      overflow: hidden;
    }
    .icon-logo {
      width: 300px;
      margin-right: 100px;
    }
    .top-bar {
      display: flex;
      width: 100%;
    }

    .content {
      position: absolute;
      top: 10px;
      width: calc(90% - 60px);
      height: calc(40vh - 60px);
      padding: 20px;
      background-color: white;
    }

    .open {
      transform: translateX(300px);
    }

    #navigation-icon {
      padding: 10px 10px 20px;
      margin-right: 10px;
      cursor: pointer;
    }

    img {
      width: 2rem;
    }
  
  </style>
  