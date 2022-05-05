<template>
  <div class="grid grid-cols-2">
      <div class="container mx-auto ">
        <div class="p-8">
          <a class="sticky top-4 mb-4 flex items-center justify-center px-8 py-4 font-bold transition bg-pink-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-pink-50" href="#">
            Créer un événement
            <span aria-hidden="true" class="ml-1.5 border-2 border-black rounded-full" role="img">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </span>
          </a>
        </div>
        <div class="overflow-y-auto h-screen px-8" v-if="this.events">
          <SingleCard v-for="event in this.events.items" :key="event.id" :data="event"></SingleCard>
        </div>
      </div>
    <div class="bg-gray-50">
      <div class="sticky top-0 p-8 lg:col-span-3">
        <h2 class="text-3xl font-bold sm:text-4xl mb-4">Créer votre événement</h2>
        <form class="space-y-4">
          <div>
            <label class="sr-only" for="name">Nom de l'événement</label>
            <input class="w-full p-3 text-sm border border-gray-200 shadow-sm rounded-lg" placeholder="Nom de l'événement" type="text" id="name" />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="date-start">Date de début</label>
              <input
                  class="shadow-sm w-full p-3 text-sm border border-gray-200 rounded-lg"
                  placeholder="Date de début"
                  type="date"
                  id="date-start"
              />
            </div>

            <div>
              <label class="sr-only" for="date-end">Date de fin</label>
              <input
                  class="shadow-sm w-full p-3 text-sm border border-gray-200 rounded-lg"
                  placeholder="Phone Number"
                  type="date"
                  id="date-end"
              />
            </div>
          </div>
          <div id="form" class="shadow-sm rounded-lg">
            <QuillEditor theme="snow"/>
          </div>

          <div class="mt-4 text-right">
            <a class="inline-flex items-center justify-center w-full px-5 py-3 font-bold transition bg-pink-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-pink-50 sm:w-auto" href="#">
              Créer
              <span aria-hidden="true" class="ml-1.5" role="img">
                <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5 ml-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                          >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              </span>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import EventService from "../services/event.service"
import SingleCard from "@/components/Card"
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
  name: 'App',
  components:{
    SingleCard,
    QuillEditor
  },
  data(){
    return {
      events : null
    }
  },
  async mounted() {
    this.events = await EventService.getAll()
  }
}
</script>

<style>

</style>
