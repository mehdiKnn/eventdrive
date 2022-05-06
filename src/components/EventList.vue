<template>
  <div class="overflow-y-auto px-8 events pb-8" v-if="events">
    <SingleCard v-for="event in events" :key="event.id" :data="event"></SingleCard>
  </div>
</template>
<script>
import SingleCard from "@/components/Card"

export default {
  name: "EventList",
  components: {
    SingleCard
  },
  computed: {
    events: function () {
      return this.$store.getters.getEvents
    }
  },
}
</script>

<style scoped>
.events {
  height: calc(100vh - (2rem + 80px));
}
</style>