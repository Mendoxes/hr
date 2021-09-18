import React from "react";
import firebase from "./firebase";
import { getFirestore } from "firebase/firestore";

export const useGetData = () => {
  const [documents, setDocuments] = React.useState([]);
  const db = getFirestore();
  React.useEffect(() => {
    db.collection("values")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.docs.map((doc) =>
          arr.push({ id: doc.id, value: doc.data() })
        );
        setDocuments(arr);
      });
  }, [db]);
  console.log(db +"okdoasdadihasddash")
  return [documents];
};