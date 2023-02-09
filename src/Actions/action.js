export const addToDo=(data)=>{
   
    return {    
        type:"ADD_TODo",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteTODo=()=>{
    return {    
        type:"DELETE_TODO"
    }
}
export const removeTODO=()=>{
    return {    
        type:"REMOVE_TODO"
    }
}