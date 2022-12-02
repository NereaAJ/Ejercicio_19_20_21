import React, { useState, useEffect } from 'react';
import { Task } from '../../model/task.class';
//import Taskform from '../pure/form/taskFormik';
import Taskformik from '../pure/form/taskFormik';
import TaskComponent from '../pure/task';

const TaskListComponents = () => {

    const defaultTask1 = new Task('Nerea', 'Álvarez', 'example1@gmail.com', true);
    const defaultTask2 = new Task('Antonia', 'Suárez', 'example2@gmail.com', false);
    const defaultTask3 = new Task('Jose', 'Carrión', 'example3@gmail.com', false);
    const defaultTask4 = new Task('Alberto', 'Fernández', 'example4@gmail.com', true);

    //Estado de componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3, defaultTask4]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks])


    function modeTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].conected = !tempTasks[index].conected;
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Detele this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Detele this Task:', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return(
            <table>
            <thead>
                <tr>
                    <th scope='col'> Name </th>
                    <th scope='col'> Last name </th>
                    <th scope='col'> Email </th>
                    <th scope='col-2'> State </th>
                    <th scope='col'> Delete </th>
                </tr>
            </thead>
            <tbody> 
                { tasks.map((task, index) => {
                    return(
                            <TaskComponent 
                                key={ index }
                                task={ task }
                                mode={modeTask}
                                remove = {deleteTask}
                            >
                            </TaskComponent>
                        )
                    }
                )}
            </tbody>
        </table>
        )
    }

    let tasksTable;

    if(tasks.length > 0){
        tasksTable = <Table></Table>
    }else{
        tasksTable = ( 
            <div>
                <h3> No hay datos</h3>
                <h4> Cree un usuario</h4>
            </div>
        )
    }
    const loadingStyle = {
        color:'black',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Titulo */}
                    <div className='card-header p-3'>
                        <h5 style={{ color:'black', fontWeight:'bold', fontSize:'35px'}}>
                            Information:
                        </h5>
                    </div>
                    {/* Cuerpo */}
                    <div className='card-body' data-mdb-perfect-crollbar='true' style={ {position: 'relative', height: '400px'} }>
                        { loading ? <p style={loadingStyle}>Loading tasks...</p> : tasksTable }
                    </div>
                </div>
                <div className='card' style={{marginTop:'15px', padding:'15px'}}>
                    {/* <Taskform add={addTask} length={tasks.length}></Taskform> */}
                    <Taskformik add={addTask} length={tasks.length}></Taskformik>
                </div>
            </div>
        </div>
    );
}

export default TaskListComponents;
