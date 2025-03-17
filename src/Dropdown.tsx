import * as React from "react";

interface DropDownProps {
    numBoxes: number;
    setNumBoxes: React.Dispatch<React.SetStateAction<number>>;
}
const DropDown = ({numBoxes, setNumBoxes}: DropDownProps) => {

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNumBoxes(Number(event.target.value));
    };

    return (
        <div>
            <select onChange={handleSelectChange} value={numBoxes}>
                {[...Array(10).keys()].map(i => (
                    <option key={i} value={i + 1}>
                        {i + 1}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropDown;