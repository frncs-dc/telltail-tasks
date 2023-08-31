import Card from 'react-bootstrap/Card';
import AddTask from './AddTask';
import { useEffect, useState } from 'react';
import IndivTask from './IndivTask';
import { useTasksContext } from '../hooks/useTaskContext';

function YourTasks(){

    const {tasks, dispatch} = useTasksContext()

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks/Home')
            const json = await response.json() // parses the json

            if(response.ok){
                dispatch({ type: 'SET_TASKS', payload: json})
            }
        }

        fetchTasks()
    }, [dispatch])

    return (
        <>
           <Card className='p-3'>
                <h2 className="display-4 text-center"> YOUR TASKS </h2>
                {tasks && tasks.map(task => (
                    <IndivTask task={ task } key = {task._id} />
                ))}
                
                <AddTask />
            </Card>
        </>
        
    )
}

export default YourTasks