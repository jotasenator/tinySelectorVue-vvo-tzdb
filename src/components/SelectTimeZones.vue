<template>
  
  <select v-model="selected">
    <option disabled value="">Seleccione un elemento</option>
    <option :key="abbr" v-for="abbr in arrayTimeZonesAbrr()">{{abbr}} </option>
    >
  </select>
  <br/>
  <br/>
  <div>Seleccionado: {{ selected }}</div>
  <br/>
  <br/>
  {{arrayTimeZonesAbrr()}}
  <br/>
  <br/>
  <h1>from array</h1> 
  {{arrayTZabrr()}}
  <br/>
  <br/>
  {{arrayTimeZones()}}
  <br/>
  <br/>
  <h1>from array</h1> 
  {{arrayTZ()}}
  
  {{console.log(rawTimeZones())}}
  
  
</template>

<script>
import {  rawTimeZones } from "@vvo/tzdb";
import { arrayTimeZones, arrayTimeZonesAbrr} from '../helpers/timeZones'
import { arrayTZ, arrayTZabbr} from '../helpers/arrayTimeZone'


export default {
    name:'select-timezone',
    data(){
        return {
            selected: '',
        }
    },
    methods:{        
        rawTimeZones:()=> rawTimeZones,
        arrayTimeZones:()=> arrayTimeZones,
        arrayTimeZonesAbrr:()=>arrayTimeZonesAbrr,
        arrayTZabrr:()=>arrayTZabbr,
        arrayTZ:()=>arrayTZ,
    },
    computed: {
      console: () => console,
      
    },

}
</script>

<style>

</style>