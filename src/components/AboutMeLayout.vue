<template>
  <div class="block-container">
    
      <section id="social-links">
        <a href="https://github.com/AlexandraPho">
            <div class="link">
              <img src="../assets/github.svg" class="img-link" alt="Github"> 
            </div>
        </a>
        <a href="https://www.linkedin.com/in/alexandra-pinheiro/">
            <div class="link">
                <img src="../assets/linkedin.svg" class="img-link" alt="Linkdin">        
            </div>
        </a>
      </section>
    <h2 class="titles-components">
      Présentation
    </h2>
      <div class="container-one">
        <section class="about-me">
          <div class="text">
            <h3 class="titles">
              Curieuse
            </h3>
            <p>
              J'ai toujours été la personne polyvalente dans mes divers emplois car j'aime découvrir de nouveaux horizons.
              L'apprentissage est pour moi une façon de me renouveler constamment.
            </p>
          </div>
          <div class="text">
            <h3 class="titles">
              Motivé
            </h3>
            <p>
              En 2020, je  démarre des cours sur diverses plateformes pour apprendre le langage HTML et CSS en autodidacte.
              En septembre 2021, je rejoins la promo Yuna de l'école O'Clock pour une formation intensive de 6 mois.
            </p>
            </div>
        </section>
        <section class="soft_hard-skills">
          <h3 class="titles">
            Mes Soft & hard skills
          </h3>
          <div class="soft-skills">
            <span class="skills">Curieuse</span>
            <span class="skills">Autonome</span>
            <span class="skills">Esprit d'équipe</span>
            <span class="skills">Communication</span>
          </div>
          <div class="stack-tech">
            <h4>Les outils techs que j'utilise</h4>
            <div class="logos">
              <img class="logo-techs" alt="logo-html" src="../assets/html5.svg">
              <img class="logo-techs" alt="logo-css" src="../assets/css3.svg">
              <img class="logo-techs" alt="logo-vue" src="../assets/vuejs.svg">
              <img class="logo-techs" alt="logo-vue" src="../assets/wordpress.svg">
              <img class="logo-techs" alt="logo-php" src="../assets/php.svg">
              <img class="logo-techs" alt="logo-linux" src="../assets/linux.svg">
            </div> 
          </div>
        </section> 
      </div>
  </div>
</template>

<script>
    export default {
      name: "AboutMeLayout"
    }
</script> 

<style scoped>
  
  .container-one {
    background-color: rgb(231, 231, 231);
  }

  /*Smartphone Version*/
  @media screen and (max-width: 767px) {
   
    .block-container {
      display: flex;
      flex-direction: column;
    }
    #social-links {
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
    }
    .img-link {
      width: 3.5em;
    }
    .titles-components {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 80px 10px 30px;
    }
    .about-me {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 10px;
    }
    .titles {
      font-size: large;
      text-transform: uppercase;
      color: black;
    }
    p {
      color: rgb(77, 82, 72);
      width: 17em;
    }
    .soft_hard-skills {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .skills-titles {
      font-size: large;
      margin: 1.5em;
    }
    .soft-skills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 20px;
    }
    .skills {
      margin: 5px;
      padding: 10px;
      background-color: rgb(115, 16, 61);
      color: white;
      border-radius: 5px;
    }
    .stack-tech {
      display: flex;
      margin: 1.5em;
      flex-direction: column;
      align-items: center;
    }
    h4 {
      color: rgb(77, 82, 72);
      font-weight: 200;
      font-size: large;
    }
    .logos {
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .logo-techs {
      width: 50px;
      margin: 10px;
    }
  }

  /*Tablet Version*/
  @media screen and (min-width: 768px) {

    .block-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 0px;
    }
    .titles-components {
      font-size: xx-large;
    }
    .about-me {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 15px;
      color: white;
    }
    .titles {
      font-size: x-large;
      text-transform: uppercase;
      color: black;
    }
    p {
      margin: 5px;
      font-size: 1.5em;
      color: rgb(77, 82, 72);
      width: 25em;
    }
    .soft_hard-skills {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .skills-titles {
      font-size: x-large;
      margin: 2.5em;
    }
    .soft-skills {
      margin: 2em;
    }
    .skills {
      margin: 15px;
      padding: 15px;
      background-color: rgb(115, 16, 61);
    }
    .stack-tech {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 1.5em;
    }
    h4 {
      font-weight: 200;
      font-size: x-large;
    }
    .logos {
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .logo-techs {
      width: 5em;
      margin: 2em;
    }
  }

  /*Desktop Version*/
  @media screen and (min-width: 1200px) {
    .block-container {
      padding: 50px 0px;
    }
    .container-one {
      display: flex;
      align-items: baseline;
    }
    .titles-components {
      font-size: xx-large;
    }
    .about-me {
      padding: 5px;
      text-align: start;
      margin-right: 30px;
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 5em;
    }
    .titles {
      font-size: x-large;
      text-transform: uppercase;
      color: black;
    }
    p {
      text-align: center;
      width: 25em;
      margin: 5px;
      font-size: 1.2em;
      color: rgb(77, 82, 72);
    }
    .soft_hard-skills {
      margin-left: 30px;
    }
    .skills-titles {
      font-size: x-large;
      margin: 2.5em;
      color: black;
    }
    .soft-skills {
      margin: 10px;
      display: flex;
      width: 30em;
      flex-wrap: wrap;
      justify-content: center;
    }
    .skills {
      margin: 15px;
      padding: 15px;
      background-color: rgb(115, 16, 61);
      color: white;
    }
    .stack-tech {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .logos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 30em;
    }
    .logo-techs {
      width: 4em;
      margin: 1em;
    }
  }

</style>
