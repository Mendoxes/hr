
import db from './firebase.config';
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc,getDocs, getDoc, query, where, updateDoc,arrayUnion} from "firebase/firestore"; 
import 'firebase/firestore';
import React,{useState,useEffect} from 'react';
import {useAuth} from "./contexts/AuthContext"
import MainCalendar from "react-calendar"






// async function ok (){

// const employeeRef = collection(db, "employees");
// console.log("em?")
// await setDoc(doc(employeeRef, "SL"), {
//     name: "Sebastian Lewy", position: "Forklift operator", country: "Poland",
//     contract: true, holidayH: 160, email:"seba.lewy@op.pl", phone: "07736202310",
//     time: 2017});
//     await setDoc(doc(employeeRef, "DB"), {
//         name: "Diana Bizior", position: "Team Leader", country: "Poland",
//         contract: true, holidayH: 160,email:"diana.bizior@gmail.com", phone: "07336203310",
//         time: 2019});
//         await setDoc(doc(employeeRef, "MB"), {
//             name: "Maja Bizior", position: "werehouse operative", country: "Poland",
//             contract: false, holidayH: 0,email:"maja.bizior@gmail.com", phone: "07236203310",
//             time: 2020});
//             await setDoc(doc(employeeRef, "AE"), {
//                 name: "Abby eklerek", position: "werehouse operative", country: "English",
//                 contract: true, holidayH: 160,email:"Abby.ek@gmail.com", phone: "07336203310",
//                 time: 2018});
// }

function Test({xxxx, value, eve,takenx}) {
  const [people, setPeople]=useState([])
  const [uniquestate, setUniqueState]=useState("")
    const [state, setState]=useState()

    const [array, setArray]=useState([1])
    const {currentUser} = useAuth()
    const [values, onChange]=useState(new Date())
  
    const [event, setEvent] = useState(true)
let w ;
let unique;
    async function ok3(){
      await updateDoc(doc(db, "employees", "SL"), {
        capital: true
      })}

      function statless(){
setState(eve)}
    
    // const {currentUser}= useAuth()
//     async function ok(){
//         const docRef = doc(db, "cities", "BJ"   
// );
//         const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//   setState(docSnap.data());
// console.log(docSnap.data())
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }}
// console.log(currentUser&& currentUser.email) //current user loged in email adress 
// console.log(xxxx +"xxxx")
// console.log(value.getMonth() +1 +"value")
let xx = value.getMonth() +1;
let test ;

async function ok (){
  
    const sk =[];
    const ks = []
    const di = []
    const holiday = []
const q = query(collection(db, "employees"), where("contract", "==", true));
const arrayvar=[1]
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());

sk.push(doc.data().name)
ks.push(doc.data().email)
di.push(doc.id)
holiday.push(doc.data().holida)
// console.log(sk)
// console.log(ks )
// console.log(di)
console.log(doc.data().holida +"doc data holida")

doc.data().holida?doc.data().holida.map((product)=>{setArray(oldArray => [...oldArray,[product,doc.data().name]])}):console.log("empty")


}



)
// holiday.holida?console.log(holiday.holida.indexOf(eve)): console.log("no")

for (let i = 0 ; i<=xxxx.length-1; i++){
await updateDoc(doc(db, "employees",di[ks.indexOf(currentUser.email)] ), {
  holida: arrayUnion(xxxx[i]+"/"+ xx+"/"+value.getFullYear() )
})}
// console.log(ks[ks.indexOf(currentUser.email)]) //checking email 
// console.log(holiday[ks.indexOf(currentUser.email)]) 
// console.log(sk[ks.indexOf(currentUser.email)]) //checking name
// console.log(di[ks.indexOf(currentUser.email)]) //checking id
// console.log(holiday[ks.indexOf(currentUser.email)].indexOf(eve))
// console.log(eve +"eveeeeee")
setState(holiday[ks.indexOf(currentUser.email)].indexOf(eve)>-1?<div>{currentUser.email}</div>:<div>not ok</div>)
setArray(oldArray => [...oldArray,holiday[ks.indexOf(currentUser.email)].indexOf(eve)>-1?<div>{currentUser.email}</div>:<div>not ok</div>] );
setEvent(true)
// console.log( event + "set people na true")
}; 
//   const [blogs,setBlogs]=useState([])
//   const fetchBlogs=async()=>{
//     const response=db.collection('kk');
//     const data=await response.get();
//     data.docs.forEach(item=>{
//      setBlogs([...blogs,item.data()])
//      console.log(db.collection("users"))
    
//     })
//   }
//   useEffect(() => {
//     fetchBlogs();
//   }, [])

 function callonce(){
  setPeople([])

  let kok =[]
  // console.log(kok +"ooooooooooooooooooooooooooo")
  // console.log( people + "setpeople wyczyszczone")
for (let i=1; i<= array.length-2; i++){
 
w = array[i];

console.log(w[0])
if (w[0]){
if (values.getDate() +"/"+xx+"/"+value.getFullYear() === w[0]){
  
//   console.log("succes" +w[1])
//   console.log(w[1] + "w1")
// console.log(w[0] +"w0")
 kok.push(w[1])


setPeople(oldArray => [...oldArray,w[1]])
// people?console.log("people"):console.log("no people")

// console.log(people +"set people przed unique state")
// console.log( uniquestate + "set people przypisywane")
}}

}

// console.log( event + "set people na falsz")
setEvent(false)

// console.log(kok +"kooooooook")
setUniqueState([...new Set(kok)]);
}



// console.log(uniquestate)
event?callonce():console.log("end")

// console.log(array)

// console.log(unique)
// console.log(values.getDate() +"/"+xx+"/"+value.getFullYear() )

  return (
    <div className="App">

         {/* {state&& state.name} */}
       
        {/* {array && array} */}

        <div>
    {uniquestate&&uniquestate.map((person) => (
       <div className="cart_container"> <p className="cart">Hello, {person} </p></div>
    ))}
    </div>

        {uniquestate&&uniquestate} 
       
        {/* <strong>Email:</strong> {currentUser&&currentUser.email} */}
              <button onClick={ok}>JEZYU </button>
          <div onClick={ok}>
            
              <MainCalendar
        onChange={onChange}
     
        value={values}
      
      /></div>
    
    </div>
  );
}

export default Test;