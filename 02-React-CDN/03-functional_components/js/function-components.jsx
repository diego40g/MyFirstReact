const Saludo = () => {
    return <h1>Hola mundo</h1>;
};

const Saludo1 = () => {
    return (
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    );
};

ReactDOM.render(<Saludo/>,document.getElementById("root"));
ReactDOM.render(<Saludo1/>,document.getElementById("root1"));