import React from 'react'

export default function Alert(props) {
    const handleCapitalCase=(text)=>{
        let newText=text[0].toUpperCase();
        let newText2=newText+text.substr(1);
        return newText2;  
    }
    return (
        <div style={{height:'50px'}}>
        {props.alert && 
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{handleCapitalCase(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
        </div>

    )
}
