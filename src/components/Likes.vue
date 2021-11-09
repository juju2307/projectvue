<template>
  <div id="section-likes">
      <div class="div1">
            <div class="number-likes">{{nbrLikes}}</div>
            <img class="image_likes" src="assets/images/coeur1.png"/>
      </div>
      <div class="div2">
            <div class="button-likes" @click="addLikes()">Like</div>
            <div class="info-likes">{{info}}</div>
      </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
    name: "Likes",

  setup() {
      const nbrLikes = ref(0);
      const message1 = ref("Personnes aiment cette page");
      const message2 = ref("Personne aime cette page");

      function addLikes() {
         nbrLikes.value++;
      }
      const info = computed( () => {
          if(nbrLikes.value > 1) {
            return nbrLikes.value + " " + message1.value;
          } else {
            return nbrLikes.value + " " + message2.value;
          }
      })
      return{nbrLikes, addLikes, message1, message2,  info};
  }

};
</script>

<style scoped>
.div1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    width: 100px;
    height: 100px;
    margin-right: 2000px;
    margin-top: -150px;
  
  
}
.number-likes{
    display: flex;
    position: absolute;
    margin-top: 50px;
    color: black;
}
.button-likes{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 8px;
    border: 2px solid red;
    width: 80px;
    height: 50px;
    color: red;
    background-color: white;
    border-radius: 10px;
}
.button-likes:hover{
   
    color: white;
    border: 2px solid white;
    background-color: red;
    border-radius: 10px;

}
.div2{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.info-likes{
    display: flex;
    margin-left: 10px;
    margin-top: 5px;
    
}

</style>