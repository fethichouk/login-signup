import axios from 'axios';

export const addUser = (myData,navigate) => async(dispatch)=>{
    try {
       
        const {data} = await axios.post("http://localhost:5000/user/addUser",myData)
        
        
       
        dispatch({
            type: 'ADD_USER',
            payload: data
        })
        localStorage.setItem('token',data.token)
      
        dispatch(current(data.token,navigate))
    } catch (error) {
        console.error(error)
    }
    
}
export const login = (myData,navigate) => async(dispatch)=>{
    try {
       
        const {data} = await axios.post("http://localhost:5000/user/login",myData)
        
        console.log("data",data)
       
        dispatch({
            type: 'LOGIN',
            payload: data
        })
        localStorage.setItem('token',data.token)
      console.log("token",data.token)
        dispatch(current(data.token,navigate))
    } catch (error) {
        console.error(error)
    }
    
}

export const current = (token,navigate) =>async(dispatch)=>{
    const config ={
        headers:{
            Authorization: token
        }
    }
    try {
        const {data} = await axios.get("http://localhost:5000/user/current",config)
       
            console.log("current",data)
        dispatch({
            type : 'CURRENT',
            payload : data.user
        })
            navigate('/User')
    } catch (error) {
        console.log(error)
    }
}

