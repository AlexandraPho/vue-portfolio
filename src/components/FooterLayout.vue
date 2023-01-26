<template>
  <footer>
    <div class="resume">
      <p>Télécharger mon CV 
        <a href="../assets/resume_AP.pdf" target="_blank"> 
        <strong class="click">&nbsp;ici</strong>
        </a>
      </p>
    </div>
    <div class="copyright">
      <p>
        <img class="copyright-logo" src="../assets/copyright.svg" HSPACE="5">2022 - Alexandra Pinheiro - Tous droits réservés
      </p>
    </div>
  </footer>
</template>
    
<script>

  export default {
    name: "FooterLayout"
}

</script>

 <style scoped>

    footer {
      background-color: white;
    }
    p {
      display: flex;
      justify-content: center;
      color: black;
    }
    #social-links {
      text-align: center;
    }
    a {
      text-decoration: none;
      color: black;
    }
    a {
      color: rgb(115, 16, 61);
      transition: transform .1s;
    }
    a:visited {
      color: #246647;
    }
    a:hover {
      color: #CD921E;
      -ms-transform: scale(2);
      -webkit-transform: scale(2);
      transform: scale(2);
    }
    a:active {
      color: #246647;
    }
    .copyright-logo {
      width: 1em;
    }

    /*Smartphone version*/ 
    @media only screen and (max-width: 767px) {
      footer {
        margin-bottom: 20px;
      }
    }

    /*Tablet version*/
    @media only screen and (min-width: 768px) {
      footer {
        margin-bottom: 20px;
      }
      p {
        font-size: large;
      }
    }

    /*Desktop version*/
    @media only screen and (min-width: 1200px) {
      footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      }
      p {
        font-size: 1em;
      }
    }
    </style>
   