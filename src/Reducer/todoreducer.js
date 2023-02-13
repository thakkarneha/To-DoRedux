const intialData={
    List:[]
}

const toDoREducers =(state=intialData,action)=>{
  
switch(action.type){
case "ADD_TODo": 
const {id,data}=action.payload

return{
    ...state,
    List:[
        ...state.List,
        {
            id:id,
           data:data
        }
    ]
}
case "DELETE_TODO": 
const newList=state.List.filter((item)=>item.id !== action.id)
return{
    ...state,
    List:newList
}
default: return state;
}
}
export default toDoREducers