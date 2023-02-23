import React from 'react'
import "./style.css";

const getLocalData=()=>{
    const lists=localStorage.getItem('todoList');

    if(lists){
        return JSON.parse(lists);
    }else{
        return [];
    }
}

const TodoList = () => {
    const[inputData,setinputData]=React.useState("");
    const[Items,setItems] =React.useState(getLocalData());
    const[editItems,seteditItems] =React.useState("");
    const[toggleButton,settoggleButton]=React.useState(false);
    const addItems=()=>{
        if(!inputData){
            alert("plz fill the data.");
        }
        else if(inputData && toggleButton){
            setItems(
                Items.map((currElem) => {
                    if(currElem.id === editItems){
                        return {...currElem,name:inputData};
                    }
                    return currElem;
                })
            );
            setinputData([]);
            seteditItems(null);       
            settoggleButton(false);
        }
        else{
            const myNewInputData={
                id:new Date().getTime().toString(),
                name: inputData,
            }
            setItems([...Items,myNewInputData]);
            setinputData("");
        }
    }

    const DeleteItem = (index)=>{
        const updatedItem= Items.filter((currElem)=>{
            return (currElem.id !== index);
        })
        setItems(updatedItem);
    }

    const removeAll=()=>{
        setItems([]);
    }

    React.useEffect(() => {
        localStorage.setItem("todoList",JSON.stringify(Items))
    }, [Items])


    const editItem=(index)=>{
        const item_todo_edited=Items.find((currElem)=>{
            return currElem.id === index;
        })
        setinputData(item_todo_edited.name);
        seteditItems(index);       
        settoggleButton(true);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add your List Here ✌️</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='✍️    Add Item' className='form-control' value={inputData }
                        onChange={(event)=> setinputData(event.target.value)}/>
                        {toggleButton ? (<i className="far fa-edit add-btn" onClick={addItems}></i>):(<i className="fa fa-plus add-btn" onClick={addItems}></i>)}
                    </div>
                    <div className="showItems">
                        {Items.map((currElem)=>{
                            return(
                                <div className="eachItem" key={currElem.id}>
                                    <h3>{currElem.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit add-btn" onClick={()=>{editItem(currElem.id)}}></i>
                                        <i className="far fa-trash-alt add-btn" onClick={()=> DeleteItem(currElem.id)}></i>
                                    </div>
                                </div>
                                );
                            })}    
                    </div>

                    {/* to remove             */}
                    <div className="showItems">
                        <button className="btn effect04 " data-sm-link-text="Remove All" onClick={()=>removeAll()}><span>CheckList</span></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TodoList
