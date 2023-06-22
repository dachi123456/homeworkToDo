import './todoList.css'

function TodoList({name,id,action}){
    return(
        <div>
            <div className="box">
                <h3 className="name">task : {name}</h3>
                <button className="finish-btn" onClick={() => action(id)}>finish</button>
            </div>
        </div>
    )
}

export default TodoList