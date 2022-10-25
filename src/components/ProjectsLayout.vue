<template>
    <div class="block-container">
      <h2 class="titles-components">
          Mes projets
      </h2>
      <div class="container">
        <section class="card">
          <div class="titles">
            <h3 class="project-titles">
              Portfolio
            </h3>
            <p>
              Mon portfolio (celui que vous visualisez actuellement)
            </p>
          </div>
          <img class="project-img" src="../assets/spotart.jpg" alt="projet spotart">
          <div class="stack">
            <p class="stack-sticker-v">Vue.js</p>
          </div>
          <a href=""></a>
        </section>
        <section class="card">
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
          <a href=""></a>
        </section>
        <section class="card">
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

  .project-img {
    width: 10em;
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
    }
    .container {
      background-color: rgb(231, 231, 231);
    }
    .card {
      background-color: white;
      border-radius: 10px;
      padding: 15px;
      margin: 30px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .titles {
      display: flex;
      flex-direction: column;
      align-items: center;
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

  /*Tablet version*/
  @media screen and (min-width: 768px) {
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
    }
    .card {
      background-color: white;
      border-radius: 10px;
      padding: 15px;
      margin: 30px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .titles {
      display: flex;
      flex-direction: column;
      align-items: center;
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

  /*Desktop version*/
  @media screen and (min-width: 1200px) {
      .block-container {
        margin: 20px;
      }
      .titles-components {
        font-size: xxx-large;
      }
      .container {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .card {
        background-color: rgb(255, 103,99);
        border-radius: 5px;
        padding: 15px;
        margin-bottom: 15px;
        margin-right: 20px;
        width: 20em;
      }
      .titles {
        font-size: x-large;
      }
      .project-img {
        justify-content: flex-end;
        display: flex;
        margin: 10px;
      }
      .stack-sticker-w{
        background-color: #404078;
        color: white;
        padding: 5px;
        border-radius: 3px;
        margin-right: 5px;
      }
      .stack {
        display: flex;
      }
      .stack-sticker-v {
        background-color: #0e6e22;
        color: white;
        padding: 5px;
        border-radius: 3px;
      }
      p {
        color: rgb(191, 191, 196);
      }
  }
  </style>
