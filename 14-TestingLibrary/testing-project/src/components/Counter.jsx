import { useCounter } from "../hooks/useCounter"
import ButtonCounter from "./ButtonCounter"

const Counter = () => {
  const {counter, handleModifyCounter, handleReset} = useCounter()
  return (
    <>
        <h2 data-testid="counter" role='counterRole'>Counter: {counter}</h2>

        <ButtonCounter name='aumentar' action={handleModifyCounter}/>
        <ButtonCounter name='disminuir' value={-1} action={handleModifyCounter} />
        
        <button onClick={handleReset} aria-label='reset'>Reset</button>
    </>
  )
}

export default Counter