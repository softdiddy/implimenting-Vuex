<template>
     <div class="counter">
      <div class="number">
        <h1>{{$store.state.counter}}</h1>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
     .counter{
    width: 300px;
    display: flex;
    justify-content: center;
    justify-items: center;
  }
  .number{
    width: 100%;
    height: 100px;
    background-color: #ccc;

  }
</style>