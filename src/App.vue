<template>
  <div></div>
</template>

<script>
import EventService from "../services/event.service";
export default {
  name: 'App',

  data(){
    return {
      data : null
    }
  },
  mounted() {
   this.data = EventService.getAll()
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
