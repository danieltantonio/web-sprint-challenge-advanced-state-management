import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfData } from '../store/actions'

const initFormVals = {
    name: '',
    age: '',
    height: ''
}

const CreateSmurf = props => {
    const { postSmurfData } = props;
    const [formVals, setFormVals] = useState(initFormVals);
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormVals({
            ...formVals,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const cleanForm = {
            name: formVals.name.trim(),
            age: parseInt(formVals.age),
            height: formVals.height + 'cm'
        };
        postSmurfData(cleanForm);
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>Name: </label>
                <input type='text' value={formVals.name} name='name' onChange={onChange}/>
                <label>Age: </label>
                <input type='text' value={formVals.age} name='age' onChange={onChange}/>
                <label>Height (in cm): </label>
                <input type='text' value={formVals.height} name='height' onChange={onChange}/>
                <button>Submit</button>
            </form>
        </div>
    )   
}

export default connect(() => {}, { postSmurfData })(CreateSmurf);