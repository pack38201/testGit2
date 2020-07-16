var price = 20
var fruit = "mango"

if(price==20){
    var fruit = "orange" //local if not local(error)
    console.log(fruit);
}
console.log(fruit);

let price2 = 20
let fruit2 = "mango"

if(price2==20){
    let fruit2 = "orange" 
    console.log(fruit2);
}
console.log(fruit2);

const total = 100; //const ไม่สามารถเปลี่ยนค่าได้ ยกเว้น obj เปลี่ยนได้
const obj = {name:"naiA",phone:088};
obj.phone = "anu";
console.log(obj)

