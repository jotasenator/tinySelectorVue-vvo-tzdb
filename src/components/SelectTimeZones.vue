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
  {{arrayTimeZones()}}
  
  {{console.log(rawTimeZones())}}
  
  
</template>

<script>
import {  rawTimeZones } from "@vvo/tzdb";
import { arrayTimeZones, arrayTimeZonesAbrr} from '../helpers/timeZones'


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
    },
    computed: {
      console: () => console,
      
    },

}
</script>

<style>

</style>