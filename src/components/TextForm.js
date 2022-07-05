import React, { useState } from 'react'

export default function TextForm(props) {
    const convertToUpCase = () => {
        console.log("uppercase");

        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Uppercase", "success")
    }
    const convertToLoCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("lowercase", "success")
    }
    const copyToClipboard = () => {

        var copyText = document.getElementById("textarea");

        /* Select the text field */
        copyText.select();
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied To Clipboard", "success")
    }
    const onchangehandle = (e) => {
        console.log("on change")
        setText(e.target.value);
    }
    const [text, setText] = useState("");

    function getWordCount(str) {
        return str.split(' ')
          .filter(function(n) { return n !== '' })
          .length;
   }

    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={onchangehandle} style={{ backgroundColor: props.mode === "dark" ? "gray" : "white", color: props.mode === "dark" ? "white" : "black" }} id="textarea" rows="8"></textarea>
                <button className="btn btn-primary my-2" onClick={convertToUpCase}>Convert to upppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={convertToLoCase}>Convert to Lovercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={copyToClipboard}>Copy Text</button>
            </div>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Your Text Summary</h2>
                <p><b>{getWordCount(text)}</b> Words and <b>{text.length}</b> Charecters</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter text in above box to preview here"}</p>
            </div>
        </>
    )
}

