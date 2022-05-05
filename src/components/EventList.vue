<template>
  <div class="overflow-y-auto h-screen px-8" v-if="events">
    <SingleCard v-for="event in events" :key="event.id" :data="event"></SingleCard>
  </div>
</template>
<script>
import SingleCard from "@/components/Card";
//TODO: check calc
export default {
  name: "EventList",
  components:{
    SingleCard
  },
  computed : {
    events : function (){
      return this.$store.getters.getEvents
    }
  }
}
</script>

<style scoped>

</style>