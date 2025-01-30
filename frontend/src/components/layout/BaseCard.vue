<template>
    <div class="border-2 border-black rounded bg-stone-300">
        <h2 class="text-center font-bold">{{laptop.model.name}} {{laptop.year}}</h2>
        <RouterLink class="m-2 mx-auto text-center block w-[50%] rounded p-2 bg-black text-white" :to="{name: 'laptop', params: {id: laptop.id}}">Megtekintés</RouterLink>
    </div>
</template>

<script>
import {RouterLink} from 'vue-router';

export default{
    props: ["laptop"],
    components: {RouterLink}
}
</script>