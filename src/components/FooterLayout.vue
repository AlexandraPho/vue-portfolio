<template>
  <footer>
     <div class="resume">
      <p>Télécharger mon CV 
        <a href="assets/Alexandra-Pinheiro-CV.pdf" target="_blank"> 
        <strong class="click">&nbsp;ici</strong>
        </a>
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
    .click {
        color: rgb(115, 16, 61);
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
        font-size: 1.5em;
      }
    }
    </style>
   