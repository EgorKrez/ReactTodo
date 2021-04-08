import React, {useState} from "react";
import PropTypes from "prop-types"

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState('')

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

const styles = {
    wrapper: {
      height: "25px",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
    },
    input: {
        width: "70%",
    },
    button: {
        width: "20%",
        borderRadius: "4px",
        border: "1px solid gray",
    }
}

function AddTodo({ onCreate }) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form style={styles.wrapper} onSubmit={submitHandler}>
            <input style={styles.input} {...input.bind}/>
            <button style={styles.button} type="submit">Add todo</button>
        </form>
    );
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo