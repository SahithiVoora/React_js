const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1", {},"iam h1 tag"),React.createElement("h2",{},"iam a h2 tag")]),
React.createElement("div",{id:"child2"},
[React.createElement("h1", {},"iam h1 tag"),React.createElement("h2",{},"iam a h2 tag")])]);

const heading = React.createElement("h1", {id:"heading"}, "hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);