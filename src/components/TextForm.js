import React, {useState} from 'react'
export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Upper case was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        // if(newText.length!==0){
            props.showAlert("Converted to uppercase.","success")
        // }
    }

    const handleLoClick = () =>{
        // console.log("Upper case was clicked "+text);
        let newText = text.toLowerCase();
        setText(newText);
        // if(newText.length!==0){
            props.showAlert("Converted to lowercase.","success")
        // }
    }

    const handleClear = () =>{
        // console.log("Upper case was clicked "+text);
        setText("");
        // if(text.length!==0){
            props.showAlert("Text cleared.","success")
        // }
    }
    const handleCopy = () =>{
        // console.log("Upper case was clicked "+text);
        let text = document.getElementById("myBox")
        text.select()
        document.execCommand("copy")
        document.getSelection().removeAllRanges();
        // if(text.length!==0){
            props.showAlert("Copied to clipboard","success")
        // }
    }

    const handleExtraSpace = () =>{
        // console.log("Upper case was clicked "+text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        // if(text.length!==0){
            props.showAlert("Extra space removed","success")
        // }
    }
    
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.text}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview."}</p>

            </div>
        </>
    )
}
