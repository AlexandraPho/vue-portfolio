<template>
  <div>
    <!-- Menu container-->
    <div class="nav-menu"> 
      <!--Hamburger icon with click method-->
      <img src="../assets/menu.svg" class="burger-menu" @click="showMenu()"> 
      <!--Menu content-->
      <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
        <!--LOGO-->
        <div class="logo">Logo</div>
        <ul class="nav-items">
          <li>Je me présente</li>
          <li>Mes projets</li>
          <li>Contact</li>
        </ul>
        <div class="CV-button">Mon CV</div>
      </div>
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
  .nav-menu {
    background-color: white;
  }
  .nav-content {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
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
  .burger-menu {
    display: none;
  }

  /*Mobile version - hidden hamburger menu*/
  
  @media screen and (max-width: 768px) {
    .nav-menu {
      background-color: black;
      padding: 15px;
      position: absolute;
      width: 100%;
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
    .nav-content {
      flex-direction: column;
      align-items: flex-end;
      z-index: 100;
      position: relative;
      transition: all 0.2s ease-out;
    }
    .nav-items {
      flex-direction: column;
      color: white;
      display: flex;
      align-items: flex-end;
    }
    .burger-menu {
      background-color: white;
      width: 35px;
      display: flex;
      border-radius: 50px;
    }
    li {
      margin: 10px;
    }
    .CV-button {
      color: white;
      border-radius: 5px;
      border: solid 1px white;
      padding: 5px;
      margin: 15px;
    }
  }
</style>