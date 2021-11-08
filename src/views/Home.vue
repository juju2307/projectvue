<template>
    <div>
         <div id="intro"></div>
            <p class="bienvenue">Bienvenue !</p>
            <div class="action">
                <p>PROMOTION SUR LA 4 FROMAGES</p>
                <p>NOUVEAUTE - PIZZA ROYALE</p>
                <p>JEU CONCOURS</p>
            </div>
         <slot name="Welcome"></slot>
         <slot></slot>
         <div class="product-menu">
             <Products/>
            
         </div>
    </div>
    </template>

<script>
export default {
    name: "Home",

    data() {
        return {

        }
    },

    methods: {},


    computed: {},
}
</script>

<style scoped>
    body{
        margin: 0px;
        padding: 0px;
    }
    #intro{
        background-image: url("/assets/images/pizza-menu.jpg");
        background-position:top;
        background-size: cover;
        height: 100%;
        color: white;
        font-size: 2em;
        font-weight: bold;
        height: 90vh;
        padding: 3%;
        text-shadow: black 0.1em 0.1em 0.2em;
      
       
     
    }
    .product-menu{
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
      .bienvenue{
    display: flex;
    justify-content: center;
    color: white;
    margin-top: -350px;
    margin-bottom: 300px;
    margin-left: 650px;
    font-size: 50px;
  }
  .action{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 650px;
    color: white;
    font-size: 30px;
    margin-top: -250px;
    line-height: 0.2em;
    padding: 0;
   
  }
</style>