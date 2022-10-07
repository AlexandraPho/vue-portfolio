<template>
  <div>
    <!-- Menu container-->
    <div class="container"> 
      <div class="menu-header">
        <!--LOGO-->
          <h1 class="header-logo">Alexandra Pinheiro</h1>
          <!--Hamburger icon with click method-->
          <img src="../assets/menu.svg" class="img-burger-menu" @click="showMenu()"> 
      </div>
          <!--Menu content-->
          <nav class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
            <ul class="nav-items">
              <li>Je me présente</li>
              <li>Mes projets</li>
              <li>Contact</li>
            </ul>
            <div class="CV-button">Mon CV</div>
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

<style >
  .container {
    background-color: black;
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
    padding: 0 10px;
  }
  

  /*Mobile version - hidden hamburger menu*/
  
  @media screen and (max-width: 768px) {
    .container {
      padding: 15px;
      position: relative;
      width: 100%;
    }
    .menu-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      }
    .header-logo {
      font-size: small;
      color: rgb(255, 103, 99);
      text-transform: uppercase;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      margin: 0px;
    }
    .img-burger-menu {
      width: 25px;
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
    .CV-button {
      color: white;
      border-radius: 5px;
      border: solid 1px rgb(255, 103, 99);
      padding: 5px;
      margin: 15px;
    }
  }

  /*Tablet version*/
  @media screen and (min-width: 769px) {
    .container {
      padding: 15px;
      position: absolute;
      width: 100%;
    }
    .menu-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      }
    .header-logo {
      font-size: small;
      color: rgb(255, 103, 99);
      text-transform: uppercase;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      margin: 0px;
    }
    .img-burger-menu {
      width: 25px;
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
    .CV-button {
      color: white;
      border-radius: 5px;
      border: solid 1px rgb(255, 103, 99);
      padding: 5px;
      margin: 15px;
    }
  }

  /*Desktop version*/
  @media screen and (min-width: 1024px) {
    .container {
      padding: 10px;
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
    }
    .header-logo {
      font-size: x-large;
      color: rgb(255, 103, 99);
      text-transform: uppercase;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    .img-burger-menu {
      display: none;
    }
    .nav-content {
      opacity: 1;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
    .nav-items {
      flex-direction: row
    }
    li {
      margin: 10px;
      font-size: 1.1em;
    }
    .CV-button {
      color: white;
      border-radius: 5px;
      border: solid 1px rgb(255, 103, 99);
      padding: 5px;
      font-size: 1.1em;
      margin: 5px 60px;
    }
  }
  
</style>