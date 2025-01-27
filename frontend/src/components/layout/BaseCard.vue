<template>
    <div class="border-2 rounded bg-gray-400">
        <h2>{{laptop.name}}</h2>
        <RouterLink :to="{name: 'laptop', params: {id: laptop.id}}">Megtekintés</RouterLink>
    </div>
</template>

<script>
export default{
    props: ["laptop"]
}
</script>