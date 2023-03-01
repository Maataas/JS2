/*let actorName = "LeonardasDicaprio";
    console.log(actorName.length);   // nustato kintamojo ilgi raidem ir tarpais
    console.log(actorName.toLowerCase());
    console.log(actorName.toUpperCase());
    console.log(actorName.charAt(0)); // nustato kuria raide rodyti 0 yra pirma raide
    console.log(actorName.substring(0,1));/// nurodo nuo kurios iki kokios raides paimti
    console.log(actorName.substring(actorName.length-3)); /// paima tris raides nuo galo SLICE IR SPLICE
    console.log(actorName.replace("a", "u"));
    console.log(actorName.replaceAll("a", "u"));// pakeisti raides viena kitom */

console.log("========1uzd=========="); 

/* Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą. */

let name = "Bredas";
let surname = "Pitas";

console.log(name.length);
console.log(surname.length);

if (name.length < surname.length) {
    console.log(name);
}else{
    console.log(surname);
}

console.log("========2uzd=======");

/*Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio) */

let name1 = "Bredas";
let surname1 = "Pitas";

console.log(name1.toUpperCase() + " " + surname.toLowerCase());

console.log("===========3uzd=========");

/* Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti */

let name3 = "Bredas";
let surname3 = "Pitas";

//ini3 = name3.chartAt(0) + " " + surname3.chartAt(0);

console.log(name3.charAt(0) + "."  + surname3.charAt(0));

console.log("======4uzd======");

//Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

let name4 = "Bredas";
let surname4 = "Pitas";

console.log(name4.substring(name4.length-3) + surname4.substring(surname4.length-3));

console.log("=====5uzd======");

//Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

let filmas = "An American in Paris"

console.log(filmas.replaceAll("A","*").replaceAll("a","*"));

console.log("======6uzd========");

//Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.

//regex

let filmas1 = "An American in Paris"
console.log(filmas1.replaceAll(/[AaEeIiYyOoUuTt]/gi, ""));
let filmas2 ="Breakfast at Tiffany's"
console.log(filmas2.replaceAll(/[AaEeIiYyOoUuTt]/gi, ""));
let filmas3 = "2001: A Space Odyssey"
console.log(filmas3.replaceAll(/[AaEeIiYyOoUuTt]/gi, ""));
let filmas4 = "It's a Wonderful Life"
console.log(filmas4.replaceAll(/[AaEeIiYyOoUuTt]/gi, ""));

console.log("======7uzd=====");

//Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.

let filmas7 = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; 

console.log(filmas7.replaceAll(/[a-z :-]/gi, ""));

console.log("gg");








