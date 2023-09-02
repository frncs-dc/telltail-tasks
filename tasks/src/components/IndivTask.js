import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

import { toWords } from '../helpers/Date';
import DeletePrompt from './DeletePrompt';



function IndivTask({ task }){


    const [isChecked, setIsChecked] = useState(false);

    const isComplete = isChecked ? 'form-check-label fw-bold ms-2 text-decoration-line-through' : 'form-check-label fw-bold ms-2';

    const handleCheckboxChange = async() => {
        
        const response = await fetch('/api/tasks/Home/' + task._id, {
            method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: isChecked ? 'In Progress' : 'Done',
                }),
            });

        if(!response.ok){
            console.log('response not okay')
        }

        if(response.ok){
            setIsChecked(!isChecked);
        }
    };
    
    return(
        <>
            {console.log(task.deadline)}
            <Container className='d-flex align-items-center'>
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onClick={handleCheckboxChange}></input>
                <label className={isComplete} htmlFor="defaultCheck1"> {task.title}</label>
                
                <DeletePrompt task={ task }/>
            </Container>
            <Container className='ms-2'>
                <p className='text-muted'> {toWords(task.deadline.toString())} </p>
            </Container>
            
        </>
    )

}

export default IndivTask