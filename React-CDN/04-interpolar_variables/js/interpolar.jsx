const Interpolar = () => {
    const nombre=prompt("¿Cuál es tu nombre?")
    return (
        <div>
            <h1>Hola {nombre}</h1>
            <hr />
            <h3>Fecha: {new Date().getDate()}-{new Date().getMonth()}-{new Date().getDay()}</h3>
        </div>          
    );
};

ReactDOM.render(<Interpolar/>,document.getElementById("root"));