import React, { useState } from 'react';

import 'react-calendar/dist/Calendar.css';

import {Form,Button,Card,Alert} from "react-bootstrap"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import {useHistory, Link} from "react-router-dom"
import "./style.css"



function Calendar({ setCount, setStartEnd }) {

  const [error, setError]= useState("")
   
const history = useHistory()

const [next, setNext] =useState();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 2),
      key: 'selection',
      dif:"ok"
    }


  ]);

  const [dateM, setDateM]= useState({});
  let k ;
  let l ;
function dif(){
    let x = [state][0][0].startDate.getDate();
    let y = [state][0][0].endDate.getDate();
    return k = (y-x>0? y-x+1 :1)

}

function week(){ 
  setCount(k);
  setStartEnd(state);
 
 let x= [state][0][0].startDate.getDay();
let y= [state][0][0].endDate.getDay();
  if (x>=y&&k>1 &&k<11 || x<y&& k == 12|| x<y&&k==11){
  return setCount(k - 2);
  }
  else if (k>=11){return setCount(k - 4 );}
  else if (x<y&&k>=9){return setCount(k - 2);}
}

// console.log(document.querySelectorAll(".rdrDay")[0].childNodes[0].classList)?document.querySelectorAll(".rdrDay")[0].childNodes[0].classList:"OK" ;
 function dashboard(){
  
history.push("/")





}


dif();
week();

  return (
    <div className="calendarRange">
      

      <DateRangePicker
  onChange={item => setState([item.selection])}
  showSelectionPreview={false}
  moveRangeOnFirstSelection={false}
  week={1}
  staticRanges={[]}
  inputRanges={[]}
  ranges={state}
  
  direction="horizontal"
  
></DateRangePicker>
<Button variant="outline-secondary" onClick={dashboard} ><Link aria-current={true} onClick={dashboard} to="./employers">Back</Link> </Button>
{next}


{/* {console.log([state][0][0].startDate)};
{console.log([state][0][0].endDate.getDay())};
{console.log([state][0][0].startDate.getDate())}
{console.log([state][0][0].endDate.getDate())}
{console.log(k)}
{k} */}


    </div>
  );
}

export default Calendar