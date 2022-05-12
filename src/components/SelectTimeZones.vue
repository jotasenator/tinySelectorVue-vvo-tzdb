<template>
  <!-- <div>{{timeZones()}} </div>
  <br/>-->
  <div>{{rawTimeZones()}} </div>
  <br/><!--
  <div>{{timeZonesNames()}} </div>
  <br/>--><!--
  <div>{{abbreviations()}} </div> 
  <br/>-->
  <select v-model="selected">
    <option disabled value="">Seleccione un elemento</option>
    <option :key="abbr" v-for="abbr in rawTimeZones()">{{abbr['name'] +' '+'(' + abbr['abbreviation'] + ')' }} </option>
    >
  </select>
  <div>Seleccionado: {{ selected }}</div>
</template>

<script>
import { getTimeZones, rawTimeZones, timeZonesNames, abbreviations } from "@vvo/tzdb";

export default {
    name:'select-timezone',
    data(){
        return {
            selected: '',
            parsedTimeZones:[]
        }
    },
    methods:{
        timeZones:()=> getTimeZones()[0],
        rawTimeZones:()=> rawTimeZones,
        timeZonesNames:()=> timeZonesNames,
        abbreviations:()=> abbreviations,
        

    }

}
</script>

<style>

</style>