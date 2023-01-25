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
            <img class="project-img" src="../assets/portfolio.png" alt="projet spotart">
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
                L'Art en ligne
              </p>
            </div>
              <img class="project-img" src="../assets/spotart.png" alt="projet spotart">
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

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    transition: background-color 0.5s;
   }
  .project-img {
    transition: all .2s ease-in-out;
   }
  .project-img:hover {
    box-shadow: 0 20px 50px rgba(0,0,0,0.8);
    transform: scale(1.5);
  }
   h3 {
    text-transform: uppercase;
    color: black;
    font-weight: bold;
  }
  p {
    color: rgb(39 48 31);
  }
  .project-titles {
      margin: 0.5em;
    }
  .stack-sticker-w{
      background-color: #9999eb;
      color: black;
      padding: 5px;
      border-radius: 3px;
      margin-right: 5px;
    }
    .stack-sticker-v {
      background-color: #a7e2b4;
      color: black;
      padding: 5px;
      border-radius: 3px;
    }
    .stack-sticker-v,
    .stack-sticker-w {
      font-size: 0.8em;
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
      text-align: center;
    }
    .project-img {
      width: 10em;
      border-radius: 5px;
    }
    .stack {
      display: flex;
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
      text-align: center;
      font-size: 1.5em;
    }
    .project-img {
      width: 18em;
      border-radius: 5px;
    }
    .stack {
      display: flex;
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
      margin: 70px 10px;
      font-size: 3em;
    }
    .container {
      display: flex;
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
    .project-titles {
      margin: 0.5em;
    }
    p {
      text-align: center;
    }
    .project-img {
      width: 15em;
      border-radius: 5px;
    }
    .stack {
      display: flex;
    }
  }

  </style>
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
