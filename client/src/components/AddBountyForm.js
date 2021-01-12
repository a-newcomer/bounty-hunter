import React, { useState } from 'react';

function AddBountyForm(props) {
    const initInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        price: props.price || 0,
        type: props.type || "",
        alive: props.alive || true
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const target = e.target
        const value = target.name === 'alive'? target.checked: target.value
        const name = target.name
        setInputs(prevInputs => ({
            ...prevInputs, [name]: value
        }) )
        console.log(name, value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
        console.log(inputs, props._id)
    }
    return (
        <form onSubmit={handleSubmit}>
            
            <label>First Name
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="" />
            </label>
            <label>Last Name
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange} 
                placeholder="" />
                </label>
            <label>Price
            <input
                type="number"
                name="price"
                value={inputs.price}
                onChange={handleChange}
                placeholder="" />
                </label>
            <label>Order
            <input
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="Sith, Jedi or Unknown" />
                </label>
            <label className="checkBoxLabel"><span>Bring them in Alive?</span>
            <input
                type="checkbox"
                name="alive"
                checked={inputs.alive}
                onChange={handleChange} 
                className="checkBox"/> {/*is this correct?*/}
            </label>
            <button>{props.btnText}</button>
        </form>
    );
}

export default AddBountyForm;