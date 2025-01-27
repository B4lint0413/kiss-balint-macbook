<script>
  import { useLaptop } from '@stores/LaptopStore.mjs'
  import { useModel } from '@stores/ModelStore.mjs'
export default{
  async mounted(){
    await useLaptop().getLaptops();
    await useModel().getModels();
  }
}
</script>

<template>
  <RouterView />
</template>
