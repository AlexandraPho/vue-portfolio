<template>
  <router-view/>
</template>

<script>

  export default {
    name: 'App'
    }

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Belleza&family=Kaushan+Script&display=swap');
  p {
    font-family: 'Belleza', sans-serif;
  }
  body{
    font-family: 'Kaushan Script', cursive;
    background-color: white;
    margin: 0;
    overflow-x: hidden;
  }
  .container {
    background: #246647;
    width: 100%;
  }
  .titles-components {
    text-transform: uppercase;
    color: rgb(115, 16, 61);
    text-shadow: 3px 3px 4px #B65C7B;
  }

</style>
