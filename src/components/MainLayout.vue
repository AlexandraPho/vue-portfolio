<template>
    <div class="block-container">
        <div class="container-one">
            <div id="profile">
                <h1>Développeuse</h1>
                <p>Vue.js - Wordpress</p>
                <div class="profile-image">
                    <img src="../assets/personal-img.png" class="perso-img" alt="profile-image">
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "MainLayout"
    }
</script>

<style scoped>
    .block-container {
        margin: 10px;
    }
    p {
        font-family: Impact, Charcoal, Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans serif;
    }
    h1 {
        text-transform: uppercase;
    }
    
    /*Smartphone version*/
@media only screen and (max-width: 767px) {
    .block-container {
        margin: 60px 20px;
    }
    #profile {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        font-size: 30px;
        margin: 5px;
    }
    p {
        font-size: 20px;
        margin: 5px;
    }
    .profile-image {
        align-self: center;
        margin: 60px 10px 10px 30px;
    }
    .perso-img {
        width: 13em;
        box-shadow: -20px 30px rgb(255 103 99);
    }
}

/*Tablet version*/
@media only screen and (min-width: 768px) {
    .block-container {
        margin: 60px 20px;
    }
    #profile {
        align-items: center;
        display: flex;
        flex-direction: column;
    } 
    h1 {
        font-size: 50px;
        margin: 60px 0px 10px;
    }
    p {
        font-size: 20px;
        margin: 5px;
    }
    .profile-image {
        margin: 130px 10px 10px 40px; 
        align-self: center;
    }
    .perso-img {
        width: 22em;
        box-shadow: -20px 30px rgb(255 103 99);
    }
}

/*Desktop version*/
@media only screen and (min-width: 1024px) {
    .block-container {
        margin: 60px 20px;
    }
    h2 {
        font-size: 50px;
        margin: 20px 40px;
    }
    p {
        font-size: 30px;
        margin: 20px 40px;

    }
    .profile-image {
        align-self: center;
        margin: 130px 10px 10px 40px; 
    }
    .perso-img {
        width: 30em;
        box-shadow: -20px 30px rgb(255 103 99);
    }
}
</style>
