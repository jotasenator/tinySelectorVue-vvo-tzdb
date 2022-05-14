import { rawTimeZones } from "@vvo/tzdb";

let arrayTimeZones1 = [];
let arrayTimeZones2 = [];

rawTimeZones.forEach(x => arrayTimeZones1.push(`${x['name']} (${x['abbreviation']})`))

const arrayTimeZonesAbrr = arrayTimeZones1.sort()

const copyRawTimeZones = [...rawTimeZones]

copyRawTimeZones.forEach(x => arrayTimeZones2.push(`${x['name']}`))

const arrayTimeZones = arrayTimeZones2.sort()


export { arrayTimeZonesAbrr, arrayTimeZones } 