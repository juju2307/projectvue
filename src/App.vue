<template>
    <div>
      <nav id="header">
         <router-link to="/" exact>HOME</router-link>
         <router-link to="/contact">CONTACT</router-link>
      </nav>
      <router-view/>
      <section>
      
      </section>
    </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {
   
  
  },
  data() {
    return {

    }
  }
  
};
</script>

<style scoped>
  #header{
    background-color: black;
    display: flex;
    justify-content: center;
    height: 80px;
   
    
    
  }
  #header a{
    text-decoration: none;
    color: white;
    padding: 30px;
    font-weight: bold;
    font-size: 20px;
  }

</style>
