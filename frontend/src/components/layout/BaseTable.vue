<template>
    <table class="table-auto w-[70%] mx-auto">
        <thead>
            <th class="text-left">Paraméter</th>
            <th class="text-left">Érték</th>
        </thead>
        <tbody>
            <tr class="even:bg-white odd:bg-stone-100">
               <td>Model</td>
               <td>{{ laptop.model.name }}</td> 
            </tr>
            <tr class="even:bg-white odd:bg-stone-100">
               <td>Évjárat</td>
               <td>{{ laptop.year }}</td> 
            </tr>
            <tr class="even:bg-white odd:bg-stone-100">
               <td>Processzor</td>
               <td>{{ laptop.cpu }}</td> 
            </tr>
            <tr class="even:bg-white odd:bg-stone-100">
               <td>RAM mérete</td>
               <td>{{ laptop.ram }} GB</td> 
            </tr>
            <tr class="even:bg-white odd:bg-stone-100">
               <td>Háttértár mérete és típusa</td>
               <td>{{ laptop.storage }} GB <span class="rounded text-white bg-black">{{ laptop.storage_type }}</span></td> 
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    props: ["laptop"]
}
</script>