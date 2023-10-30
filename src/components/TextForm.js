import React, {useState} from 'react'

export default function TextForm(props) {

   const handupClick =()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Covert To text in Uppercase","success");

   }
   const handlowerClick =()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Covert To text in Lowercase","success");

   }

   const handclearClick=()=>
   {
    let newText="";
    setText(newText);
    props.showAlert("Covert To text in Clear","success");

   }

   const camelCase=()=>
   {
        let newText=text.split(' ').map(function(word,index){
            return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
        }).join(' ');
        setText(newText);
        props.showAlert("Covert To text in camelcase","success");

   }
   const handCopy=()=>
   {
    var text=document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy text clipboard","success");

   }
   const handExtraSpace=()=>
   {
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Remove Extra spaces","success");

   }
    const handupChange =(event)=>{
    setText(event.target.value)

   }

   const [text , setText]=useState("");

  return (
    <>
    <div className='container' style={{color:props.mode === "dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="mybox" style={{backgroundColor:props.mode === "dark"?"grey":"white",color:props.mode === "dark"?"white":"black"}} value={text} onChange={handupChange} rows="9"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handupClick}>convert to uppercase</button>
   
        <button className="btn btn-primary mx-2" onClick={handlowerClick}>convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handclearClick}>Clear all</button>
        <button className="btn btn-primary mx-2" onClick={camelCase}>convert to camel case</button>
        <button className="btn btn-primary mx-2" onClick={handCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handExtraSpace}>Remove Extra Space</button>
    </div>
    
    <div className="container my-4" style={{color:props.mode === "light"?"black":"white"}}>
        <h2>Text Summary</h2>
        <p>{text.split(' ').length-1} word and {text.length} character </p>

        <p>{0.008 * text.split(' ').length } Minutes to read</p>
         
         <h3>Preview</h3>
         <p>{text.length>0 ? text:"Enter the something above textbox to preview it here "}</p>
    </div>

    </>
  )
}
