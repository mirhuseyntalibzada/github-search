import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import axios from 'axios';

function App() {

    const [user , setUser] = useState([])
    const [alert, setAlert] = useState()
    
    const inputKeyword=(keyword)=>{
        axios.get(`https://api.github.com/search/users?q=${keyword}`)
        .then(res=>{setUser(res.data.items);})
    }

    const alertData=(item)=>{
        setAlert(item)
    }

    return (
        <> 
            <Header inputKeyword={inputKeyword} alertData={alertData}/>
            <Body apidata = {user} alert={alert}/>
        </>
    )
}

export default App