export const addToDo=(data)=>{
   
    return {    
        type:"ADD_TODo",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteTODo=(id)=>{
    return {    
        type:"DELETE_TODO",
        id
        
    }
}
