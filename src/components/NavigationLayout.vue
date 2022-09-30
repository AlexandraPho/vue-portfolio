<template>
    <!--menu container-->
    <div class="nav-menu">
      <!--Hamburger icon with click method-->
      
      <!--Menu content-->
      <div class="nav-content" :class= "{'showMobileMenu': showMobileMenu} " @click="showMenu">
      <!--Here can be a logo-->
        <ul class="nav-items">
          <li><router-link class="header-anchor-element" :to="{ name: 'AboutMeApp' }">Je me présente</router-link></li>
          <li><router-link class="header-anchor-element" :to="{ name: 'ProjectsApp' }">Mes Projets</router-link></li>
          <li><router-link class="header-anchor-element" :to="{ name: 'ContactApp' }">Contact</router-link></li>
        </ul>
        <button class="cv-button">Mon CV</button>
      </div>
    </div>
</template>

<script>
export default {
  name: "NavigationLayout",
  data() {
    return {
    showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
    this.showMobileMenu = !this.showMobileMenu
    
    },
  },
};
</script>

<style >
.nav-menu {
  background-color: black;
  display: flex;
  justify-content: space-around;
}

.nav-content {
  display: flex;
  padding: 20px 30px;
  align-items: center;
  margin-left: 150px;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 150px;    
}
li {
  padding: 10px 10px;
  color: white;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
i {
  display: block;
}
.cv-button {
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  background-color:white;
  color: rgb(0, 7, 184);
}

/*Mobile version - hidden hamburger menu*/
@media screen and (max-width: 768px) {
  .nav-menu {
    background-color: black;
    padding-top: 10px;
    position: absolute;
    width: 50%;
    }
  .open-menu {
    opacity: 2;
    height: 300px;
  }
  .closed-menu {
    opacity: 2;
    height: 50px;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  .nav-items {
    flex-direction: column;
    font-size: 15px;
  }
  .menu-item {
    color: white;
    display: block;
    text-align: right;
    padding: 5px;
  }
  .cv-button {
  margin-top: 15px;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  background-color:white;
  color: rgb(0, 7, 184);
  }
}

@media screen and (min-width: 1400px) {
  .nav-items {
    flex-direction: row;
    justify-content: center;
  }
  
}
</style>