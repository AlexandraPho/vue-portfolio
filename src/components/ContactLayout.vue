<template>
    <div class="block-container">
      <h2 class="titles-components">
          Contactez-moi
      </h2>
        <section class="contact-me">
          <form ref="form" @submit.prevent="sendEmail">
            <div class="field">
              <label>Votre nom</label>
              <input class="input-field" type="text" name="user_name">
            </div>
            <div class="field">
              <label>Votre adresse email</label>
              <input class="input-field" type="email" name="user_email">
            </div>
            <div class="field">
              <label>Message</label>
              <textarea class="input-message" name="message"></textarea>
            </div>
            <button class="button" type="submit" value="Envoyer">Envoyer</button>
          </form>
        </section> 
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
      background-color: rgb(4, 7, 55);
      color: white;
    }
    /*Smartphone Version*/
    @media only screen and (max-width: 767px) {
      .block-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px 20px;
      }
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
      }
      label {
        font-size: large;
        margin-bottom: 0.5em;
      }
      .field {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.5em;
      }
      .input-field {
        border-radius: 0.5em;
        height: 1.5em;
      }
      .input-message {
        border-radius: 0.5em;
        height: 4.5em;
      }
      .button {
        margin: 2em;
        padding: 1em;
        background-color: rgb(4, 7, 55);
        color: rgb(255, 103, 99);
        border-radius: 0.5em;
        border: 1px solid rgb(255, 103, 99);
      }
    }
    /*Tablet version*/
    @media only screen and (min-width: 768px) {
      .block-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 8em 2em;
      }
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
      }
      label {
        font-size: x-large;
        margin-bottom: 0.5em;
      }
      .field {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.5em;
      }
      .input-field {
        border-radius: 0.5em;
        height: 2em;
        width: 30em;
      }
      .input-message {
        border-radius: 0.5em;
        height: 6.5em;
        width: 30em;
      }
      .button {
        margin: 2em;
        padding: 1em;
        background-color: rgb(4, 7, 55);
        color: rgb(255, 103, 99);
        border-radius: 0.5em;
        border: 1px solid rgb(255, 103, 99);
        width: 10em;
        font-size: large;
      }
      .button:hover {
        background-color:rgb(255, 103, 99);
        color: rgb(4, 7, 55);
        cursor: pointer;
      }
    }

    /*Desktop version*/
    @media only screen and (min-width: 1200px) {
      .block-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 7em 2em;
      }
      .titles-components {
        font-size: xxx-large;
      }
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
      }
      label {
        font-size: x-large;
      }
      .field {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.5em;
      }
      .input-field {
        border-radius: 0.5em;
        height: 2.5em;
      }
      .input-message {
        border-radius: 0.5em;
        height: 6.5em;
      }
      .button {
        margin: 2em;
        padding: 1em;
        background-color: rgb(4, 7, 55);
        color: rgb(255, 103, 99);
        border-radius: 0.5em;
        border: 1px solid rgb(255, 103, 99);
      }
    }
    
  </style>