// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
 }
 function destructivelyRemoveFirstCat(){
    cats.shift()
 }

 function appendCat(name){
    const cat = [...cats,"Broom"];
    return cat;
}

function prependCat(name){
    const catt = ["Arnold", ...cats];
    return catt;  
}

function removeLastCat(){
    const cattt = cats.slice(0, cats.length -1);
    return cattt;
    }

 function removeFirstCat(){
    const catttt = cats.slice(1);
    return catttt;
    }