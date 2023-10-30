// import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle,setmyStyle]= useState({
    //     color:'white',
    //     backgroundColor:'black',
    // });

    let myStyle={
        color:props.mode==="light"?"black":"white",
        backgroundColor:props.mode==="dark"?"#2a475fbd":"white",
        border:"1px solid",
        borderColor:"light"?"#2a475fbd":"white",
    }


  return (
    <div className='container' style={{color:props.mode==="light"?"black":"white"}}>
        <h2 className='my-3'>About Us</h2>
            <div className="accordion"  id="accordionExample" >
        <div className="card " style={myStyle}>
            <div className="card-header" id="headingOne">
            <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
                </button>
            </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body pl-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, in? class.
            </div>
            </div>
        </div>
        <div className="card" style={myStyle}>
            <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button>
            </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body pl-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ratione dolore expedita voluptas ducimus omnis error tempora unde illo necessitatibus.
            </div>
            </div>
        </div>
        <div className="card" style={myStyle}>
            <div className="card-header" id="headingThree">
            <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
            </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body pl-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ullam atque. Asperiores debitis saepe dolores?
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
