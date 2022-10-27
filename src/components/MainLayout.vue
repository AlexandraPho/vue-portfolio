<template>
  <div class="block-container">
    <section id="information">
      <div class="profil">
          <h1>Bienvenue !</h1>
          <p>  
            Je suis Alexandra une jeune développeuse en herbe. 
            Dans ce portfolio vous découvrirez qui je suis ainsi que mes projets.
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
            </div>
        </a>
        <a href="https://www.linkedin.com/in/alexandra-pinheiro/">
            <div class="link">
                <img src="../assets/linkedin.svg" class="img-link" alt="Linkdin">        
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
    background: rgb(148,117,132);
    background: radial-gradient(circle, rgba(148,117,132,1) 4%, rgba(204,195,200,1) 45%, rgba(255,255,255,1) 80%);
    align-items: center;
  }
  h1,
  p{
    color: rgb(39 48 31);
  }

  /*Smartphone version*/
  @media only screen and (max-width: 767px) {
    #information {
      display: flex;
      flex-direction: column;
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
      font-size: 2.5em;
      margin: 30px 0px;
      text-shadow: 1px 1px 2px rgb(223 219 220);
    }
    p {
      font-size: 1.2em;
      line-height: 1.5em;
    }
    .profile-image {
      display:flex;
      justify-content: center;
      margin-top: 30px;
    }
    .perso-img {
      width: 33%;
      filter: opacity(80%);
      border-radius: 20px;
    }
    #social-links{
      display: flex;
      margin: 20px;
      justify-content: space-evenly;
    }
    .img-link {
      width: 3em;
    }
  }

  /*Tablet version*/
  @media only screen and (min-width: 768px) {
    #information {
      display: flex;
      flex-direction: row;
      height: 70em;
    }
    .profil {
      width: 50%;
      flex-wrap: wrap;
      text-align: center;
      margin: 0px 30px;
    }
    h1 {
      font-size: 3.5em;
      margin: 60px 0px;
      text-shadow: 1px 1px 2px rgb(223 219 220)
    }
    p {
      font-size: 1.5em;
      line-height: 2em;
    }
    .profile-image {
      width: 50%;
    }
    .perso-img {
      width: 90%;
      filter: opacity(80%);
      border-radius: 20px;
    }
    #social-links{
      display: flex;
      margin: 50px;
      justify-content: space-evenly;
    }
    .img-link {
      width: 5em;
    }
  }

  /*Desktop version*/
  @media only screen and (min-width: 1200px) {
    #information {
      height: 50em;
    }
    .profil {
      width: 50%;
      display: flex;
      justify-content: center;
      margin: 0px 50px;
    }
    h1 {
      font-size: 4em;
      margin: 60px 0px;
      text-shadow: 1px 1px 2px rgb(223 219 220)
    }
    p {
      font-size: 2em;
      line-height: 2em;
    }
    .profile-image {
      width: 50%;
      display: flex;
      justify-content: center;
    }
    .perso-img {
      width: 50%;
      filter: opacity(80%);
      border-radius: 20px;
    }
    #social-links{
      display: flex;
      margin: 60px;
      justify-content: space-evenly;
    }
    .img-link {
      width: 5em;
    }
  }
</style>
