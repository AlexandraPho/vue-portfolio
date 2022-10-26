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
    
  </div>
</template>

<script>
    export default {
        name: "MainLayout"
    }
</script>

<style scoped>
  
 h1 {
  color: rgb(115, 16, 61);
 }
    /*Smartphone version*/
@media only screen and (max-width: 767px) {
    .block-container {
      margin: 40px 0px 0px;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-end;
    }
    #information {
      display: flex;
      text-align: start;
      padding-bottom: 35px;
      flex-direction: column;
    }
    h1 {
      font-size: 1.5em;
      top: 450px;
      position: absolute;
      z-index: 2;
      margin: 0px 20px;
      text-shadow: 1px 1px 2px rgb(223, 219, 220);
    }
    p {
      top: 480px;
      position: absolute;
      z-index: 2;
      font-size: 15px;
      margin: 0px 20px;
      width: 18em;
      text-shadow: 1.5px 1.5px 1px rgb(245, 242, 243);     
    }
    .perso-img {
      position: relative;
      z-index: 1;
      width: 100%;
      object-fit: cover;
      filter: opacity(50%);
    }
    
  }
/*Tablet version*/
@media only screen and (min-width: 768px) {
  .block-container {
    margin: 40px 0px;
    /*background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('../assets/personal-img.png');*/
    /*background-size: cover;*/
    height: 70em;
    display: flex;
    flex-wrap: wrap;
    padding: 0px 20px;
    align-content: flex-end;
  }
  #information {
    display: flex;
    padding-bottom: 35px;
    text-align: start;
    flex-direction: column;
  }
  h1 {
    font-size: 3em;
  }
  p {
    font-size: 1.5em;
    margin: 5px;
    width: 25em;
  }
  .perso-img {
    width: 100%;
    height: 900px;
    object-fit: cover;
    object-position: center;
    filter: opacity(50%);
    margin: 3em;
  }
}

/*Desktop version*/
@media only screen and (min-width: 1200px) {
  .block-container {
    margin: 40px 0px;
    height: 70em;
    display: flex;
    flex-wrap: wrap;
    padding: 0px 20px;
    align-content: flex-end;
  }
  #information {
    display: flex;
    /* padding-bottom: 60px; */
    /* text-align: start; */
    flex-direction: row;
    align-items: flex-end;
  }
  h1 {
    font-size: 3em;
  }
  p {
    font-size: 1.5em;
    margin: 5px;
    width: 40em;
  }
  .perso-img {
    width: 100%;
    height: 900px;
    object-fit: cover;
    object-position: center;
    filter: opacity(50%);
    margin: 3em;
  }
}
</style>
