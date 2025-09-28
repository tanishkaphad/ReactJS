/*  creating structure like this:
 <div id="parent">
    <div id="child">
        <h1>This is the h1 tag</h1>
    </div>
 </div> */
 
 const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
       React.createElement("h1",{},"This is h1 tag")));

 console.log(parent); //object

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);