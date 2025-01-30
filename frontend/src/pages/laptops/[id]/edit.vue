<template>
  <BaseLayout>
    <div v-if="loaded" class="m-10">
      <h2 class="text-3xl text-left mb-5">{{laptop.model.name}} {{laptop.year}} szerkesztése</h2>
      <FormKit type="form" :actions="false" @submit="editLaptop" class="block mx-auto">
        <FormKit input-class="border-2 border-black rounded-lg p-1 w-full" name="year" label="Évjárat" type="number" validation="required|between:1999,2024|numeric" v-model="laptop.year"></FormKit>
        <FormKit input-class="border-2 border-black rounded-lg p-1 w-full" name="cpu" label="Processzor" type="text" validation="required|length:1,30" v-model="laptop.cpu"></FormKit>
        <FormKit input-class="border-2 border-black rounded-lg p-1 w-full" name="ram" label="RAM méret (GB)" type="number" validation="required|between:1,36|numeric" v-model="laptop.ram"></FormKit>
        <FormKit input-class="border-2 border-black rounded-lg p-1 w-full" name="storage" label="Tároló méret (GB)" type="number" validation="required|between:1,1024|numeric" v-model="laptop.storage"></FormKit>
        <FormKit input-class="border-2 border-black rounded-lg p-1 w-full" name="screen" label="Képernyőátmérő" type="number" validation="required|between:12,16|numeric" v-model="laptop.screen"></FormKit>
        <FormKit input-class="border-2 border-black rounded-lg p-1 w-full" name="storage_type" label="Tároló típusa" type="select" :options="storageOptions" v-model="laptop.storage_type"></FormKit>
        <FormKit input-class="border-2 border-black rounded-lg p-1 w-full" name="modelId" label="Modell" type="select" :options="modelOptions" v-model="laptop.modelId"></FormKit>
        <FormKit input-class="rounded-lg bg-black text-white p-2 mt-5" type="submit">Mentés</FormKit>
      </FormKit> 
    </div>
    
    <div v-else role="status" class="block mx-auto">
        <svg aria-hidden="true" class="m-10 mx-auto w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
  </BaseLayout>
</template>

<script>
import {useLaptop} from '@stores/LaptopStore.mjs'
import {useModel} from '@stores/ModelStore.mjs'
import {mapActions, mapGetters} from 'pinia'
import BaseLayout from '@layouts/BaseLayout.vue'

export default{
  data(){
    return {
      loaded: false,
      laptop: {},
      storageOptions: {
        SSD: "SSD",
        HDD: "HDD",
        SSHD: "Fusion Drive"
      }
    }
  },
  methods: {
    ...mapActions(useLaptop, ['getLaptop', 'updateLaptop']),
    async editLaptop(){
      await this.updateLaptop(this.laptop.id, this.laptop);
      this.$router.push({name: 'laptop', params: {id: laptop.id}});
    }
  },
  async mounted(){
    this.laptop = await this.getLaptop(this.$route.params.id);
    console.log(this.laptop);
    this.loaded = true;
  },
  computed:{
    ...mapGetters(useModel, ['modelOptions'])
  },
  components: {
    BaseLayout
  }
}
</script>

<route lang="json">
{
  "name": "edit-laptop"
}
</route>