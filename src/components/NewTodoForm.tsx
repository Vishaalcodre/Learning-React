import React , {useState} from "react"

export const NewTodoForm: React.FC<{
    addTodo: Function
}> = (props) => {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const descriptionChange = (event: any) => {
        console.log('description', event.target.value)
        setDescription(event.target.value);
    }

    const assignedChange = (event: any) => {
        console.log('assigned', event.target.value)
        setAssigned(event.target.value)
    }

    const submitTodo = () =>{
            props.addTodo(description,assigned);
            console.log(description,assigned);
        
        
    }

    return(
        <div className="mt-5">
        <form>
        <div className="mb-3">
            <label className="form-label">Assigned</label>
            <input 
            type="text" 
            className="form-control" 
            required onChange={assignedChange}
            value={assigned}
            >
            </input>
        </div>
        <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea 
            className="form-control" 
            rows={3} 
            required
            onChange={descriptionChange}
            value={description}
            >
            </textarea>
            <button className="btn btn-primary mt-3" onClick={submitTodo}>Add Todo</button>
        </div>
        </form>
        </div>
    )
    }