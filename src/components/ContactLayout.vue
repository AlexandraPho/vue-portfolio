<template>
    <div class="block-container">
      <h2 class="titles-components">
          Contactez-moi
      </h2>
      <div class="container">
        <p class="email">alexandrapinheiro.dev@gmail.com</p>
    </div>
    </div>
  </template>
  
  <script>

    export default {
      name: "ContactLayout"
    }
  </script>
  
  <style scoped>

    .container {
      height: 30em;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: center;
    }
    p {
      color: rgb(39 48 31);
    }

    /*Smartphone Version*/
    @media only screen and (max-width: 767px) {
      .block-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px 0px;
      }
      .titles-components {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 80px 10px 30px;
      }
     
      p {
        font-weight: bold;
        font-size: small;
      }
    }
    /*Tablet version*/
    @media only screen and (min-width: 768px) {
      .block-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px 0px;
      }
      .titles-components {
      margin: 80px 10px;
      font-size: 2.5em;
      }
      .container {
        height: 30em;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
      }
      p {
        font-size: 1.2em;
        font-weight: bold;
      }
    }

    /*Desktop version*/
    @media only screen and (min-width: 1200px) {
      .block-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 0px;
      }
      .titles-components {
        font-size: xx-large;
      }
    }
    
  </style>