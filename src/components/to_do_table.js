import TodoRowItem from './to_do_row_item';

function TodoTable(props)
{
    return(
    <table className='table table-hover'>
        <thead>
            <tr>
              <th scope='col'>S.No</th>
              <th scope='col'>Description</th>
              <th scope='col'>Assigned</th>
            </tr>
        </thead>

        <tbody>
            {
                props.todos.map(todo=> (
                    <TodoRowItem 
                    key = {todo.rowNumber}
                    rowNumber = {todo.rowNumber}
                    rowDescription = {todo.rowDescription}
                    rowAssigned = {todo.rowAssigned}
                    />
                ))
            }
        </tbody>
    </table>

    )

    
}

export default TodoTable