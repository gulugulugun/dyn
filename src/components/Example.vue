<template>
    <div @click="divClick">1234</div>
</template>

<script>
  export default {
    name: "Example",
    methods:{
      divClick(){
        console.log("div click")
      }
    }
  }
</script>

<style scoped>
    div{
        background-color: red;
    }
</style>