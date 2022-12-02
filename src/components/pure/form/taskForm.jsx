import React, {useRef,} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../../model/task.class';

const Taskform = ({add, length}) => {

    const nameRef = useRef('');
    const lastnameRef = useRef('');
    const emailRef = useRef('');

    function addTask(e){
        e.preventDefault(); //Cargas inecesarias 
        const newTask = new Task(
            nameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,
            true
        );
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name'/>
                <input ref={lastnameRef} id='inputLastName' type='text' className='form-control form-control-lg' required placeholder='Task lastname'/>
                <input ref={emailRef} id='inputEmail' type='email' className='form-control form-control-lg' required placeholder='Task email'/>
                <button type='submit' className='btn btn-success btn-lg ms-2' style={{marginTop:'15px'}}>
                    { length > 0 ? 'Create user' : 'New user' }
                </button>
            </div>
        </form>
    );
}

Taskform.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;
