<template>
  
  <select v-model="selected">
    <option disabled value="">Seleccione un elemento</option>
    <option :key="abbr" v-for="abbr in rawTimeZones()">{{abbr['name'] +' '+'(' + abbr['abbreviation'] + ')' }} </option>
    >
  </select>
  <br/>
  <br/>
  <div>Seleccionado: {{ selected }}</div>
</template>

<script>
import {  rawTimeZones } from "@vvo/tzdb";

export default {
    name:'select-timezone',
    data(){
        return {
            selected: '',
            parsedTimeZones:[]
        }
    },
    methods:{
        
        rawTimeZones:()=> rawTimeZones,
        

    }

}
</script>

<style>

</style>