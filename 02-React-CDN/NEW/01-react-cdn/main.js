const container = document.querySelector("#root")
const root = ReactDOM.createRoot(container)

//root.render("Hola mundo!!!")
//root.render(React.createElement("h1", null, "Hola mundo!!!"))
root.render(React.createElement("div",null,
    React.createElement("h1",null,"Hola mundo!!!"),
    React.createElement("h2",null,"Soy un h2"),
    React.createElement("h3",null,"Aprendiendo react"),
    React.createElement("h4",null,"React es lo maximo"),
));