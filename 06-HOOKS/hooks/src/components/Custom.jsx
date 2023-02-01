import { useCounter } from '../hooks/useCounter'

const Custom = () => {
  const [counter, increment, decrement] = useCounter(23,2)
  return (
    <>
        <h1>Custom Hook</h1>
        <hr />
        <p>Value: {counter}</p>
        <button onClick={increment}> + 1 </button>
        <button onClick={decrement}> - 1 </button>
    </>
  )
}

export default Custom