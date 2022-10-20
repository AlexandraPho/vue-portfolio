<template>
    <footer>
      <section id="social-links">
        <a href="https://github.com/AlexandraPho">
            <div class="link">
              <img src="../assets/github.svg" class="img-link" alt="Github">
              <h3>Github</h3>
            </div>
        </a>
        <a href="https://www.linkedin.com/in/alexandra-pinheiro/">
            <div class="link">
                <img src="../assets/linkedin.svg" class="img-link" alt="Linkdin">
                <h3>LinkdIn</h3>
            </div>
        </a>
      </section>
      <div class="resume">
        <p>Télécharger mon CV 
          <a class="resume-document" href="" download="CV Alexandra Pinheiro"> 
          <strong>&nbsp;ici</strong>
          </a>
        </p>
      </div>
    </footer>
  </template>
    
    <script>
    export default {
      name: 'FooterLayout',
    }
    </script>
    
    <style scoped>
     a {
      text-decoration: none;
     }
     p {
      display: flex;
      justify-content: center;
      color: black;
     }
     a {
      text-decoration: none;
      color: black;
      }
     #social-links {
      text-align: center;
    }
    @media only screen and (max-width: 767px) {
      footer {
        background-color: white;
        display: flex;
        flex-direction: column;
      }
      #social-links {
        display: flex;
        justify-content: space-around;
        margin-top: 1em;
      }
      .img-link {
        width: 2em;
      }
    }
    @media only screen and (min-width: 768px) {
      footer {
        background-color: white;
        display: flex;
        flex-direction: column;
      }
      #social-links {
        display: flex;
        justify-content: space-around;
        margin: 2em;
      }
      .img-link {
        width: 5em;
      }
      p {
        font-size: large;
      }
    }
    @media only screen and (min-width: 1200px) {
      footer {
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      }
      #social-links {
        margin: 1em;
      }
      .img-link {
        width: 4em;
      }
      .link {
        display: flex;
        margin: 2em;
        flex-direction: column;
        align-items: center;
      }
    }
    </style>
   