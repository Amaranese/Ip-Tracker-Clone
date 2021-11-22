const { useState } = require("react");

const useInput = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    const reset = () => {
        setValues(initialState);
    }

    return [ values, handleInputChange, reset ];
}

export default useInput