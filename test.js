//1. Duotas masyvas, console.log atspausdinti masyvo ilgį
const mas1 = [12, 5, 9, 7, 5, 4];

console.log("1 uzduotis: masyvo ilgis:");
console.log(mas1.length);

//2. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę;

console.log("2 uzduotis masyvo reiksmes:");
const mas2 = [13, '785', 92, 'labas', 522, 6984];

for(let i = 0; i < mas2.length; i++) {
    let a = mas2[i];
    console.log(a);
}

//3. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė yra lyginė (porinė)

console.log("3 uzduotis reiskmes su if: ");

const mas3 = [889, 52, 698, 752, 9333, 7];

for(let i = 0; i < mas3.length; i++) {
    let a = mas3[i];
    if(a % 2 == 0) {
        console.log(a);
    }
}


//4. Duotas masyvas, masyvą iteruoti ciklu forEach ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė prasideda raide A arba a

console.log("4 uzduotis forEach ciklas:")

const mas4 = ['Agurkas', 'Bananas', 'arbūzas', 'Bebras', 'Voverė', 'Ąžuolas', 'Mažas triušis'];

console.log("nespejau..")


//5. Duotas stringas, suskaičiuoti kiek stringe yra raidžių z

console.log("5 uzduotis suskaiciuoti kiek raidziu z, atsakymas:")

const str1 = 'Storas zebras, bėga nuo zuulu genties nedžiotojų.';

let count = str1.split("z").length - 1;
console.log(count);


//6. Duotas Setas, į kurį reikia pridėti reikšmes (stringus) 'Labas' ir 'Ate' ir console.log
// atspausdinti Seto ilgį

console.log("6 uzduotis, prideti reiksmes ir atspausdinti ilgi:")

const set1 = new Set(['Labas', 'Vakaras', 'Rytas', 'Valio']);

console.log(set1);
set1.add("labas");
set1.add("ate");
console.log(set1);
console.log(set1.length)
// reiksmes ideda, bet length spausdina undefined, per mazai laiko issiaiskinti kur ne taip darau kazka :) 


//7. Suprototaipinti standartinį String tipo objektą, pridedant metodą lastCharIs(), 
// kuris grąžintų paskutinį stringo simbolį. Pademonstruoti veikimą su stringu 'Ku Ku';
const str2 = 'Ku ku';
// console.log(str2.lastCharIs()) po prototaipinimo eilutė turi veikti

console.log("7 uzduotis: sita praleisiu ;D")

//8. Duotas objektas, kurį reikia iteruoti, kiekvienoje iteracijoje išvedant savybę
// ir jos reikšmę
const obj1 = { labas: 'vakaras', laba: 'diena', labs: 'ryts' };

console.log("8 uzduotis, liko 5 min, tai pasiliksiu kitam kartui :) ")

//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"

console.log("9 uzduotis grybai:")

class Grybas {
    constructor(tipas) {
        this.tipas = tipas;
    }
}

let a = new Grybas("baravykas");
let b = new Grybas("umede");
let c = new Grybas("lepsis");

console.log(a, b, c);