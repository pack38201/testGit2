//normal fc
function A(a,b){
    return a+b
}

//arrow fc
//ใช้ในกรณี fc ที่ต้องการ return มีบรรทัดเดียว
//const fcName=(parameter)=>return
const B=(a,b)=>a+b //return a+b
const C=name=>({name:name,age:15}) //return obj use ()

let result = B(1,2)
let resultName = C("Chatdanai")
console.log(resultName)


//Default Parameter
const addUser=(name,last,city = "SP")=>{
    return name+" "+last+" "+city
}

console.log(addUser("Chatda","Sri"));
console.log(addUser("O","Cha","BKK"));

//Rest Operator
//... ไม่จำกัดจำนวนคล้ายอาเร
const addName=(name,last,... city)=>{
    return name+" "+last+" "+city
}
console.log(addName("O","Cha","BKK","U"));

const addMessage=(firstT,... message)=>{
    return message.map(m=>firstT+message)
}

console.log(addMessage("Hello","JS","CSS","HTML"));

const addNumber=(... number)=>{
    return number.reduce((first,current)=>{
        return first+current
    })
}

console.log(addNumber(1,2,3,4,5))

//Spread Operator Array

let fruit=['มะม่วง','แตงโม']

let newFruit =[...fruit,'ทุเรียน','ขนุน']; //array + new array

let allfruit = [...fruit,...newFruit] //array + array
console.log(allfruit)

//Spread Operator Obj

let product = {name:"Durain",price:200}
let newproduct = {...product,category:"fruit"} //add property
console.log(newproduct)

let newprice={...newproduct,price:500}//edit property 
console.log(newprice)

//Template Literals (แทนต่อ string แบบ +)
const n1 = "Chatdanai"
const n2 = "Srikasam"
const n3 = "Pack"

const allname = `Name = ${n1} Last = ${n2} Nicname = ${n3}`

const allname2 = `Name = ${n1} 
Last = ${n2} 
Nicname = ${n3}`
 
console.log(allname2)

//Destructuring Object (กระจายค่า obj ไปกำหนดให้ตัวแปร)

let person = {name:"pack",skill:"js css","a":22}
var person1 = person.name //old
var person2 = person.skill //old
console.log(person1+person2+person.a)

let {name,skill}=person //new แต่ต้องใช้ชื่อเดิม
console.log(name+skill)

//Computed Property Name

//let person = {key1:"value1", key2:"value2", property}

//คำนวนใน property ได้
let Uu={
    ["user"+2*10]:"20",
    ["user"+3*10]:"30"
}
console.log(Uu)
//สามารถเราตัวแปรเป็นไปใส่ใน property ได้ หากเป็น key ใช้ [] 
let namePPT = "Cake";

let ppt1={
    namePPT:"Value1",price:"150"
}
console.log(ppt1)

let ppt2={
    [namePPT]:namePPT+"Value1",price:"150"
}
console.log(ppt2)

let ppt3={
    [namePPT+1*100+" v.3"]:namePPT+"Value1",price:"150"
}
console.log(ppt3)

//Shorthand Property & Method

let x1 = "A"
let x2 = "B"

let rOld = {
    x1:x1,
    x2:x2
}

let rNew ={
    x1,x2 //แต่ชื่อต้องเหมือนตัวแปร
}
console.log(rOld)
console.log(rNew)

//class

//แบบเดิม
function Uuuu(name,age){
    this.name = name
    this.age = age
}

//ชื่อคราส.prototype.method
Uuuu.prototype.SayHii = function(){
    console.log("Hello = "+this.name +" "+this.age)
}

var Uuuu1=new Uuuu("pack",33)
Uuuu1.SayHii()
//แบบเดิม

//แบบใหม่
class UNew {
    constructor(name,age){
        
        this.name = name
        this.age = age
    }
    SayNew(){
        console.log("Hello = "+this.name +" "+this.age)
    }
}

let newOb = new UNew("newPack",22)
newOb.SayNew()
//แบบใหม่

var Uuu={
    name:"Pack",
    age:15,
    SayHi:function(){
        return "Hello = "+this.name
    }
}
console.log(Uuu.SayHi())

//Inheritance 
class Admin{
    constructor(){
        console.log("I'm Admin")
    }
    isPermission(){
        console.log("Level 1")
    }
}

class Child extends Admin {
    constructor(name,age){
        super() //call constructor mother class
        this.name = name
        this.age = age
    }
    SayNew(){
        console.log("Hello = "+this.name +" "+this.age)
    }
}
let ChildC = new Child("newPack",22)
ChildC.SayNew()
ChildC.isPermission()