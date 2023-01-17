const container = document.querySelector("#root")
const root = ReactDOM.createRoot(container)

//Older form to create components
class List extends React.Component {
    render() {
        return (
            <ol>
                <li>Hola</li>
                <li>Elemento 2</li>
                <li>Aprendiendo React</li>
                <li>Usando Jsx</li>
            </ol>
        );
    }
}

//Traditional for in next new version React 18.2
function Listado() {
    return (
        <ol>
            <li>Crenado functional components</li>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ol>
    );
}

// Best form mantenible component
const Best = () => {
    return (
        <ol>
            <li>Best functional components</li>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ol>
    )
}


root.render(
    <div>
        <h1>React CDN</h1>

        <List/>
        <Listado/>
        <Best />
    </div>
)