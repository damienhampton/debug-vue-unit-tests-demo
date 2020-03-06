<template>
  <div>
    <h1>Hello, {{ cat }}</h1>
    <button id="but" @click="clickMe">Click me</button>
  </div>
</template>

<script>

export default {
  data(){
    return{
      cat: 'Daisy'
    }
  },
  methods: {
    clickMe(){
      this.cat = this.cat == 'Daisy' ? 'Buffy' : 'Daisy';
    }
  }
}
</script>