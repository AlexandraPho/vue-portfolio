<template>
  <div class="block-container">
    <section id="information">
      <div class="profil">
        <p>
          <strong>Bienvenue</strong> sur mon portfolio. 
            </p>
            <br>
            <p>
                  Je suis Alexandra une jeune développeuse en herbe. 
            </p>
      </div>
      <div class="profile-image">
          <img src="../assets/personal-img.png" class="perso-img" alt="profile-image">
      </div>
    </section>
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
  </div>
</template>

<script>
    export default {
        name: "MainLayout"
    }
</script>

<style scoped>
  #social-links {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: white;
    margin: 5px;
    }
  .perso-img {
    box-shadow: -20px 30px rgb(255 103 99);
  }
      
    /*Smartphone version*/
@media only screen and (max-width: 767px) {
    .block-container {
      margin: 40px 10px;
    }
    #information {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    p {
      font-size: 20px;
      margin: 5px;
    }
    .profile-image {
      margin: 40px 10px 10px 20px;
    }
    .perso-img {
      width: 10em;
    }
    #social-links {
      display: flex;
      justify-content: space-around;
      margin: 4em;
    }
    .img-link {
      width: 3em;
    }
}

/*Tablet version*/
@media only screen and (min-width: 768px) {
  .block-container {
      margin: 60px 10px;
    }
    #information {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 4em;
    }
    p {
      font-size: 30px;
      margin: 5px;
    }
    .profil {
      margin: 2em;
    }
    .profile-image {
      margin: 5em;
    }
    .perso-img {
      width: 15em;
    }
    #social-links {
      display: flex;
      justify-content: space-around;
      margin: 4em;
    }
    .img-link {
      width: 5em;
    }
}

/*Desktop version*/
@media only screen and (min-width: 1200px) {
    .block-container {
        margin: 60px 20px;
    }
    #information {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 2em;
    }
    #profile {
      justify-content: center;
      width: 40em;
      text-align: center;
      margin: 2em;
    }
    p {
      font-size: 30px;
      margin: 20px 40px;
    }
    .profile-image {
      margin: 130px 10px 10px 40px; 
    }
    .perso-img {
      width: 18em;    
    }
    #social-links {
      display: flex;
      justify-content: flex-start;
    }
    .img-link {
      width: 4em;
    }
    .link {
      display: flex;
      margin: 20px;
      flex-direction: column;
    }
}
</style>
