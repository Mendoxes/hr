import React from "react";
import firebase from "./firebase";
import { getFirestore } from "firebase/firestore";
const Add = () => {
  const [value, setValue] = React.useState("");
  const db = getFirestore();
  const getValue = (event) => {
    setValue(event.target.value);
  };

  const addValue = () => {
    db.collection("values")
      .doc(value)
      .set({
        value: value,
      })
      .then(function () {
        console.log("Value successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing Value: ", error);
      });
  };
//   console.log(db.collection("values"))

  return (
    <div>
      <input onBlur={getValue} type='text' />
      <button type='button' onClick={addValue}>
        Add
      </button>
    </div>
  );
};

export default Add;