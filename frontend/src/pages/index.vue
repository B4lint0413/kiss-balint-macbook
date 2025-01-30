<template>
  <BaseLayout>
    <div class="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      <BaseCard v-for="laptop of laptops" :laptop="laptop"/>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@layouts/BaseLayout.vue'
import { useLaptop } from '@stores/LaptopStore.mjs'
import { useModel } from '@stores/ModelStore.mjs'
import { mapState, mapActions } from 'pinia'
import BaseCard from '@components/layout/BaseCard.vue'

export default {
  components: {
    BaseLayout,
    BaseCard
  },
  computed: {
    ...mapState(useLaptop, ['laptops'])
  }
}
</script>

<route lang="json">
{
  "name": "home"
}
</route>