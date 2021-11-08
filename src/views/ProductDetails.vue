<template>
    <div class="container-product">
            <div class="product-image">
                <img v-bind:src="image"/>
            </div>
        <div class="container-description">
            <div class="product-description">
                <h1>{{title}}
                <img v-show="showBestSellerImage()" class="img-best-seller" src="/assets/images/bestseller.jpg"/>
                </h1>
                <p class="indispo" v-show="notAvailable">Momentanément indisponible</p>
                <p v-if="sale">
                    <span class="sale">{{price}}</span>
                    <span class="new-price">{{price -5}}</span>
                </p>
                <p v-else>
                    <span class="price">{{price}}</span>
                </p>
            </div>
        
   
                 <div class="ingredients">
                    <h3><strong>Ingrédients:</strong></h3>
                     <div>
                         <span class="ingredients-list" v-for="(ingredient, index) in ingredients" :key="index">{{ingredient + ","}}</span>
                     </div>
                     <br>
                 </div>
                 <div class="sauces">
                     <h3><strong>Sauces au choix</strong></h3>
                     <ul>
                         <li v-for="sauce in sauces" :key="sauce.id"
                          @mouseover="updateImage(sauce.image)"
                          v-bind:style="{backgroundColor : sauce.color}">{{sauce.type}}</li>
                     </ul>
                 </div>
                 <div class="valeurs">
                     <h3><strong>Valeurs nutritionnelles pour 100 grammes</strong></h3>
                     <ul>
                         <li class="value-list" v-for="(value, name, index) in energy" :key="index">{{name}} : {{value}}</li>
                     </ul>
                 </div>
        </div>
         <div class="cart">
      <table class="table-command">
          <thead>
              <tr>
                  <th class="title-command" colspan="2">Votre commande</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>{{title}}</td>
                  <td>{{nbrProduct}}</td>
              </tr>
              <tr>
                  <td>Code Promo</td>
                  <td class="code-promo">
                      <input v-model="promo" placeholder="Ajouter un code promo"/>
                  </td>
              </tr>
              <tr>
                  <td>Total à payer</td>
                  <td>
                      <transition name="bounce">
                          <div v-if="promo === 'royale'">
                              (-3€) 
                              <span class="sale">{{totalPrice}}</span>
                              {{totalPrice - 3}}
                          </div>
                          <div v-else>
                              {{totalPrice}} €
                          </div>
                      </transition>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
  <!-- Section Product-->
  <div class="product-section">
      
      <Product :bestseller="bestSellerProduct" @add-product="addCart($event)"></Product>
      
  </div>

    </div>   
        <button v-bind:class="{notActiveBtn : notAvailable}" @click="addProduct()" v-bind:disabled="notAvailable">Ajouter à ma commande</button>
    ,
   
</template>

<script>
export default {
    name: 'product-details',

    props: {
        bestseller:{
            type: Boolean,
        }
    },
    data() {
            return{
            product: "Pizza",
            type: "Oriental",
            price: 12,
            totalPrice: 0,
            nbrProduct: 0,
            promo:"",
            bestSellerProduct: false,
            image: "/assets/images/Pizza1.jpg",
            sale: true,
            notAvailable: false,
            ingredients: [
                "Olives",
                "Poulet Rôti",
                "Bacon",
                "Poivrons",
                "Champignons",
                "Mozzarella",
                "Oeuf",
            ],
            sauces: [
                {
                   id: 1001,
                   type: "Sauce Tomate",
                   color: "#db4006",
                   image: "/assets/images/pizza2.jpg",
                },
                {
                
                   id: 1002,
                   type: "Crème Fraiche",
                   color: "#e9cb8f",
                   image: "/assets/images/Pizza1.jpg",
                }
            ],
            energy: {
                Kcal: 242,
                Glucides: 27.99,
                Fibres: 1.75,
                Protéines: 9.62,
                Sel: 11.
            },
        }
    },
      mounted(){
        
    },
     methods: {
        addProduct() {
            if(this.sale) {
                this.$emit("add-product", this.price - 5)
            } else{
                this.$emit("add-product", this.price)
            }
          
        },
        updateImage(newLinkImage){
            this.image = newLinkImage;
        },
        showBestSellerImage() {
            if(this.bestseller == true) {
                return  true
                 
            } else {
                false;
            }
        },
        addCarts(price) {
           this.$emit("add-carts", this.nbrProduct += 1);
            this.$emit("add-carts", this.totalPrice = price * this.nbrProduct);
        }

    },
       computed: {
        title() {
            return this.product + "" + this.type;
        }
    }

}
</script>

<style scoped>
    body{
    margin: 0;
    padding: 0;  
}
.container-product{
    display: flex;
    flex-direction: row;
    width: 900px;
    margin-left: 390px;

}
img{
    width: 500px;
    height: 350px;
    margin-top: 200px;
    border-radius: 20px;
}
.img-best-seller{
    width: 50px;
    height: 50px;
}
.container-description{
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}
h1{
    font-size: 50px;
}
.sale{
    color: gray;
    text-decoration: line-through;
    font-size: 25px;
}
.new-price{
    margin-left: 5px;
    font-weight: bold;
    font-size: 20px;
    color: red;
    font-size: 35px;
}
.price{
    color: red;
    background-color: gainsboro;
    font-size: 20px;
}
.indispo{
    font-weight: bold;
    font-size: 20px;

}
.cart{
   
    height: 200px;
    margin-left: 150px;
    margin-top: 75px;

}
.table-command{
    border: 1px solid black;
}
thead, tbody{
    border: 1px solid black;
}
tbody{
  font-size:20px
}
tr{
    border: 1px solid black;
  
}
th{
    border: 1px solid black;
}
td{
    border: 1px solid black;
}

.title-command {
    background-color: red;
    font-size: 30px;
    color: white;
}

button{
    display: flex;
    justify-content: center;
    background-color: #d0021b;
    border-color: #d0021b;
    color: #fff;
    cursor: pointer;
    font-family: "Oswald", sans-serif !important;
    line-height: 20px;
    margin: 20px auto;
    max-width: initial;
    min-width: initial;
    padding: 12px;
    text-align: center;
    text-transform: uppercase !important;
    width: 350px;
    
   
}
button:hover{
    background-color: #b6132c;

}
.notActiveBtn {
    background-color: #f6f6f6;
    border-color: #f6f6f6;
    color: gray;
    cursor: not-allowed;
    text-decoration: line-through;

}
.notActiveBtn:hover{
    background-color: #f6f6f6;

}
h3{
    font-size: 25px;
}
.ingredients-list{
    font-size: 20px;
}

.sauces li{
    list-style: none;
    padding: 5px 15px;
    margin: 10px 0px;
    width: fit-content;
    border-radius: 20px;
    color: white;
    cursor: pointer;
}
.sauces li:hover{
    color: black;
}
.value-list{
    font-size: 20px;
}
/*Transition*/
.bounce-enter-active {
    animation: bounce-in 0.5s;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
    
</style>