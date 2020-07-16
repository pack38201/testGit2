//forEach-----------------------------------------
//(loop cannot return)
const animals = ['Ant', 'Bat', 'Cat', 'Dog']
// ใน Method forEach จะทำการรับ Function เพื่อทำหน้าที่เป็นตัวเพื่อให้ ค่าแต่ละตัว
// มาผ่านเพื่อให้ได้ผลลัพธ์ตาม Function ที่เราต้องการ (ดูรูปด้านล่างเพิ่มเติม)
animals.forEach((animal) => {
   console.log(animal)
})

const animals2 = ['Ant', 'Bat', 'Cat', 'Dog']
for (let i = 0; i < animals2.length; i++) {
  console.log(animals2[i])
}

//map-----------------------------------------
//เป็น Array เหมือนเดิม (loop array return array)
const numbers = [35, 23, 17, 21]
const result = numbers.map((number) => {
  return number*2
})
console.log(result) // [70, 46, 24, 42]

const numbers2 = [35, 23, 17, 21]
let result2 = []
for (let i = 0; i < numbers2.length; i++) {
  result.push(numbers2[i]*2)
}
console.log(result2) // [70, 46, 34, 42]

//filter-----------------------------------------
//return array คล้าย where 
const members = [ 
    {name: "Eve", age: 24}, 
    {name: "Adam", age: 48}, 
    {name: "Chris", age: 18}, 
    {name: "Danny", age: 30}
 ]
 const result3 = members.filter((member) => {
   return member.age > 25
 })
 console.log(result3)
 // [{name: "Adam", age: 48}, {name: "Danny", age: 30}]

 let result4 = []
for (let i = 0; i < members.length; i++) {
  if (members[i].age > 25) {
     result4.push(members[i])
  }
}
console.log(result4)

//find-----------------------------------------
//return first result
const result5 = members.find((member) => {
    return member.age > 25
  })
  console.log(result5) // {name: "Adam", age: 48}

  let result6
for ( let i = 0; i < members.length; i++) {
  if (members[i].age > 25) {
     result6 = members[i]
     break
  }
}
console.log(result6)

//Every & Some-----------------------------------------
// Every Method (&&)
const everyResult = members.every((member) => {
    return member.age > 25
  })
  console.log(everyResult) // false
  // Some Method (||)
  const someResult = members.some((member) => {
    return member.age > 25
  })
  console.log(someResult)  // true

  // Every Method
let everyMember = true
for (let i = 0; i < members.length; i++) {
  var member = members[i]
  if (member.age > 25) {
    everyMember = everyMember && true
  } else {
    everyMember = everyMember && false
  }
}
console.log(everyMember)
// Some Method
let someMember = false
for (let i = 0; i < members.length; i++) {
  var member = members[i]
  if (member.age > 25) {
    someMember = someMember || true
  } else {
    someMember = someMember || false
  }
}
console.log(someMember)

//Reduce-----------------------------------------
//จากโค้ดด้านบนจะเป็นว่าเราได้กำหนดค่า Initial Value เป็น 0 ซึ่ง 0 นั้นจะเป็นค่า Sum เริ่มต้นเมื่อตัวแปรใน Array ตัวแรกมาผ่าน Function ก็จะถูกรวมกับ ค่า sum ทำให้ตอนนี้ค่า sum = 10 จากนั้นเมื่อตัวถัดไปเข้ามาใน Function ก็จะถูกรวมกับค่า sum ซึ่งตอนนี้เท่ากับ 10 ทำให้กลายเป็นค่า sum อันใหม่เท่ากับ 30 นั้นเอง จากนั้นก็รวมกันไปเรื่อยๆจนครบทำให้ได้ผลลัพธ์เท่ากับ 100
const numbers3 = [10, 20, 30, 40]
const result7 = numbers3.reduce((sum,number) => {
  return sum+number
}, 0)
console.log(result7) // 100

let result8 = 0
for (let i = 0; i < numbers3.length; i++) {
  result8 += numbers3[i]
}
console.log(result8) // 100