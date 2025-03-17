
const DropDown = ({numBoxes, setNumBoxes}) => {

    const handleSelectChange = (event) => {
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