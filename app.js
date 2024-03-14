/*
 Created a server
 Parcel do HMR - Hot Module Replacement
 File watcher algorithm
 minify
 bundling
 cleaning our code
 dev and Production build
 super fast build algorithm
 image optimization
 caching while development
 compressing the file
 compatable with older version of the browser
 https on dev
 manage port numbers
 Consistent hashing algorithm
 zero config
 */
import React from "react";
import ReactDOM from "react-dom/client"
const heading = React.createElement("h1", 
{
    id: "title"
}, 
"Heading1 for parcel")
const heading2 = React.createElement("h2", 
{
    id: "title"
}, 
"Hello world")

const container = React.createElement("div", 
{
    id: "container"
}, 
[heading, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(container)
