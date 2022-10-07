<template>
    <div class="block-container">
        <div class="container-one">
            <div id="profile">
                <h2>Alexandra Pinheiro</h2>
                <p>Développeuse Web Vue.js</p>
                <div class="profile-image">
                    <img src="../assets/personal-img.png" class="perso-img" alt="profile-image">
                </div>
            </div>
            <div id="social-links">
                <a href="">
                    <div class="link">
                        <img src="../assets/github.svg" class="img-link" alt="Github">
                        <h3>Github</h3>
                    </div>
                </a>
                <a href="">
                    <div class="link">
                        <img src="../assets/linkedin.svg" class="img-link" alt="LinkdIn">
                        <h3>LinkdIn</h3>
                    </div>
                </a>
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
    h2, p {
    font-family: Impact, Charcoal, Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans serif;
    }
    h2 {
        text-transform: uppercase;
    }
    
@media only screen and (max-width: 767px) {
    #profile {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        margin: 20px; 
    }
    h2 {
        font-size: 20px;
        margin: 10px;
    }
    p {
        margin: 10px;
    }
    .profile-image {
        align-self: center;
        margin: 60px 40px;
    }
    .perso-img {
        width: 11em;
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
        font-size: normal;
    }
    .link {
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .img-link {
        background-color:rgb(255 103 99);
        width: 3rem;
        border-radius: 70px;
    }
}

@media only screen and (min-width: 768px) {
    #profile {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        margin: 20px; 
    } 
    h2 {
        font-size: 40px;
        margin: 20px;
    }
    p {
        font-size: x-large;
        margin: 20px;

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
