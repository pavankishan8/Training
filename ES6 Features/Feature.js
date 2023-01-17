
//var has automatic initialzing

/////////////////////////First Example//////////////////////////

var example = 123; //If it is in Node.js, then it will be added to global object.
let letExample = 234;
console.log(window.example);
console.log(window.letExample);
/////////////////////////Second Example//////////////////////////

for(var i = 0; i < 5; i++){
    console.log(i);
}
console.log(i); //Gives an error when let is used.

/////////////////////////Third Example//////////////////////////

function testFunc(){
    let example = 234;
    console.log(example);
}
console.log(window.example);

/////////////////////////Fourth Example//////////////////////////

//console.log(data); //with var no error, with let it gives error.
//var data;

///////////////////////////////////////////////////////////////////////////
/////////////////////////Default Parameters in JS//////////////////////////
///////////////////////////////////////////////////////////////////////////
function sampleFunc(message = "Good Morning"){
    console.log(message);
}

sampleFunc();
sampleFunc("Sample Text");

function createDiv(height = '350px', width = '45%', display = 'inline-block', border = '1px solid red'){
    const div = document.createElement("div");
    div.style.height = height;
    div.style.width = width;
    div.style.display = display;
    div.style.border = border;

    const area = document.querySelector("#divArea");
    area.appendChild(div);
    return div;
}

///////////////////////////////////////////////////////////////////////////
/////////////////////////Default Parameters in JS//////////////////////////
///////////////////////////////////////////////////////////////////////////

function add(... args){

    //let res = 0;
    //for (const val of args) res += val;
    //return res;


return args
.filter((e) => typeof e === 'number')
.reduce((prev, next) => prev + next);
}


console.log(add(123,23));
console.log(add(123,23,45,56));
console.log(add(123,23,67,89,89,77,66));
console.log(add("Testng", true, 34, 45.56, "Sample", {"data" : 123}));

///////////////////////////////////////////////////////////////////////////
/////////////////////////Spread Parameters in JS///////////////////////////
///////////////////////////////////////////////////////////////////////////

const values = [1,2,3,4];
const newValues = [0, ...values];
console.log(newValues);

const data = [];
const states = ["KAR", "AP", "TG", "TN"];
const northStates = ["MAH", "RAJ", "ND", "J&K"];
const indianStates = [...states, ...northStates];
states.push(...northStates);
console.log(states);
console.log(indianStates);

///////////////////////////////////////////////////////////////////////////
/////////////////////////Static Parameters in JS///////////////////////////
///////////////////////////////////////////////////////////////////////////

class MathExample{
    //static function
    static addFunc = (v1, v2) => v1 + v2;

    //instance function
    callStaticFunc(){
        this.constructor.addFunc(123,234);

    }

}

console.log(MathExample.addFunc(123,234));

const obj = new MathExample();
obj.callStaticFunc();