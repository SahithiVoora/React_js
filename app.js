import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
const heading=React.createElement("h1",{"id":"heading"},"Iam react element");
const root=ReactDOM.createRoot(document.getElementById("root"));
const num=10000;
const elem=<span>react span element</span>


//this is to render react elements.
// const HeadingComponent=()=>{
//     return <h1>Iam react functional component</h1>;
// }
const HeadingComponent=() => (
    
     <h1>Iam react functional component</h1>
     
     
);

const jsxheading=(
    <h1>{elem}
    iam jsx heading
    </h1> 
    
    );
    
// //if we want to render our component in html.the syntax follows
root.render(jsxheading);
