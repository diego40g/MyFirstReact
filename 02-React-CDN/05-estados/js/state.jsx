const Intervalo = () => {
    const [numero, setNumero]=React.useState(0);
    //state, setState

    /*NO SE DEBE MODIFICAR VALORES
    setInterval(()=>{
        numero++;
    },1500);*/

    setInterval(()=>{
        setNumero(numero+1);
        console.log(numero);
    },1500);

    return (
        <div>
            <h1>Intervalo = {numero}</h1>
            <hr />
        </div>
    );
}

ReactDOM.render(<Intervalo/>,document.getElementById("root"));