import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useTasksContext } from '../hooks/useTaskContext';

function IndivTask({ task }){

    const { dispatch } = useTasksContext()

    const deleteTask = async () => {
        const response = await fetch('/api/tasks/Home/' + task._id, {
            method: 'DELETE'
        })
        console.log('so it was sent')
        const json = await response.json()

        if(!response.ok){
            console.log('response not okay')
        }

        if(response.ok){
            dispatch({ type: 'DELETE_TASK', payload: json})
        }
    }

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
            // dispatch({type: 'CREATE_TASK', payload: json })
        }

    };

    return(
        <>
            <Container className='d-flex align-items-center'>
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onClick={handleCheckboxChange}></input>
                <label className={isComplete} for="defaultCheck1"> {task.title}</label>
                <Button variant="outline ms-auto" onClick={deleteTask}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                    </svg>
                </Button>
            </Container>
            <Container className='ms-2'>
                <p className='text-muted'> Due on {task.deadline} at {task.duetime}</p>
            </Container>
            
        </>
    )

}

export default IndivTask