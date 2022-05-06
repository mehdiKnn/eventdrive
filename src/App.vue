<template>
  <div class="grid grid-cols-2">
    <div class="container mx-auto">
      <div class="p-8">
        <a @click="unsetData"
           class="cursor-pointer sticky top-4 mb-4 flex items-center justify-center px-8 py-4 font-bold transition bg-pink-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-pink-50">
          Créer un événement
          <span aria-hidden="true" class="ml-1.5 border-2 border-black rounded-full" role="img">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
          </span>
        </a>
      </div>
      <EventList/>
    </div>
    <FormEvent/>
  </div>
</template>

<script>
import EventList from "@/components/EventList"
import FormEvent from "@/components/Form"

export default {
  name: 'App',
  components: {
    EventList,
    FormEvent
  },
  created() {
    if (localStorage.getItem('events') !== null) {
      this.events = JSON.parse(localStorage.getItem('events'))
      this.$store.commit('setEvents', this.events)
    } else {
      this.$store.dispatch("getEvents")
    }
  },
  methods: {
    unsetData() {
      this.$store.commit('unsetFormData')
    }
  }
}
</script>

<style>

</style>
