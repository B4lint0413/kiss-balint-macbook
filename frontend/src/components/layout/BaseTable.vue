<template>
    <table>
        <thead>
            <th>Paraméter</th>
            <th>Érték</th>
        </thead>
        <tbody>
            <tr v-for="param in laptop">
                <td>{{param}}</td>
                <td>{{laptop[param]}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    props: ["laptop"]
}
</script>