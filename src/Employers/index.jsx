import React from 'react'
import {useState} from "react"
import MainCalendar from "react-calendar"
import Drawer from "../Drawer"
import db from '../firebase.config';
import { increment, decrement,collection, doc, setDoc,getDocs, getDoc, query, where, updateDoc,arrayUnion} from "firebase/firestore"; 
import {useAuth} from "../contexts/AuthContext"

function Employers({count, startend}) {

    const [value, onChange]=useState(new Date())
const [vv, setVV] =useState([]);
const [mm, setMM] =useState([]);
const {currentUser} = useAuth()
let person ={
    name:"Sebastian",
    surname:"Lewy",
    age:32,
    position:"Forklift operator",
    holidaysFree:180,
    holidaysTaken:0
}
let vk=[]
let x =   {name:"Sebastian",
surname:"Lewy",
age:32,
position:"Forklift operator",
holidaysFree:180,
holidaysTaken:0,
}

let v = [];
let m = [];
let z = value.getDate()
if(startend){
    let y =[startend[0].startDate.getDate(), startend[0].endDate.getDate()];
     let x = [startend[0].startDate.getMonth(), startend[0].endDate.getMonth()];

console.log( "oki odi" + y) // dzien poczatkowy i koncowy 
console.log( "odi okx" + x)} // miesiac poczatkowy i koncowy 
console.log("value=====>" + value.getDate())

// if (z ===startend[0].startDate.getDate() ){
//     console.log("udalo sie")
// }
let [stateZ, setStateZ] = useState(person.holidaysFree)

function okss(){
    oks();
    loop();
    loop2();
    loop3();
   ok();
 
}
let arr = []
var getDateArray = function(start, end) {
arr =[]
    var
     
      dt = new Date(start);
  
    while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
  
    return arr;
  
  }
let counter = 0 ;
function loop3(){
    counter = 0 ;
    vk = []
    let store = parseInt(startend[0].startDate.getMonth())+1
    getDateArray(startend[0].startDate,startend[0].endDate)
  
    for( let i = startend[0].startDate.getDate() ; i<= startend[0].endDate.getDate();i++){
        console.log(i +"i")
   
     console.log(arr.length +"arr length")
     console.log(counter +"counter")
     console.log(arr.length)
        console.log(arr[counter].getDay() +"zeroooo")
        console.log(startend[0].startDate +"start data")
        if (arr[counter].getDay()===0||arr[counter].getDay()===6){console.log("sobota albo niedziela")}
        else{
        vk.push(i +"/"+store +"/"+ startend[0].startDate.getFullYear())}
        if(counter <=arr.length-1){counter = counter +1 }
     else {console.log("wieksze")}
    }}

function loop(){
    counter = 0 ;
    getDateArray(startend[0].startDate,startend[0].endDate)
  
    for( let i = startend[0].startDate.getDate() ; i<= startend[0].endDate.getDate();i++){

        if (arr[counter].getDay()===0||arr[counter].getDay()===6){console.log("sobota albo niedziela")}
        else{
        v.push(i)}
        if(counter <=arr.length-1){counter = counter +1 }
        else {console.log("wieksze")}
      
    }
    
    console.log(vk +"vvvkkkkkkkkkk")
    setVV(v);


}


function loop2(){
    for( let i = startend[0].startDate.getMonth() ; i<= startend[0].endDate.getMonth();i++){
        m.push(i)
      
    }
    
    console.log(m+1  +"employee --> m")
    setMM(m);


}






function oks() {
    console.log(stateZ +"stateZ")
           return  setStateZ(stateZ = stateZ - count * 7.5);
        }

        if ( !startend) {
            return <div>No post!</div>
        }else{
        //     console.log(startend[0].startDate +"this shit")
        // console.log(startend[0].endDate)
        // console.log(startend[0].endDate)
    }

console.log(value +"value")
console.log(count*7.5)

async function ok (){
  let w ;
  let intersection = []
  
const q = query(collection(db, "employees"), where("contract", "==", true));
const arrayvar=[1]
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {

    console.log(currentUser.email)
    if(currentUser.email===doc.data().email){
        console.log(doc.data().holida +"holliidaaa")
         intersection = doc.data().holida.filter(element => vk.includes(element));
       
        console.log(v +"main v")
        console.log(doc.data().holida +"holliidaaa")
        console.log(intersection.length +"interrrsectioooon length")
        console.log(intersection +"interrrsectioooon ")
     w = doc.id
    }

  console.log(doc.id, " => ", doc.data())})
 
  await updateDoc(doc(db, "employees", w ), {
    holidayH: increment(-Math.abs(count)*7.5+(intersection.length*7.5)) 
  })

}
    return (
        <div>
     
          {/* <p>Free holiday houers: {stateZ}</p>
           <p>Holiday taken: {count*7.5}</p> */}
           <button onClick={okss}> the button </button>
     
      <Drawer name={person} takenx={count*7.5} v={vv} value={value} m={mm}></Drawer>
        </div>
    )
}

export default Employers
