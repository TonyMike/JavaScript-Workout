function fbCheck() {
    var users = [
        {
            username: "tonytune",
            password: "michael",
        },
        {
            username: "ifeoluwa",
            password: "eniola"
        }
    ]
    var promptuser = prompt("Enter username");
    var promptpass = prompt("Enter password")
    
    let signIn = (user,pass)=>{
        for (let i = 0; i < users.length; i++) {
            if (user === users[i].username && pass === users[i].password)  return alert(`welcome back ${users[i].username}`)
        }
        console.log(`wrong username or password`)
    }
    signIn(promptuser, promptpass)    
}

// todoList()
function todoList(){
    let btn = document.querySelector('.btn');
    let input = document.querySelector("#input")
    let ul = document.querySelector('ul');
    btn.addEventListener("click", function () {
        if (input.value.length > 0 ) {           
            let li = document.createElement('li')
            li.textContent = input.value;
            ul.appendChild(li)
            input.value = ""
        }
    })
    input.addEventListener('keypress', function (e) {
            if (input.value.length > 0  && e.which === 13) {           
                let li = document.createElement('li')
                li.textContent = input.value;
                ul.appendChild(li)
                input.value = ""
        }
    })
}

// ternary operation
function ternaryOp() {
    function userValid(yes) {
        return yes;
    }
    var account = `your account no is ${(userValid(true) ? "6237930715" : "not available")}`
    
    console.log(account)
}

// switch statement
    function switchOp(score) {
        var grade;
        switch (score) {
            case  74:
                grade = "A";
                break;
            case  69:
                grade = "AB";
                break;
            case  64:
                grade = "B";
                break;
            case  59:
                grade = "BC";
                break;
            case  54:
                grade = "C";
                break;
            case  49:
                grade = "CD";
                break;
            case  44:
                grade = "D";
                break;
            case  39:
                grade = "E";
                break;
            default:
                grade = "Please enter a valid score";
        }
        return grade;
}

        // ADVANCE  FUNCTION

// closures
function closures() {
    const first = () => {
        var greet = "good morning";
        const second = () => {
            console.log(greet)
        }
        return second;
    }
    const third = first()
    console.log(third())
}

// currring
function curring() {
    const curried = a => b => a * b;
    const printout = curried(6)
    console.log(printout(2))
}

// compose
function compose() {
    const composeFunc = (a, b) => c => a(b(c));
    const sum = (x) => x + 2;
    const printout = composeFunc(sum,sum)(2)
    console.log(printout)
}
        //  ADVANCE ARRAYS

// using Map on an array
function mapArr() {
    const array = [
        "fun",
        "sugar",
        "snack",
        "rice",
        "beans",
        "maggi"
    ]
    
    var double = [];
    const newArray = array.forEach(x => {
        double.push(x + "!")
    })
    console.log(double)
    
    const numlist = [
        1,2,3,4,5,6,7,8,9
    ]
    const printNum = numlist.map( x => x + 1)
    console.log(printNum)
}
// using Filter on an array
function filterArr() {
    const numlist = [
        1,2,3,4,5,6,7,8,9
    ]
    const printNum = numlist.filter( x => x > 3)
    console.log(printNum)
}
// using Reduce on an array
function reduceArr() {
    const numlist = [
        1, 2, 3, 4, 5, 6, 7, 8, 9
    ]
    const printNum = numlist.reduce((acc, x) => {return acc + x},0)
    console.log(printNum)
}

// using this keyword in an object
function thisKeyword() {
    let object = {
        a: function () {
            console.log(this.b);
        },
        b: "tony oluwajuwon michael"
    }
}

// instantiation on object 

// using Class
function Class() {
    class Car {
        constructor(carName, model, procYear) {
            this.carName = carName;
            this.model = model;
            this.procYear = procYear;
        }
        
    }
    
    class Motors extends Car  {
        constructor(carName, model, procYear) {
            super(carName, model, procYear)
        }
        play() {
            console.log(`This is ${this.carName} with a model name of ${this.model} made in ${this.procYear}`)
        }
        introduce() {
            alert(`Welcome ${this.carName} to this car park`)
        }
    }
    let motor1 = new Motors("Corola", "Muscle", "2018");
}

// using Function as a classical inheritance
function classObject() {
    let Cars = function (carName, model, procYear) {
        this.carName = carName;
        this.model = model;
        this.procYear = procYear;
    }
    
    Cars.prototype.introduce = function () {
        console.log(`Welcome ${this.carName} to the car park`)
    }
    let motor = new Cars("Toyota", "Evil spirit", "2010")
    console.log(motor.introduce())
}

// Clone an object using spread to avoid the pass by reference rule
function spreadClone() {
    let obj = { a: "a", b: "b", c: "c"}
    let clone = { ...obj }
    clone.c = "d"
    console.log(clone)
    console.log(obj)
}
// Clone an object using assign to avoid the pass by reference rule
function assignClone() {
    let obj2 = {a: 1, b: 2, c: 3}
    let clone2 = Object.assign({}, obj2)
    clone2.c = 4
    console.log(clone2)
}

// deep cloning using JSON.PARSE
function jsonSuperClone() {
    let obj = { a: 1, b: 2, c: 3, d: 4 }
    let superClone = JSON.parse(JSON.stringify(obj))
    obj.c.d = {
        d: "this is a deep cloning"
    }
}

// using include() method to check the availabilty of a value
function includesMethod() {
    let list = [
        "taiwo",
        "kenny",
        "juwon",
        "damilola"
    ];
    (list.includes("taiwo")) ? console.log("Yo!!!, you are one of us...") : alert("we don't know you joor")
}

// square root and cube root
function exponential() {
    const squareRoot = x => x ** 2;
    const cubeRoot = y => y ** 3;
    console.log(`This is square root ${squareRoot(3)} and this is Cube root ${cubeRoot(2)}`)
}

//  using ES8 padStart to add spaces before a String
function padStart() {
    let b = "tonytune";
    console.log(b.padStart(20))
}

//  using ES8 padEnd to add spaces at the end of a String
function padEnd() {
    let b = "tonytune";
    console.log(b.padEnd(20))
}

function ObjectEntriesValueKeys() {
    let obj = {
        name: "tony",
        pass: "mike",
        phone: 2348160484612,
    }
    let printEntries = Object.entries(obj)
    console.log(printEntries)

    let printValue = Object.values(obj)
    console.log(printValue)

    let printKeys = Object.keys(obj)
    console.log(printKeys)

    let users = {
        username0: "Tonytune",
        username1: "michael",
        username2: "flakky"
    }
    let printUsers = Object.entries(users).map(value => {
        return value[1] + value[0].replace("username","")
    });
    console.log(printUsers)
}

// using flat() method to flatten an array in just 1 level deep nested array
function flatArray() {
    const array = [1, 2, 3, [4, 5], 6, 7]
    const flatArray = array.flat();
    console.log(flatArray)
}

// using flatmap() method to flatten an array and return another array in which an operation can be perform on
function flatmap() {
    const array = [1, 2, 3, [4, [5]], 6, 7]
    const flatMapArray = array.flatMap(x=> x);
    console.log(flatMapArray)
}

//  using trimStart() to remove empty spaces in front of a string
function trimStart() {
    const useremail = "              tee.jhay1@gmail.com";
    const trimStart = useremail.trimStart();
    console.log(trimStart)
}

//  using trimEnd() to remove empty spaces at the end of a string
function trimEnd() {
    const useremail = "tee.jhay1@gmail.com                ";
    const trimEnd = useremail.trimEnd();
    console.log(trimEnd)
}

// using fromEntries() method is to convert an array into an object 
function fromEntries() {
    const profile = [["username", "tonytune"], ["password", "oluwajuwon"], ["sex", "male"]];
    const fromEntries = Object.fromEntries(profile);
    console.log(fromEntries)
}
// the try and catch in javaScript allows us to try a piece of code and if there's any errors to catch them
function tryandcatch() {
    try {
        tonex + "you are welcome"
    } catch (error) {
        console.log(error)
    }
}
// using for of for array loops
function forOf() {
    let array = [1,2,3,4,5,6]
    for (x of array) {
        console.table(x+2)
    }
}

// using for in to loop over properties(key) in an object
function forIn() {
    let obj = {
        apple: 2,
        mango: 7,
        orange: 3
    }
    for (key in obj) {
        console.log(key)
    }
}

//  optional chaining operator ?. is use instead of an if statement to check for a property in an object
function optionalChainingOperator() {
    let tonyPokeman = {
        pikachu: {
            species: "Mouse pokeman",
            height: 0.8,
            weight: 3
        }
    }
    
    let orePokeman = {
        raichu: {
            species: "Mouse pokeman",
            height: 2,
            weight: 7
        }
    }
    let weight = tonyPokeman.pikachu.weight
     console.log("Pikachu:",weight)
    let weight2 = orePokeman?.raichu?.weight || "No Weight"
    console.log("Raichu:",weight2)
}

// nullish coalesing operator ?? doesn't check just the falsey but also if it is null or undefined
function nullishCoalesingOperator() {
    let tonyPokeman = {
        pikachu: {
            species: "Mouse pokeman",
            height: 0.8,
            weight: 3,
            power: "Lightening"
        }
    }
    
    let orePokeman = {
        raichu: {
            species: "Mouse pokeman",
            height: 2,
            weight: "",
            power: "Super speed"
        }
    }
    let weight2 = orePokeman?.raichu?.weight ?? "no weight"
    console.log("Raichu:",weight2)
}

function debugging(){
    const flattened = [[1, 2], [3, 4], [5, 6]].reduce((accum, x) => {
        debugger;
        return accum.concat(x)
    }, [])
    console.log(flattened)
}

// recursion means a function that calls itself
function recursion() {
    const foo = () => {
        foo()
    }
    foo()
}

// immediately involked function expression
function IIFE() {
    (function () {
        return 3 * 4
    })();
}

