<template>
  <a class="cursor-pointer mb-4 block p-8 rounded-xl border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000]">
    <h3 class="mt-3 text-xl font-bold ">{{ data.name[data.default_locale] }}</h3>
    <p class="mt-4 text-sm " v-html="data.description[data.default_locale]"></p>
    <p @click="this.$store.dispatch('deleteEvent', data.id)">delete</p>
  </a>
</template>
<script>
export default {
  name: 'SingleCard',
  props: {
    data: Object
  }
}
</script>

<style scoped>

</style>
