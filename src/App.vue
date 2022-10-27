<template>
  <router-view/>
</template>

<script>

export default {
  name: 'App'
  }

</script>

<style>

  p {
    font-family: Impact, Charcoal, Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans serif;
  }
  body{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background-color: white;
    margin: 0;
    overflow-x: hidden;
  }
  .container {
    background: rgb(148,117,132);
    background: radial-gradient(circle, rgba(148,117,132,1) 4%, rgba(204,195,200,1) 45%, rgba(255,255,255,1) 80%);
  }
  .titles-components {
    text-transform: uppercase;
    color: rgb(115, 16, 61);
  }

</style>
