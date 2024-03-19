import React from "react";
import ReactDOM from "react-dom/client"

//React.createElement => Object => HTML(DOM)
/*
const heading = React.createElement("h1", 
{
    id: "title",
    key: "h1"
}, 
"Namaste react")
*/


//JSX => React.createElement => Object => HTML(DOM)

const Title = () =>(
    <h1 id="title" key="h2">
     Namaste React
    </h1> //this is not html.It is html like syntax
) //JSX expression   


// React Components (two types)
// - Functional - NEW
// - Class Based Components - OLD
//Functional components or any component start with capital letters.

//Composing Components
const HeaderComponent = () => {
    return (
    <div>
        <Title />
        <h2>Namaste React Functional Component</h2>
        <h2>This is h2 tag</h2>
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))

//passing a react element inside the root
root.render(<HeaderComponent />)
