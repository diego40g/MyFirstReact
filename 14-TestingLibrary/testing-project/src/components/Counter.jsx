import { useCounter } from "../hooks/useCounter"

const Counter = () => {
  const {counter, handleModifyCounter, handleReset} = useCounter()
  return (
    <>
        <h2 data-testid="counter" role='counterRole'>Counter: {counter}</h2>

        <button onClick={()=>handleModifyCounter()} aria-label='aumentar'>+1</button>
        <button onClick={()=> handleModifyCounter(-1)} aria-label='disminuir'>-1</button>
        <button onClick={handleReset} aria-label='reset'>Reset</button>
    </>
  )
}

export default Counter