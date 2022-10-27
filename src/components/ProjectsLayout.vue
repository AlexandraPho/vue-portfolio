<template>
    <div class="block-container">
      <h2 class="titles-components">
          Mes projets
      </h2>
      <div class="container">
        <section class="card">
          <a href ="https://github.com/AlexandraPho/vue-portfolio">
            <div class="titles">
              <h3 class="project-titles">
                Portfolio
              </h3>
              <p>
                Mon portfolio actuel
              </p>
            </div>
            <img class="project-img" src="../assets/spotart.jpg" alt="projet spotart">
            <div class="stack">
              <p class="stack-sticker-v">Vue.js</p>
            </div>
          </a> 
        </section>
        <section class="card">
          <a href ="https://github.com/AlexandraPho/Spotart-front">
            <div class="titles">
              <h3 class="project-titles">
                Spotart
              </h3>
              <p>
                Découvrir des oeuvres d'art
              </p>
            </div>
              <img class="project-img" src="../assets/spotart.jpg" alt="projet spotart" width="200px">
            <div class="stack">
              <p class="stack-sticker-w">Wordpress</p>
              <p class="stack-sticker-v">Vue.js</p>
            </div>
          </a>
        </section>
        <section class="card">
          <a href ="https://github.com/AlexandraPho/vue-portfolio">
          <div class="titles">
              <h3 class="project-titles">
                O'cuisine
              </h3>
              <p>
                Site de recettes de cuisines
              </p>
            </div>
              <img class="project-img" src="../assets/ocuisine.jpg" alt="projet ocuisine" width="200px">
            <div class="stack">
              <p class="stack-sticker-w">Wordpress</p>
              <p class="stack-sticker-v">Vue.js</p>
            </div>
          </a>
        </section> 
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: "ProjectsLayout",
  }
  </script>
  

  <style scoped>

.container {
    background: rgb(148,117,132);
    background: radial-gradient(circle, rgba(148,117,132,1) 4%, rgba(204,195,200,1) 45%, rgba(255,255,255,1) 80%);
  }
  .project-img {
    width: 10em;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
   }
  .card:hover {
    border: 3px solid rgb(115, 16, 61);
    box-shadow: 0px 0px 999px 999px rgba(255, 255, 255, 0.5);
    z-index: 500;
   }
   h3 {
    color: rgb(115, 16, 61);
  }
   
  /*Smartphone version*/
  @media screen and (max-width: 767px) {
    .block-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .titles-components {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 80px 10px 30px;
      font-size: 1.7em;
    }
    .container {
      background-color: rgb(231, 231, 231);
      width: 100%;
    }
    .card {
      background-color: white;
      border-radius: 10px;
      padding: 15px;
      margin: 40px 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .titles {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h3 {
      font-size: 1.5em;
    }
    p {
      color: rgb(39 48 31);
      text-align: center;
    }
    .project-img {
      width: 10em;
      border-radius: 5px;
    }
    .stack {
      display: flex;
    }
    .stack-sticker-w{
      background-color: #404078;
      color: white;
      padding: 5px;
      border-radius: 3px;
      margin-right: 5px;
    }
    .stack-sticker-v {
      background-color: #0e6e22;
      color: white;
      padding: 5px;
      border-radius: 3px;
    }
  }
  
  /*Tablet version*/
  @media screen and (min-width: 768px) {
    .block-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .titles-components {
      margin: 80px 10px;
      font-size: 2.5em;
    }
    .container {
      background-color: rgb(231, 231, 231);
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .card {
      background-color: white;
      border-radius: 10px;
      padding: 15px;
      margin: 30px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 40em;
    }
    .titles {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h3 {
      font-size: xx-large;
    }
    p {
      color: rgb(39 48 31);
      text-align: center;
      font-size: 1.5em;
    }
    .project-img {
      width: 10em;
      border-radius: 5px;
    }
    .stack {
      display: flex;
    }
    .stack-sticker-w{
      background-color: #404078;
      color: white;
      padding: 5px;
      border-radius: 3px;
      margin-right: 5px;
    }
    .stack-sticker-v {
      background-color: #0e6e22;
      color: white;
      padding: 5px;
      border-radius: 3px;
    }
  }
  
  /*Desktop version*/
  @media screen and (min-width: 1200px) {
    .block-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .titles-components {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 80px 10px 30px;
    }
    .container {
      background-color: rgb(231, 231, 231);
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      flex-direction: row;
    }
    .card {
      background-color: white;
      border-radius: 10px;
      padding: 15px;
      margin: 30px 20px;
      width: 30em;
    }
    .titles {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20em;
    }
    p {
      color: rgb(77, 82, 72);
      text-align: center;
    }
    .project-img {
      width: 10em;
      border-radius: 5px;
    }
    .stack {
      display: flex;
    }
    .stack-sticker-w{
      background-color: #404078;
      color: white;
      padding: 5px;
      border-radius: 3px;
      margin-right: 5px;
    }
    .stack-sticker-v {
      background-color: #0e6e22;
      color: white;
      padding: 5px;
      border-radius: 3px;
    }
  }

  </style>
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
