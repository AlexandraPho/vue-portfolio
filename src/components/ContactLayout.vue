<template>
    <div class="block-container">
      <h2 class="titles-components">
        Contact
      </h2>
      <div class="container">
        <p class="contact-me">Vous souhaitez travailler avec moi, n'hésitez pas à me contacter</p>
        <p class="email"><img class="contact-logo" src="../assets/mail.svg" alt="email-logo" HSPACE="10"> alexandrapinheiro.dev@gmail.com</p>
        <p class="phone"><img class="contact-logo" src="../assets/phone.svg" alt="email-logo" HSPACE="10">07 61 43 95 98</p>
      </div>
      <a href="#information"><div class="arrow"></div></a>
    </div>
  </template>
  
  <script>

    export default {
      name: "ContactLayout"
    }
  </script>
  
  <style scoped>

    .container {
      background: #262727;
      height: 20em;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      justify-content: center;
    }
    .contact-me {
      font-weight: normal;
      text-align: center;
     }
    p,
    .contact-me{
      color: white;
      display: flex;
      align-items: center;
      text-align: center;
    }

div.arrow {
	width: 6vmin;
  height: 6vmin;
	box-sizing: border-box;
	position: fixed;
	left: 90%;
	top: 50%;
	transform: rotate(-45deg);
}
	
    /*Smartphone Version*/
    @media only screen and (max-width: 767px) {
      .block-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px 0px;
      }
      .titles-components {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 80px 10px 30px;
      }
      p {
        font-weight: bold;
        font-size: 1em;
      }
      .contact-logo {
        width: 2em;
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
      .titles-components {
      margin: 80px 10px;
      font-size: 2.5em;
      }
      .container {
        height: 30em;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
      }
      p {
        font-size: 1.5em;
        font-weight: bold;
      }
      .contact-logo {
        width: 1.5em;
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
        margin: 70px 10px;
        font-size: 3em;
      }
      p {
        font-size: 1.3em;;
      }
      .contact-logo {
        width: 2em;
      }
      div.arrow::before {
		content: '';
		width: 100%;
		height: 100%;
		border-width: .8vmin .8vmin 0 0;
		border-style: solid;
		border-color: black;
		transition: .2s ease;
		display: block;
		transform-origin: 100% 0;
	}
	div.arrow:after {
		content: '';
		float: left;
		position: relative;
		top: -100%;
		width: 100%;
		height: 100%;
		border-width: 0 .8vmin 0 0;
		border-style: solid;
		border-color: black;
		transform-origin: 100% 0;
		transition:.2s ease;
	}
	div.arrow:hover::after {
		transform: rotate(45deg);
		border-color: orange;
		height: 120%;
	}
	div.arrow:hover::before {
		border-color: orange;
		transform: scale(.8);
	}
    }
    
  </style>