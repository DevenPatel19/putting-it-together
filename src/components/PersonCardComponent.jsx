import { useState } from "react";


const PersonCardComponent = ({ firstname, lastname, age, haircolor }) => {

    const [count , setCount] = useState({
        ageCount : age
    });

    const ageHandler = () => {
        setCount( {
            ageCount : count.ageCount + 1
        } )
    }


    return (
      <fieldset>
        <legend>PersonCardComponent.jsx</legend>
        <div>
            <h2>
              {firstname} {lastname}
            </h2>
            <p>Age: {count.ageCount}</p>
            <p>Hair Color: {haircolor}</p>
            <button onClick={ageHandler} >Birthday Button for </button>
        </div>
      </fieldset>
    );
};

export default PersonCardComponent;
