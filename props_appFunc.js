//One way flow of data
// props can hold functions as well, not just data
// Responsibility isolation -- each component has certain Responsibilities

function Button(props) {
	//const handleClick = () => setCounter(counter+1)
	return (
    <button onClick={props.onClickFunction}>
      +1
    </button>
  );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(42);
  const incrementCounter = () => setCounter(counter+1);
  return (
    <div>
      <Button onClickFunction={incrementCounter}/>
      <Display message={counter}/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);
