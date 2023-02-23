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
const search = () =>{

}

const TodoList = () => {
    const[inputData,setinputData]=React.useState("");
    const[searchdata,setSearchData]=React.useState("");
    const[Items,setItems] =React.useState(getLocalData());
    const[editItems,seteditItems] =React.useState("");
    const[toggleButton,settoggleButton]=React.useState(false);
    const addItems=()=>{
        if(!inputData){
            alert("fill Required feild.");
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
                    <div class = "heading">
                        Blocked User List 
                    </div>
                    <div className="addItems">
                        <input type="text" placeholder='🚫      Add Blocked User' className='form-control' value={inputData }
                        onChange={(event)=> setinputData(event.target.value)}/>
                        {toggleButton ? (<i className="far fa-edit add-btn" onClick={addItems}></i>):(<i className="fa fa-plus add-btn" onClick={addItems}></i>)}
                    </div>
                    <div class = "heading2">
                        Blocked Users
                    </div>
                    <div className="serach bar">
                        <input type="text" placeholder='Search Blocked Users' className='form-control' value={searchdata}
                        onChange={(event)=> setSearchData(event.target.value)}/>
                        {toggleButton ? (<i className="far ffa fa-search add-btn" onClick={search}></i>):(<i className="far fa fa-search add-btn" onClick={search}></i>)}
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
                        <button className="btn effect04 " data-sm-link-text="Remove All" onClick={()=>removeAll()}><span>Remove All</span></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TodoList
