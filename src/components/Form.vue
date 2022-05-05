<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="sticky top-0 p-8 lg:col-span-3">
    <h2 class="text-3xl font-bold sm:text-4xl mb-4">Créer votre événement</h2>
    <form class="space-y-4">
      <div>
        <label class="sr-only" for="name">Nom de l'événement</label>
        <input v-model="formData.name.fr" class="w-full p-3 text-sm border border-gray-200 shadow-sm rounded-lg" placeholder="Nom de l'événement" type="text" id="name" />
        <div v-if="errors['name.fr']">
          <span class="text-red-500" :key="index" v-for="(error, index) in errors['name.fr']">{{ error }}</span>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label class="sr-only" for="date-start">Date de début</label>
          <input v-model="formData.start_date"
              class="shadow-sm w-full p-3 text-sm border border-gray-200 rounded-lg"
              placeholder="Date de début"
              type="date"
              id="date-start"
          />
          <div v-if="errors['start_date']">
            <span class="text-red-500" :key="index" v-for="(error, index) in errors['start_date']">{{ error }}</span>
          </div>
        </div>

        <div>
          <label class="sr-only" for="date-end">Date de fin</label>
          <input v-model="formData.end_date"
              class="shadow-sm w-full p-3 text-sm border border-gray-200 rounded-lg"
              placeholder="Phone Number"
              type="date"
              id="date-end"
          />
          <div v-if="errors['end_date']">
            <span class="text-red-500" :key="index" v-for="(error, index) in errors['end_date']">{{ error }}</span>
          </div>
        </div>
      </div>
      <div id="form" class="shadow-sm rounded-lg">
        <QuillEditor v-model:content="formData.description.fr" content-type="html" theme="snow"/>
        <div v-if="errors['description.fr']">
          <span class="text-red-500" :key="index" v-for="(error, index) in errors['description.fr']">{{ error }}</span>
        </div>
      </div>

      <div class="mt-4 text-right">
        <a @click="this.$store.dispatch('addEvent', this.formData)" class="inline-flex items-center justify-center w-full px-5 py-3 font-bold transition bg-pink-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-pink-50 sm:w-auto">
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
</template>

<script>
import {QuillEditor} from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css'
//TODO: check empty and clear form on submit success
export default {
  name: 'FormEvent',
  components:{
    QuillEditor
  },
  data(){
    return {
      formData: {
        main_manager_id:5962,
        start_date:null,
        end_date:null,
        default_locale:'fr',
        available_locales:['fr'],
        name: {
          fr:null
        },
        description: {
          fr:null
        },
        timezone:'Europe/Paris'
      }
    }
  },
  computed:{
    errors: function (){
      return this.$store.getters.getErrors
    }
  }
}
</script>

<style scoped>

</style>