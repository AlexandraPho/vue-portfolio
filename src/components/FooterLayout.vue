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
   }
   a {
    text-decoration: none;
    color: black;
    margin: 5px;
    }
   #social-links {
    text-align: center;
  }

  @media only screen and (max-width: 767px) {
    #social-links {
      display: flex;
      justify-content: space-around;
      margin: 4em;
    }
    .img-link {
      width: 3em;
    }
  }

  @media only screen and (min-width: 768px) {
    #social-links {
      display: flex;
      justify-content: space-around;
      margin: 4em;
    }
    .img-link {
      width: 5em;
    }
  }

  @media only screen and (min-width: 1200px) {
    #social-links {
      display: flex;
      margin: 1em;
      flex-direction: column;
      align-items: center;
    }
    .img-link {
      width: 3em;
    }
    .link {
      display: flex;
      margin: 20px;
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
  