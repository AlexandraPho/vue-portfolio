<template>
    <div class="block-container">
        <div class="container-one">
            <div class="profile">
                <h2>Alexandra Pinheiro</h2>
                <p>Développeuse Web Vue.js</p>
                <div class="profile-image">
                    <img src="../assets/personal-img.png" alt="profile-image">
                </div>
                <div class="square">

                </div>
            </div>
            <!--<div class="social-links">
                <a href="">
                    <div class="link">
                        <img src="../assets/github.svg" alt="Github">
                        <h3>Github</h3>
                        
                    </div>
                    <div class="link">
                        <img src="../assets/linked.svg" alt="LinkdIn">
                        <h3>LinkdIn</h3>
                    </div>
                </a>
            </div>-->
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "MainLayout"
    }
</script>

<style>
    .square {
        background-color: rgb(255, 103, 99);
    }

@media screen and (max-width: 768px) {
    .container-one {
        height: 100%;
        display: block;
        justify-content: center;
    }
    .profile {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        margin: 10px; 
    }
    h2 {
        font-size: xx-large;
        font-weight: 900;
        margin: 5px;
    }
    p {
        margin: 5px;
    }
    .profile-image {
        align-self: flex-end;
    }
    img {
        width: 11em;
        align-self: flex-end;
        margin: 60px 70px;
        position: absolute;
        top: 30em;
        right: 10px;
    }
    .square {
        display: flex;
        height: 250px;
        width: 170px;
        position: static;
        margin: 60px 50px;
    }
}
@media screen and (min-width: 768px) {
    .profile {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        margin: 20px; 
    }
    h2 {
        font-size: xxx-large;
        margin: 10px;
    }
    p {
        font-size: x-large;
        margin: 10px;

    }
    .profile-image {
        align-self: flex-end;
    }
    img {
        top: 40em;
        width: 15em;
        margin: 60px 200px;
    }   
    .square {
        height: 350px;
        width: 270px;
        margin: 150px 200px 20px;
    }
}

    .img {
        width: 30rem;
    }
    
</style>
