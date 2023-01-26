<template>
  <div class="block-container">
    <h2 class="titles-components">
      Présentation
    </h2>
      <div class="container">
        <section class="about-me">
          <div class="text">
            <h3 class="titles">
              Curieuse et Motivé !
            </h3>
            <p>
              Grâce à mon parcours artistique mais aussi à mes expériences professionnelles, j'ai acquis de nombreuses <strong>compétences transversales</strong> comme conceptualiser un projet, le maquetter, établir un cahier des charges.<br>Mais aussi l'organisation, l'écoute, le conseil ainsi que des qualités relationnelles.
              <br>En 2020, je me forme en autodidacte au base de la programmation informatique en suivant des cours sur diverses plateformes que j'auto-finance.
              Afin d'avoir des connaissances solides, je décide d'intègrer l'école O'Clock pour effectuer la formation de développeur web et web mobile. 
              <br>Suite à cette formation, je continue à me former et je reste toujours en veille technologique.
            </p>
          </div>
        </section>
        <section class="soft_hard-skills">
          <h3 class="titles">
            Mes Soft & hard skills
          </h3>
          <div class="soft-skills">
            <span class="skills">Créative</span>
            <span class="skills">Autonome</span>
            <span class="skills">Persévérante</span>
            <span class="skills">Écoute active</span>
          </div>
          <div class="stack-tech">
            <h4>Mes outils</h4>
            <div class="logos">
              <img class="logo-techs" alt="logo-html" src="../assets/html.svg">
              <img class="logo-techs" alt="logo-css" src="../assets/css.png">
              <img class="logo-techs" alt="logo-vue" src="../assets/vuejs.svg">
              <img class="logo-techs" alt="logo-vue" src="../assets/wordpress.svg">
              <img class="logo-techs" alt="logo-php" src="../assets/php.png">
              <img class="logo-techs" alt="logo-tailwind" src="../assets/tailwindcss.png">
              <img class="logo-techs" alt="logo-github" src="../assets/github.svg">
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
  
  .container {
    background: #CD921E;
  }
  .skills {
    background-color: white;
    color: black;
    border-radius: 35px;
    font-family: 'Belleza', sans-serif;
  }
  .titles,
  .skills-titles {
    color: white;
  }
  p {
    color:white;
  }
  h4 {
    text-transform: uppercase;
  }

  /*Smartphone Version*/
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
      font-size: 1.7em;
    }
    .about-me {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 10px;
    }
    .text {
      padding: 20px;
    }
    .titles {
      font-size: large;
      text-transform: uppercase;
    }
    p {
      font-size: 1.2em;
      line-height: 1.5em;
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
    }
    .stack-tech {
      display: flex;
      margin: 1.5em;
      flex-direction: column;
      align-items: center;
    }
    h4 {
      color: white;
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
      margin: 80px 10px 30px;
      font-size: 2.5em;
    }
    .about-me {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 15px;
    }
    .text {
      padding: 40px;
    }
    .titles {
      font-size: x-large;
      text-transform: uppercase;
    }
    p {
      font-size: 1.5em;
      line-height: 1.5em;
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
      font-size: 1.5em;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .skills {
      margin: 15px;
      padding: 15px;
    }
    .stack-tech {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 1.5em;
    }
    h4 {
      color: white;
      font-size: 1.5em;
    }
    .logos {
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .logo-techs {
      width: 4em;
      margin: 2em;
    }
  }

  /*Desktop Version*/
  @media screen and (min-width: 1200px) {
    .block-container {
      padding: 50px 0px;
    }
    .container {
     
      align-items: center;
      justify-content: center;
    }
    .titles-components {
      margin: 80px 10px;
      font-size: 3em;
    }
    .about-me {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 15px;
    }
    .text {
      padding: 5px;
    }
    .titles {
      font-size: x-large;
      text-transform: uppercase;
    }
    p {
      text-align: center;
      width: 60em;
      font-size: 1.1em;
    }
    .skills-titles {
      font-size: x-large;
      margin: 2.5em;
    }
    .soft-skills {
      display: flex;
      width: 20em;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0.5em;
    }
    .skills {
      margin: 15px;
      padding: 15px;
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
      width: 5em;
      margin: 1em;
    }
  }

</style>
