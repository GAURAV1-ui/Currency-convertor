import './App.css'

function App() {

  let counter = 15;

  const addValue = () => {
    console.log(counter);
    counter++;
  }


  return (
    <>
      <h1>Chai aur react {counter}</h1>
      <h2>Counter Value</h2>
      <button onClick={addValue}>Button</button>
    </>
  )
}

export default App
