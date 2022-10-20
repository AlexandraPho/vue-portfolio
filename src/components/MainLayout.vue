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
  .block-container {
    background-color: rgb(243, 241, 241);
  }
 .profil {
  margin-top: 1em;
 }
    /*Smartphone version*/
@media only screen and (max-width: 767px) {
    .block-container {
      margin: 50px 0px 0px;
    }
    #information {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 20px;

    }
    p {
      font-size: 20px;
      margin: 5px;
    }
    .profile-image {
      margin: 20px 10px 50px 10px;
    }
    }
    .perso-img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

/*Tablet version*/
@media only screen and (min-width: 768px) {
  .block-container {
    margin: 90px 0px 0px;
    height: 40em;
    }
    #information {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 20px;
    }
    p {
      font-size: 30px;
      margin: 5px;
    }
    .profil {
      padding: 2em;
    }
    .profile-image {
      margin: 20px 10px 50px 10px;
    }
    .perso-img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
}

/*Desktop version*/
@media only screen and (min-width: 1200px) {
    .block-container {
      margin: 60px 0px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;
      align-items: center;
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
