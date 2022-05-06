<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="sticky top-0 p-8 lg:col-span-3">
      <h2 v-if="!editing" class="text-3xl font-bold sm:text-4xl mb-4">Créer votre événement</h2>
      <h2 v-else class="text-3xl font-bold sm:text-4xl mb-4">Modifier votre événement</h2>
      <form class="space-y-4">
        <div>
          <label class="text-sm font-medium" for="name">Nom de l'événement</label>
          <input v-model="formData.name[formData.default_locale]"
                 class="mt-1 w-full p-3 text-sm border border-gray-200 shadow-sm rounded-lg"
                 placeholder="Nom de l'événement" type="text" id="name"/>
          <div v-if="errors['name.fr']">
            <span class="text-red-500">{{ errors['name.fr'][0] }}</span>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="text-sm font-medium" for="date-start">Date de début</label>
            <input v-model="formData.start_date"
                   class="shadow-sm w-full p-3 text-sm border border-gray-200 rounded-lg mt-1" type="date"
                   id="date-start"/>
            <div v-if="errors['start_date']">
              <span class="text-red-500">{{ errors['start_date'][0] }}</span>
            </div>
          </div>

          <div>
            <label class="text-sm font-medium" for="date-end">Date de fin</label>
            <input v-model="formData.end_date"
                   class="shadow-sm w-full p-3 text-sm border border-gray-200 rounded-lg mt-1" type="date"
                   id="date-end"/>
            <div v-if="errors['end_date']">
              <span class="text-red-500">{{ errors['end_date'][0] }}</span>
            </div>
          </div>

        </div>
        <div id="form">
          <label class="text-sm font-medium" for="description">Description</label>
          <textarea
              v-model="formData.description[formData.default_locale]"
              class="shadow-sm w-full p-3 text-sm border border-gray-200 rounded-lg mt-1"
              placeholder="Description"
              rows="8"
              id="description"
          ></textarea>
          <div v-if="errors['description.fr']">
            <span class="text-red-500">{{ errors['description.fr'][0] }}</span>
          </div>
        </div>


        <div class="mt-4 text-right">
          <a v-if="!editing" @click="createEvent"
             class="cursor-pointer inline-flex items-center justify-center w-full px-5 py-3 font-bold transition bg-pink-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-pink-50 sm:w-auto">
            Créer
            <span aria-hidden="true" class="ml-1.5" role="img">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-3"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
              </span>
          </a>
          <a v-else @click="updateEvent"
             class="cursor-pointer inline-flex items-center justify-center w-full px-5 py-3 font-bold transition bg-pink-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-pink-50 sm:w-auto">
            Modifier
            <span aria-hidden="true" class="ml-1.5" role="img">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-3"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
              </span>
          </a>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormEvent',
  data() {
    return {
      form: {
        main_manager_id: 5962,
        start_date: null,
        end_date: null,
        default_locale: null,
        available_locales: null,
        name: null,
        description: null,
        timezone: null
      }
    }
  },
  computed: {
    errors: function () {
      return this.$store.getters.getErrors
    },
    editing: function () {
      return this.$store.getters.getEditing
    },
    formData: function () {
      return this.$store.getters.getFormData
    }
  },
  methods: {
    createEvent() {
      this.$store.dispatch('addEvent', this.formData)
    },
    updateEvent() {
      this.$store.dispatch('updateEvent', this.formData)
    }
  }
}
</script>

<style scoped>

</style>