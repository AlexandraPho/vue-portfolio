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
            <button class="button-CV"><a href="../assets/resume_AP.pdf" download target="_blank" class="button">Télécharger mon CV</a></button>
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
    position: fixed;
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
    color: #262727;
    font-weight: bolder;
    padding: 0 10px;
  }
  li:hover {
    color: #CD921E;
  }
  a {
    text-decoration: none;
  }
  .button-CV {
    border: none;
    display: block;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    position: relative;
    font-weight: 700;
    box-shadow: 0 5px 15px rgba(0,0,0,0.20);
    background-color: white;
  }
  .button-CV a {
    position: relative; 
    z-index: 1;
    color: black;
  }
  .button-CV:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background: #af2865;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }
  .button-CV:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
  a:hover {
    color: #CD921E;
  }


  /*Mobile version - hidden hamburger menu*/
  @media screen and (max-width: 767px) {
    .menu-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
      height: 190px;
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
    .button-CV {
      padding: 15px 20px;
      margin: 15px;
      border-radius: 50px;
    }
    .button-CV {
    font-weight: 700;
    font-size: 12px;
    }
    .button-CV:after {
      height: 450%;
      width: 140%;
    }
  }
  
  /*Tablet version*/
  @media screen and (min-width: 768px) {
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
      height: 250px;
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
      font-size: 1.5em;
      margin: 10px;
    }
    .button-CV {
      padding: 15px 20px;
      margin: 15px;
      border-radius: 50px;
    }
    .button-CV {
    font-weight: 700;
    font-size: 1em;
    }
    .button-CV:after {
      height: 450%;
      width: 140%;
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
      width: 6em;
      padding: 15px;
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
      flex-direction: row;
      margin-right: 5em;
    }
    li {
      margin: 10px;
      font-size: 1.3em;
    }
    .button-CV {
      padding: 15px 20px;
      margin: 20px;
      border-radius: 50px;
      font-size: 1em;
    }
  }
  @media screen and (min-width: 1500px) {
    .nav-items{
      margin-right: 9em;
    }
  }
  @media screen and (min-width: 1860px) {
    .nav-items{
     margin-right: 16em;
    }
  }
  @media screen and (min-width: 2050px) {
    .nav-items{
     margin-right: 25em;
    }
  }
</style>