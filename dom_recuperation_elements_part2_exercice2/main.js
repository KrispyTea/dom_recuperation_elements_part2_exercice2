let h3 = document.getElementsByTagName("h3")[0]
console.log(h3);

let titreNiv3 = document.getElementById("titreNiv3")
console.log(titreNiv3);

let precede = titreNiv3.previousElementSibling
console.log(precede);

let next = document.getElementsByClassName("petitParagraphe")[0].nextElementSibling
console.log(next);

let important = document.getElementsByClassName("important")[0].parentElement
console.log(important);

let listElements = document.getElementById("listElements").firstElementChild
console.log(listElements);

let next2 = document.getElementsByClassName("important")[3].nextElementSibling
console.log(next2);

let next3 = document.getElementById("textGeneral").nextElementSibling.nextElementSibling
console.log(next3);

let nom = document.getElementsByTagName("span")[1].parentElement.nextElementSibling
console.log(nom);

let prenom = document.getElementsByTagName("b")[2].parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild
console.log(prenom.innerText);

let grandParagraphe = document.querySelector("p.grandParagraphe")
console.log(grandParagraphe);

let ul = document.getElementsByTagName("ul")[0]
let li = Array.from(ul.getElementsByTagName("li"))
li.forEach(e => {
    console.log(e.innerText);
});
