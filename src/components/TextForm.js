import React, {useState} from 'react'
export default function TextForm(props) {
    const [text,setText]=useState("")
    const handleUpCase=(event)=>{
        let newText=text.toUpperCase();
        setText(newText);
        event.preventDefault();
        props.showAlert("Changed to uppercase","success")
    }
    const handleLowCase=(event)=>{
        let newText=text.toLowerCase();
        setText(newText);
        event.preventDefault();
        props.showAlert("Changed to lowercase","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
        
    }
    const handleCapitalCase=(event)=>{
        let newText=text[0].toUpperCase();
        let newText2=newText+text.substr(1);
        setText(newText2)      
        event.preventDefault();  
        props.showAlert("Changed first letter capital","success")
    }
    const handleClearCase=(event)=>{
        setText("")      
        event.preventDefault();  
        props.showAlert("Text CLeared","success")
    }
    const handleCopyCase=(event)=>{
        // let textarea=document.getElementById('myBox');
        // textarea.select();
        navigator.clipboard.writeText(text)
        event.preventDefault();  
        // props.showAlert("Clipboard Copied","success")
    }
    const handleExtraSpace=(event)=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        event.preventDefault();  
        props.showAlert("Removed Extra Spaces","success")
    }

    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
            <h1>{props.heading}</h1>
            <form>
                <div className="form-group my-3">
                    <textarea value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#80808136':'white',color:props.mode==='dark'?'white':'black'}} className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpCase}>Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowCase}>Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCapitalCase}>Capitalize</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearCase}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyCase}>Copy To Clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </form>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
            <h2>Your text summary</h2>
            <p>Total no. of words are {text.split(/\s+/).filter((element)=>{
                return element.length!=0;
            }).length} and total number of characters are {text.length}</p>
            <p>It will take about {0.008*text.split(" ").filter((element)=>{
                return element.length!=0;
            }).length} minutes to read all the words</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}