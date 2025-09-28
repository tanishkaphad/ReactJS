/*  creating structure like this:
 <div id="parent">
    <div id="child">
        <h1>This is the h1 tag</h1>
        <h2>This is the h2 tag</h2> -->sibling
    </div>
     <div id="child2">
        <h1>This is the h1 tag</h1>
        <h2>This is the h2 tag</h2> -->sibling
    </div>
 </div> */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ])
);

//JSX

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
