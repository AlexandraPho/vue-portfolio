<template>
  <div class="block-container">
    <section id="information">
      <div class="profil">
          <h1>Bienvenue !</h1>
          <p>  
            Je suis <strong>Alexandra Pinheiro</strong>, une jeune développeuse web &#x26; mobile en herbe. 
            Dans ce portfolio vous découvrirez qui je suis ainsi que mes projets personnels.
          </p>
      </div>
      <div class="profil-image">
          <img src="../assets/personal-img.png" class="perso-img" alt="profil-image">
      </div>
    </section>
    <section id="social-links">
        <a href="https://github.com/AlexandraPho" target="_blank" rel="noreferrer noopener">
            <div class="link">
              <img src="../assets/github.svg" class="github-logo" alt="Github-logo"> 
            </div>
        </a>
        <a href="https://www.linkedin.com/in/alexandra-pinheiro/" target="_blank" rel="noreferrer noopener">
            <div class="link">
                <img src="../assets/linkedin.svg" class="linkdin-logo" alt="Linkdin-logo">        
            </div>
        </a>
      </section>
  </div>
</template>

<script>

  export default {
      name: "MainLayout"
  }

</script>

<style scoped>

  .block-container {
    margin: 40px 0px 0px;
  }
  #information {
    background: #246647;
    align-items: center;
  }
  h1,
  p{
    color: white;
  }
  h1 {
    color: #b65c7b;
    text-shadow: 4px 5px 1px rgb(115, 16, 61);
  }
  .profil-image {
    box-shadow: 20px 10px 60px 0 rgb(115, 16, 61);
  }
  a {
    transition: transform .1s;
  }
  a:hover {
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  /*Smartphone version*/
  @media only screen and (max-width: 767px) {
    #information {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 40em;
    }
    .profil {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
      margin: 0px 30px;
    }
    h1 {
      font-size: 3em;
      margin: 0;
      font-weight: normal;
    }
    p {
      font-size: 1.2em;
      line-height: 1.5em;
    }
    .profil-image {
      display:flex;
      justify-content: center;
      margin-top: 10px;
      position: relative; 
      width: 180px; 
      height: 180px; 
      overflow: hidden; 
      border-radius: 50%; 
    }
    .perso-img {
      width: 100%; 
      height: 130%;
    }
    #social-links{
      display: flex;
      margin: 20px;
      justify-content: space-evenly;
    }
    .github-logo {
      width: 3em;
      padding: 3px;
    }
    .linkdin-logo {
      width: 3.5em;
    }
  }

  /*Tablet version*/
  @media only screen and (min-width: 768px) {
    #information {
      display: flex;
      height: 65em;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }
    .profil {
      width: 50%;
      flex-wrap: wrap;
      text-align: center;
      margin: 0px 30px 0px 20px;
    }
    h1 {
      font-weight: normal;
      font-size: 4em;
      margin: 40px 0px;
    }
    p {
      font-size: 1.5em;
      line-height: 2em;
    }
    .profil-image {
      display: flex;
      justify-content: center;
      position: relative; 
      width: 300px; 
      height: 300px; 
      overflow: hidden; 
      border-radius: 50%; 
    }
    .perso-img {
      width: 100%; 
      height: 130%;
    }
    #social-links{
      display: flex;
      margin: 50px;
      justify-content: space-evenly;
    }
    .github-logo {
      width: 4em;
      padding: 7px;
    }
    .linkdin-logo {
      width: 5em;
    }
  }

  /*Desktop version*/
  @media only screen and (min-width: 1200px) {
    #information {
      height: 50em;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      justify-content: center;
    }
    .profil {
      display: flex;
      justify-content: center;
      margin: 30px 30px 20px 20px;
    }
    h1 {
      font-size: 5em;
    }
    p {
      font-size: 1.7em;
      line-height: 2em;
    }
    .profil-image {
      display: flex;
      justify-content: center;
      position: relative; 
      width: 400px; 
      height: 400px; 
      overflow: hidden; 
      border-radius: 50%; 
    }
    .perso-img {
      width: 100%; 
      height: 130%;
    }
    #social-links{
      display: flex;
      margin: 60px;
      justify-content: space-evenly;
    }
    .github-logo {
      width: 5em;
      padding: 7px;
    }
    .linkdin-logo {
      width: 6em;
    }
  }
</style>
