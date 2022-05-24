class Saludo extends React.Component {
    render(){
        return <h1>Hola mundo - Legacy</h1>;
    }
} 
class Lista extends React.Component {
    render(){
        //return <h1>Hola mundo - Legacy</h1>;
        return (
            <ul>
                <li>Manzana</li>
                <li>Uva</li>
                <li>Mango</li>
            </ul>
        );
    }
} 
ReactDOM.render(<Saludo/>,document.getElementById("root"));
ReactDOM.render(<Lista></Lista>,document.getElementById("root2"));

