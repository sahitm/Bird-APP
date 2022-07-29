import React from 'react'

const Context = React.createContext()

function ContextProvider(props) {

    const [loginvalues, setLoginValues] = React.useState({
      Logusername: '',
      Logpassword: ''
    });

    const [twtData , SetTwtData] = React.useState(['hello world',"what's up",'i love react'])
    const [twtText , SetTwtText] = React.useState([])

    return (
        <Context.Provider value={{loginvalues,setLoginValues,twtData,SetTwtData,twtText , SetTwtText}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}