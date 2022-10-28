<template>
  <div class="block-container">
    <section class="container">
      <div class="info">
          <h1>OOoupss...</h1>
          <h2>404 error</h2>
          <p>  
            La page que vous cherchez n'existe pas ou pas encore!
          </p>
      </div>
      <router-link :to="{name: 'HomeApp'}"><button class="return">Aller à l'accueil</button></router-link> 
    </section>
  </div>
</template>

<script>

  export default {
      name: "NotFoundLayout"
  }

</script>

<style scoped>

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1{
    color: rgb(115, 16, 61);
  }
  h2 {
    color: #B65C7B;
    text-shadow: 4px 5px 1px rgb(115, 16, 61);
  }
  h1 {
    text-shadow: 4px 5px 1px #B65C7B;
  }
  p {
    color: white;
  }
  .return {
    border-radius: 5px;
    background-color: #B65C7B;
    color: white;
    box-shadow: 3px 3px 5px rgb(115, 16, 61);
    border: none;
    padding: 10px;
    font-family: 'Belleza', sans-serif;
  }

  /*Smartphone version*/
  @media only screen and (max-width: 767px) {
    .container {
      margin-top: 10px;
      height:40em;
    }
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 4em;
      margin: 20px;
    }
    p {
      font-size: 1em;
      text-align: center;
    }
    .return {
      font-size: 1em;
      margin-top: 30px;
    }
  }

  /*Tablet version*/
  @media only screen and (min-width: 768px) {
    .container {
      margin-top: 10px;
      height:65em;
    }
   
    h1 {
      font-size: 3em;
    }
    h2 {
      font-size: 8em;
      margin: 20px;
    }
    p {
      font-size: 1.7em;
    }
    .return {
      font-size: 1.2em;
      margin-top: 30px;
    }
  }

  /*Desktop version*/
  @media only screen and (min-width: 1200px) {
    .container {
      margin-top: 10px;
      height: 50em;
    }
    h1 {
      font-size: 4em;
    }
    h2 {
      font-size: 10em;
      margin: 20px;
    }
    p {
      font-size: 1.7em;
    }
    .return {
      font-size: 1.5em;

    }
  }
</style>