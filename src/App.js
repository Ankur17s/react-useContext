import React, {createContext} from "react";
import "./style.css";
import CompA from "./CompA"


// ContextAPI becomes more complicated when there is more number of consumer, so to overcome that situation we are using --useContext-- Hook because in makes nicer and simple to read

// useContext makes context a little easier to use
// if we want to pass data throughout multiple level so we can use Context instead of Redux

const FirstName = createContext();
const LastName = createContext();

export default function App() {
  return (
    <>
      <FirstName.Provider value={'Ankur'}>
        <LastName.Provider value={'Srivastav'}>
        <CompA />
       </LastName.Provider>
      </FirstName.Provider>
  
    </>
  );
}

export {FirstName, LastName}
