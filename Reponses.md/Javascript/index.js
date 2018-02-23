/*n°1*/
var tableLang = [
    ["Javascript", "Ruby"],
    ["Php", "Html"], ["CSS", "Python"]];

var tableau2 = tableLang[0].concat(tableLang[1]).concat(tableLang[2]);
console.log(tableau2);
document.getElementById("affiche").innerHTML = "<p>" + tableau2 + "</p>"

/*n°2*/
var obj = {
    "guadeloupe": 971,
    "matinique": 972,
    "guyane": 973,
    "reunion": 974
}
var obj1 = Object.values(obj);
document.getElementById("affiche").innerHTML += "<p>" + obj1 + "</p>";

/*n°3*/
var pays = [
    "france",
    "afrique",
    "asie",
]
var NewPays = pays.push("suisse");
document.getElementById("affiche").innerHTML += "<p>" + pays + "</p>";
console.log(pays);

/*n°4*/
var pays = [
    "france",
    "afrique",
    "asie",
]

var Sup_pays = pays.shift();
console.log(pays);
document.getElementById("affiche").innerHTML += "<p>" + pays + "<p>";

/*n°5*/
var obj = { "yo": 1, "foo": 9, "bar": 4 };
var N_transit = obj.yo;
obj.foo = obj.yo;

console.log(obj.yo);

