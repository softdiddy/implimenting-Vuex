<template>
  <div class="home">
    <Counter />
    <Buttons />
  </div>
</template>

<script>

export default {
  name: 'HomeView', 

  components:{
    "Counter": require("@/components/counter").default,
    "Buttons": require("@/components/buttons").default,
    
}
}
</script>

<style scoped>
  .home{
    display: flex;
    flex-direction: column;
    align-items: center;
  
  }
 
 
</style>

