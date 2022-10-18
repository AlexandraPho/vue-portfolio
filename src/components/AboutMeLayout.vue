<template>
    <div class="block-container">
      <h2 class="titles-components">
          Je me présente
      </h2>
        <div class="container-one">
            <section class="about-me">
          <h3 class="titles">
            Curieuse
          </h3>
          <p>
            J'ai toujours été la personne polyvalente dans mes divers emplois car j'aime découvrir de nouveaux horizons.
            L'apprentissage est pour moi une façon de me renouveler constamment.
          </p>
          <h3 class="titles">
            Reconversion
          </h3>
          <p>
            En 2020, je  démarre des cours sur diverses plateforme pour apprendre le langage HTML et CSS en autodidacte.
            Et c'est le déclic lorsque le créateur du site web de mon ancienne entreprise me montre comment ça se passe sous le capot!
          </p>
          <h3 class="titles">
            Formation
          </h3>
          <p>
            En septembre 2021, je rejoint la promo Yuna de l'école O'Clock pour une formation intensive de 6 mois.
            A la clé une présentation sur Youtube du site Web créé avec l'aide de mon groupe de travail. 
          </p>
      </section> 
      <section class="stack-technic">
        <h3 class="titles-stack">
          Stack technique
        </h3>
        <div class="logos">
          <img class="logo-techs" alt="logo-html" src="../assets/html5.svg">
          <img class="logo-techs" alt="logo-css" src="../assets/css3.svg">
          <img class="logo-techs" alt="logo-vue" src="../assets/vuejs.svg">
          <img class="logo-techs" alt="logo-vue" src="../assets/wordpress.svg">
          <img class="logo-techs" alt="logo-php" src="../assets/php.svg">
          <img class="logo-techs" alt="logo-linux" src="../assets/linux.svg">
          <img class="logo-techs" alt="logo-github" src="../assets/github.svg">
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
  
  /*Smartphone Version*/
  @media screen and (max-width: 767px) {
    
    .block-container {
      background-color: rgb(249, 215, 215);
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 5px;
    }

    .about-me {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 15px 20px;
      color: white;
    }
    .titles {
      font-size: large;
      text-transform: uppercase;
      color: black;
    }
    p {
      /*width: 15em;*/
      color: black;
    }
    .stack-technic {
      margin: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .titles-stack {
      font-size: large;
      text-transform: uppercase;
      color: black;
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
      background-color: rgb(249, 215, 215);
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 30px;
    }
    .titles-components {
      font-size: xx-large;
    }
    .about-me {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 15px 20px;
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
      color: black;
    }
    .stack-technic {
      padding: 15px 20px;
      margin: 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .titles-stack {
      font-size: x-large;
      text-transform: uppercase;
      color: black;
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
      background-color: rgb(249, 215, 215);
      margin: 30px;
    }
    .titles-components {
      font-size: xxx-large;
    }
    .container-one {
      display: flex;
      align-items: baseline;
    }
    .about-me {
      margin: 10px;
      padding: 5px;
      text-align: start;
    }
    .titles {
      font-size: x-large;
      text-transform: uppercase;
      color: black;
    }
    p {
      margin: 5px;
      font-size: 1.5em;
      color: black;
    }
    .stack-technic {
      margin: 10px;
      padding: 5px;
    }
    .titles-stack {
      font-size: x-large;
      text-transform: uppercase;
      color: black;
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

</style>
