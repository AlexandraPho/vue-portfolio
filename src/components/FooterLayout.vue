<template>
    <footer>
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
    .resume-document {
        color: rgb(115, 16, 61);
    }

    /*Smartphone version*/ 
    @media only screen and (max-width: 767px) {
      footer {
        background-color: white;
        margin-bottom: 20px;
      }
    }

    /*Tablet version*/
    @media only screen and (min-width: 768px) {
      footer {
        background-color: white;
        margin-bottom: 20px;
      }
      p {
        font-size: large;
      }
    }

    /*Desktop version*/
    @media only screen and (min-width: 1200px) {
      footer {
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      }
    }
    </style>
   