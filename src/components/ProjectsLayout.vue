<template>
    <div class="block-container">
      <h2 class="titles-components">
          Mes projets
      </h2>
      <div class="container">
        <section class="container-one">
          <div class="titles-one">
            <h3 class="project-titles">
              Spotart
            </h3>
            <h4>
              2022
            </h4>
          </div>
          <div class="project-img">
           <img src="../assets/spotart.jpg" alt="projet spotart" width="200px">
          </div>
        </section>
        <section class="container-two">
          <div class="titles-two">
            <h3 class="project-titles">
              O'cuisine
            </h3>
            <h4>
              2022
            </h4>
          </div>
          <div class="project-img">
            <img src="../assets/ocuisine.jpg" alt="projet ocuisine" width="200px">
          </div>
        </section> 
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProjectsLayout"
  }
  </script>
  
  <style scoped>

  .block-container {
    background-color: rgb(231, 231, 231);
  }

  /*Smartphone version*/
  @media screen and (max-width: 767px) {
    .block-container {
      display: flex;
      flex-direction: column;
    }
    .titles-components {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 80px 10px 30px;
    }
      .container {
        margin-top: 3em;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .container-one {
        padding: 15px 20px;
        background-color: white;
        color: black;
        width: 85%;
      }
      .project-img {
        justify-content: flex-end;
        display: flex;
        margin: 10px;
      }
      .container-two {
        padding: 15px 20px;
        background-color: rgb(255, 103, 99);
        color: white;
        width: 85%;
      }
      h4 {
        font-weight: 100;
      }
   
  }
  </style>
