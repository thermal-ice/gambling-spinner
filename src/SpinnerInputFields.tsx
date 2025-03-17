
import * as React from "react";
import "./SpinnerInputFields.css"

interface SpinnerInputFieldsProps {
    chancesList: number[],
    updateChancesList: React.Dispatch<React.SetStateAction<number[]>>;
}

const SpinnerInputFields = ({chancesList, updateChancesList}: SpinnerInputFieldsProps) => {


    const handleChange = (index, e) => {
        const newValue = e.target.value;
        if (/^\d*$/.test(newValue)) {
            const newValues = [...chancesList];
            newValues[index] = Number(newValue);
            updateChancesList(newValues);
        }
    };

    return (
        <div className="container">
            {chancesList.map((value, index) => (
                <div key={index}  className="input-row" >
                    <label>{`Player ${index}`}</label>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(index, e)}
                        placeholder= "Number of chips"
                    />
                </div>
            ))}
        </div>

    );
}

export default SpinnerInputFields;