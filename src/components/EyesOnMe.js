// Code EyesOnMe Component Here
import React from "react";

function Button() {
    return (
    <>
    <button onFocus={(e) => {console.log('Good!')}} onBlur={(e) => console.log("Hey! Eyes on me!")}>Eyes on me</button>
    </>
    )
}

export default Button;
