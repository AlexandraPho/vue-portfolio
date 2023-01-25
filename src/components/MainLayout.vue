<template>
  <div class="block-container">
    <section id="information">
      <div class="profil">
          <h1>Hello ! Je suis</h1>
            <section class="animation">
              <div class="first"><div>Alexandra Pinheiro</div></div>
              <div class="second"><div>Developeuse Web</div></div>
            </section>
          <!--<p>  
            Je suis <strong>Alexandra Pinheiro</strong>, développeuse web. 
            Dans ce portfolio vous découvrirez qui je suis ainsi que mes projets personnels.
          </p>-->
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
    background: #262727;
    align-items: center;
  }
  /*h1,
  p {
    text-shadow: 0 0 7px rgba(255,255,255,.3), 0 0 3px rgba(255,255,255,.3);
  }*/
  h1 {
    color: white;
    text-shadow: 0 0 2px rgb(243, 226, 234), 0 0 3px rgba(255,255,255,.3);
  }
  .profil-image {
    box-shadow: 0 0 7px rgb(115, 16, 61);
    position: inherit;
  }
  a {
    transition: transform .1s;
  }
  a:hover {
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .first div,
  .second div {
    text-shadow: 0 0 2px rgb(253, 242, 247), 0 0 7px rgba(245, 242, 242, 0.3);

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
    .animation {
      height:40px;
      overflow:hidden;
      margin-top: 10px;
    }
    .animation > div > div {
      height: 2.81rem;
      margin-bottom: 2.81rem;
      display: inline-block;
    }
    .animation div:first-child {
      animation: text-animation 8s infinite;
    }
    .first div,
    .second div {
      color: white;
      font-weight: bolder;
    }
    .first div {
      color:#af2865;
      padding: 0.7rem;
      font-size: 25px;
    }
    .second div {
      color:#CD921E;
      padding: 0.2rem;
      font-size: 21px;

    }
  @keyframes text-animation {
    0% {margin-top: 0;}
    10% {margin-top: 0;}
    20% {margin-top: -5.62rem;}
    30% {margin-top: -5.62rem;}
    40% {margin-top: -11.24rem;}
    60% {margin-top: -11.24rem;}
    70% {margin-top: -5.62rem;}
    80% {margin-top: -5.62rem;}
    90% {margin-top: 0;}
    100% {margin-top: 0;}
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
      margin-top: 30px; 
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
      justify-content: center;
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
      flex-direction: column;
      justify-content: center;
      height: 60em;
    }
    .profil {
      flex-wrap: wrap;
      text-align: center;
      margin: 0px 30px 0px 20px;
    }
    .animation {
      height:50px;
      overflow:hidden;
      margin-top: 10px;
    }
    .animation > div > div {
      height: 6rem;
      margin-bottom: 2.81rem;
      display: inline-block;
    }
    .animation div:first-child {
      animation: text-animation 8s infinite;
    }
    .first div,
    .second div {
      color: white;
      font-weight: bolder;
    }
    .first div {
      color:#af2865;
      /*padding: 0.7rem;*/
      font-size: 45px;
    }
    .second div {
      color:#CD921E;
      font-size: 40px;

    }
  @keyframes text-animation {
    0% {margin-top: 0;}
    10% {margin-top: 0;}
    20% {margin-top: -5.62rem;}
    30% {margin-top: -5.62rem;}
    40% {margin-top: -11.24rem;}
    60% {margin-top: -11.24rem;}
    70% {margin-top: -5.62rem;}
    80% {margin-top: -5.62rem;}
    90% {margin-top: 0;}
    100% {margin-top: 0;}
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
      width: 300px; 
      height: 300px; 
      overflow: hidden; 
      border-radius: 50%; 
      margin: 80px;
    }
    .perso-img {
      width: 100%; 
      height: 130%;
    }
    #social-links{
      display: flex;
      margin: 50px;
      justify-content: center;
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
          /* flex-direction: row; */
      height: 50em;
      display: flex;
      align-items: center;
    /* flex-wrap: nowrap; */
      justify-content: center;
    }
    .profil {
      /*width: 35%;*/
      display: flex;
      justify-content: center;
      margin: 30px 30px 20px 20px;
      /*flex-direction: column;*/
      align-items: center;
      font-size: 1rem;
      text-transform: uppercase;
    }
    .animation {
      height:50px;
      overflow:hidden;
      margin-top: 10px;
    }
    .animation > div > div {
      height: 6rem;
      margin-bottom: 2.81rem;
      display: inline-block;
    }
    .animation div:first-child {
      animation: text-animation 8s infinite;
    }
    .first div,
    .second div {
      color: white;
      font-weight: bolder;
    }
    .first div {
      color:#af2865;
      font-size: 45px;
      margin-left: 3rem;
    }
    .second div {
      color:#CD921E;
      font-size: 45px;
    }
  @keyframes text-animation {
    0% {margin-top: 0;}
    10% {margin-top: 0;}
    20% {margin-top: -5.62rem;}
    30% {margin-top: -5.62rem;}
    40% {margin-top: -11.24rem;}
    60% {margin-top: -11.24rem;}
    70% {margin-top: -5.62rem;}
    80% {margin-top: -5.62rem;}
    90% {margin-top: 0;}
    100% {margin-top: 0;}
  }
    h1 {
      font-size: 4em;
    }
    p {
      width: 20em;
      font-size: 1.4em;
      line-height: 2em;
    }
    .profil-image {
      display: flex;
      justify-content: center;
      width: 350px; 
      height: 350px; 
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
      justify-content: center;
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
