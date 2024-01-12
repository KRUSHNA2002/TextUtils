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
    document.getSelection().removeAllRanges();
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
        <h3 className='my-2'>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" id="mybox" style={{backgroundColor:props.mode === "dark"?"#2a475fbd":"white",color:props.mode === "dark"?"white":"black"}} value={text} onChange={handupChange} rows="9"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-4" onClick={handupClick}>convert to uppercase</button>
   
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-4" onClick={handlowerClick}>convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-4" onClick={handclearClick}>Clear all</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-4" onClick={camelCase}>convert to camel case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-4" onClick={handCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-4" onClick={handExtraSpace}>Remove Extra Space</button>
    </div>
    
    <div className="container my-4" style={{color:props.mode === "light"?"black":"white"}}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} character </p>

        <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length } Minutes to read</p>
         
         <h3>Preview</h3>
         <p>{text.length>0 ? text:"Nothing to preview !"}</p>
    </div>

    </>
  )
}
