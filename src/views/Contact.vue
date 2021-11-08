<template>
    <div class="container">
        <div class="containerform">
        <h1>Une question ?</h1>
        <form class="formulaire" action="">
            <label for="fname">Nom</label>
            <input class="texte" type="text" id="fname" name="firstname" placeholder="Votre nom..."/>

            <label for="lname">Prénom</label>
            <input class="texte" type="text" id="lname" name="lastname" placeholder="Votre prénom..."/>

            <label for="subject" id="subject">Message</label>
            <textarea name="subject" placeholder="Posez-nous votre question..." style="heignt:200px"></textarea>

            <input class="button" type="submit" value="submit"/>
        </form>
        </div>
    </div>

</template>

<script>
export default {
    name: "Contact",

    data() {

    },

    component: {},

    computed: {},
}
</script>

<style scoped>
.container{
    background-image: url("/assets/images/contactpizza.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
}
    .containerform {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 20px;
        margin-top: 100px;
        background-color: black;
        opacity: 0.7;
        width: 500px;
        height: 450px;
    }
    
    .formulaire{
        display: flex;
        flex-direction: column;
        width: 300px;
       
    }
    h1{
        color: white;
      
    }
    label{
        color:white;
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    input::placeholder{
        color: black;
        font-weight: 900;
    }
    .texte{
        margin-top: 0;
        border-radius: 10px;
        padding: 10px;
        background-color:white;
       
    }
    textarea{
        border-radius: 10px;
    }
    textarea::placeholder{
        color: black;
        font-weight: 900;
        background-color: white;
    }
    .button{
        display: flex;
        align-self: center;
        justify-content: center;
        margin-top: 20px;
        padding: 5px;
        cursor: pointer;
        color: white;
        background-color: red;
        border-radius: 10px;
        font-size: 20px;
        font-weight: bold;
        width: 100px;
    }
    .button:hover{
        background-color: rgb(158, 20, 20);
        
    }
   
</style>