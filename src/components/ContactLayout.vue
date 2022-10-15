<template>
    <div class="block-pages">
      <h2 class="titles-components">
          Contactez-moi
      </h2>
      <div class="container-one">
        <section class="contact-me">
          <form ref="form" @submit.prevent="sendEmail">
            <label>Votre nom</label>
            <input type="text" name="user_name">
            <label>Votre adresse email</label>
            <input type="email" name="user_email">
            <label>Message</label>
            <textarea name="message"></textarea>
            <input type="submit" value="Envoyer">
          </form>
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
        </section> 
      </div>
    </div>
  </template>
  
  <script>
  import emailjs from '@emailjs/browser';

    export default {
      methods: {
        sendEmail() {
          emailjs.sendForm('service_uc4n8gj', 'contact_form', this.$refs.form, 'AL5joTrsCRAQRUluQ')
            .then((result) => {
                console.log('SUCCESS!', result.text);
            }, (error) => {
                console.log('FAILED...', error.text);
            });
        }
      }
    }
  </script>
  
  <style scoped>

    .container-one {
      background-color: white;
      color: black;
    }
    .contact-me {
     
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 25px;
    }
    .mail {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #social-links {
      display: flex;
      justify-content: center;
    }
    p {
      Font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: normal;
    }
    a {
        color: black;
        text-decoration: none;
        Font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: normal;
    }
    .link {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: 20px;
    }
    .img-link,
    .logo-mail {
        width: 5rem;
        border-radius: 70px;
    }

    
  </style>