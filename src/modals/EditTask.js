import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }if(name === "description"){
            setDescription(value)
        }else{
            setDate(value)
        }


    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setDate(taskObj.Date)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        taskObj["Name"] = taskName
        taskObj["Date"] = date
        taskObj["Description"] = description
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>

                    <div className = "form-group">
                        <label>Task Date</label>
                        <input type="date" className = "form-control" value = {date} onChange = {handleChange} name = "date"/>
                    </div>
                    
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;