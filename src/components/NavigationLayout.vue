<template>
  <div>
    <!-- Menu container-->
    <div class="header-container"> 
      <div class="menu-header">
        <!--LOGO-->
         <router-link :to="{name: 'HomeApp'}"><img src="../assets/AP.png" class="header-logo"></router-link> 
          <!--Hamburger icon with click method-->
          <img src="../assets/menu.svg" class="img-burger-menu" @click="showMenu()"> 
      </div>
          <!--Menu content-->
          <nav class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
            <ul class="nav-items">
              <router-link :to="{name: 'AboutMeApp'}"><li>Je me présente</li></router-link>
              <router-link :to="{name: 'ProjectsApp'}"><li>Mes projets</li></router-link>
              <router-link :to="{name: 'ContactApp'}"><li>Contact</li></router-link>
            </ul>
          </nav>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showMobileMenu: false,
        };
    },
    methods: {
      showMenu() {
        this.showMobileMenu = !this.showMobileMenu;
      },
    },
  };
</script>

<style scoped>

  .header-container {
    background-color: white;
    width: 100%;
    position: absolute;
  }
  .nav-content {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    align-items: flex-start;
  }
  .nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    color: rgb(115, 16, 61);
    padding: 0 10px;
  }
  a {
    text-decoration: none;
  }
  
  /*Mobile version - hidden hamburger menu*/
  @media screen and (max-width: 767px) {
    .menu-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgb(115, 16, 61);
      }
    .header-logo {
      padding: 20px;
      width: 5em;
    }
    .img-burger-menu {
      width: 2em;
      padding: 10px;
    }
    .nav-content {
      flex-direction: column;
      align-items: center;
      z-index: 100;
      position: relative;
      transition: all 0.2s ease-out;
      margin: 5px;
    }
    .open-menu {
      opacity: 1;
      height: 150px;
      font-weight: bold;
    }
    .closed-menu {
      opacity: 0;
      height: 0;
      padding: 0;
    }
    .nav-items {
      flex-direction: column;
      color: white;
      display: flex;
      align-items: center;
    }
    li {
      margin: 10px;
    }
  }
  
  /*Tablet version*/
  @media screen and (min-width: 768px) {
    .header-container {
      position: absolute;
      width: 100%;
    }
    .menu-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header-logo {
      padding: 20px;
      width: 7em;
    }
    .img-burger-menu {
      width: 3em;
      padding: 20px;
    }
    .nav-content {
      flex-direction: column;
      align-items: center;
      z-index: 100;
      position: relative;
      transition: all 0.2s ease-out;
      margin: 5px;
    }
    .open-menu {
      opacity: 1;
      height: 170px;
      font-weight: bold;
    }
    .closed-menu {
      opacity: 0;
      height: 0;
      padding: 0;
    }
    .nav-items {
      font-size: large;
      flex-direction: column;
      color: white;
      display: flex;
      align-items: center;
    }
    li {
      font-size: 25px;
      margin: 10px;
    }
  }
  
  /*Desktop version*/
  @media screen and (min-width: 1200px) {
    .header-container {
      padding: 10px;
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .header-logo {
      width: 8em;
      padding: 20px;
    }
    .img-burger-menu {
      display: none;
    }
    .nav-content {
      opacity: 1;
      display: flex;
      flex-direction: row;
    }
    .nav-items {
      flex-direction: row
    }
    li {
      margin: 10px;
      font-size: 1.2em;
    }
  }
  
</style>