import React from 'react'
import "./style.css"
import {useState} from "react"
import Test from "../Test"


function Drawer({takenx, name, v,value,m, display,setDisplay}) {
let childx = 13;    
let finish =[];
let xxxx =(v.map((reptile) => (
    
    reptile
  )))
  const [array,setArray] = useState();
//   setArray(oldArray => [...oldArray,finish] );

   
//     console.log(name)
// console.log(takenx)
// console.log(value.getUTCMonth() +1 + "please")
// console.log(value.getUTCDate() +1 + "please")
// console.log(value.getUTCFullYear() + + "please")
let  op = parseInt(value.getUTCMonth())+1
let eve= value.getDate()+"/"+op+"/"+value.getUTCFullYear()

console.log(value.getDate()+"/"+value.getUTCMonth()+"/"+value.getUTCFullYear() )
console.log(value.getDate() +"please please")
    // for (const property in name.name) {
    //     console.log(`${property}: ${name.name[property]}`);
    //   }

   console.log(m +"m on drawer")


      renderVH();
    function renderVH(){
      
       
        for (let i=0 ; i <=xxxx.length-1 ; i++ ){
console.log(xxxx[i]);
console.log(xxxx)   //AREEY of days on pointed on the range 
            {if (xxxx[i] === value.getDate()){
            
            return finish = (<div>{name.name}</div>)
            }  
    
            }
          }
    }
 


    return (

     

        <div className="border">
         
        
            
{/* {finish} */}
<Test xxxx={xxxx} value={value} eve={eve} takenx={takenx} display={display} setDisplay={setDisplay}></Test>

        
         
      
        </div>
    )
}

export default Drawer
