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
    .block-container {
      background-color: rgb(231, 231, 231);
    }
    .input-field,
    .input-message {
      border-radius: 0.5em;
      border-top: none; 
      border-right: none; 
      border-left: none;
    }
      .button {
        background-color: rgb(115, 16, 61);
        color: white;
        border-radius: 0.5em;
        border: 1px solid rgb(115, 16, 61);
      }
      .button:hover {
        background-color:rgb(51, 77, 11);
        color: white;
        cursor: pointer;
      }


    /*Smartphone Version*/
    @media only screen and (max-width: 767px) {
      .block-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px 0px;
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
        height: 1.5em;
      }
      .input-message {
        border-radius: 0.5em;
        height: 4.5em;
      }
      .button {
        margin: 2em;
        padding: 1em;
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
        width: 10em;
        font-size: large;
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
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
      }
      label {
        font-size: large;
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
        background-color: rgb(115, 16, 61);
        color: white;
        border-radius: 0.5em;
        border: 1px solid rgb(115, 16, 61);
      }
    }
    
  </style>