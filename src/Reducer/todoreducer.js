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
default: return state;
}
}
export default toDoREducers