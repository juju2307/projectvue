<template>

     <article>
         <div class="product-img">
           <img v-bind:src="image"/>
         </div>
         <div class="product-description">
               <h3>{{title}}</h3>
               <p>Prix : {{price}} €</p>
               <p v-for="(ingredient, index) in ingredients" :key="index">{{ingredient + ","}}</p>
               <a href="#">Commander >></a>
         </div>
     </article>

</template>

<script>
export default {
    name: "Products",
   
  
    data() {
      return{
          price: 12,
          title: "Pizza Royale",
          image: "../assets/images/Pizza2.jpg",
          ingredients: [
            "Olives",
            "Champignons",
            "Hanchois",
          ]
      }
    },

    methods: {},


    computed: {},
}
</script>

<style scoped>

article{
  display: flex;
  flex-direction: row;
  border: 2px solid black;
  margin: 20px;
}
 
  .product-img img{
    width: 350px;
    height: 100%;
  }
  .product-description{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 200px;
    height: auto;
  }
  .product-description a{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: red;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    width: 150px;
    height: 30px;
  }
  h3 {
    color: red;
    font-size: 30px;
    font-weight: bold;
  }
  p{
    display: flex;
    margin-top: -10px;
  }
</style>