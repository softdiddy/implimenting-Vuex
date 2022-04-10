<template>
  
     <div class="buttons">
          <button @click="$store.dispatch('commitSub')" class="btn">-</button>
           <button @click="$store.dispatch('commitAdd')" class="btn">+</button>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped>
     .btn{
    font-size: 20px;
    padding: 15px 20px;
    margin: 20px;

  }
</style>