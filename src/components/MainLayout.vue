<template>
  <div class="block-container">
    <section id="information">
      <div class="profil">
        <p>
          <strong>Bienvenue !</strong>
            <br>
          Je suis Alexandra une jeune développeuse en herbe. 
          Dans ce portfolio vous découvrirez qui je suis ainsi que mes projets.
        </p>
      </div>
      <div class="profile-image">
          <img src="../assets/personal-img.png" class="perso-img" alt="profile-image">
      </div>
    </section>
    
  </div>
</template>

<script>
    export default {
        name: "MainLayout"
    }
</script>

<style scoped>
  
  
  .perso-img {
    box-shadow: -20px 30px 0.6em rgb(115 16 61);
    border-radius: 15px;
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
      margin-right: 2em;
    }
    .profile-image {
      margin: 5em;
    }
    .perso-img {
      width: 15em;
    }
}

/*Desktop version*/
@media only screen and (min-width: 1200px) {
    .block-container {
      margin: 60px 20px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;
      align-items: baseline;
    }
    #information {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 2em;
      margin-right: 10em;
    }
    .profil {
      justify-content: center;
      width: 40em;
      text-align: left;
      margin: 1em;
    }
    p {
      font-size: 30px;
      margin: 20px 40px;
    }
    .perso-img {
      width: 18em;    
    }
}
</style>
