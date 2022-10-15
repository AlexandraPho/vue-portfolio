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
    
@media only screen and (max-width: 767px) {
    #profile {
        display: flex;
        flex-direction: column;
        margin: 20px;
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
        margin: 60px 40px;
    }
    .perso-img {
        width: 11em;
        box-shadow: -40px 50px rgb(255 103 99);
    }
}

@media only screen and (min-width: 768px) {
    #profile {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: 20px; 
    } 
    h1 {
        font-size: 50px;
        margin: 60px 0px 10px;
    }
    p {
        font-size: x-large;
        margin: 0px;
    }
    .profile-image {
        align-self: center;
        margin: 60px 40px;
    }
    .perso-img {
        width: 20em;
        box-shadow: -40px 50px rgb(255 103 99);
    }
    
    #social-links {
        color: white;
        justify-content: space-evenly;
        display: flex;
        margin: 60px 5px; 
    }
    a {
        color: white;
        text-decoration: none;
        Font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: large;
    }
    .link {
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .img-link {
        background-color:rgb(255 103 99);
        width: 5rem;
        border-radius: 70px;
    }
}

@media only screen and (min-width: 1200px) {
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
        margin: 60px;
    }
    .perso-img {
        width: 30em;
        box-shadow: -60px 70px rgb(255 103 99);
    }

    #social-links {
        color: white;
        justify-content: space-evenly;
        display: flex;
        margin: 100px 5px; 
    }
    a {
        color: white;
        text-decoration: none;
        Font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: large;
    }
    .link {
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .img-link {
        background-color:rgb(255 103 99);
        width: 7rem;
        border-radius: 70px;
    }
}
</style>
