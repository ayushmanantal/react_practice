// Rendering 2 functions
//Method 1

function Button() {
	const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter+1);
	return (<button onClick={handleClick}>
      {counter}
    </button>
  );
}

function Display() {
  return (
    <div>....</div>
  );
}

ReactDOM.render(
  [<Button />, <Display /> ],
  document.getElementById('mountNode'),
);

//Method 2

function Button() {
	const [counter, setCounter] = useState(0);
	return <button onClick={() => setCounter(counter+1)}>{counter}</button>;
}

function Display() {
  return (
    <div>....</div>
  );
}

ReactDOM.render(
  <div>
    <Button />
    <Display />
  </div>,
  document.getElementById('mountNode'),
);


///Method 3

//This method will do the exact same output as above code but no new DOM parent will be introduced

function Button() {
	const [counter, setCounter] = useState(0);
	return <button onClick={() => setCounter(counter+1)}>{counter}</button>;
}

function Display() {
  return (
    <div>....</div>
  );
}

ReactDOM.render(
  <React.Fragment>
    <Button />
    <Display />
  </React.Fragment>,
  document.getElementById('mountNode'),
);

// This is so common that React can understand this just by <> </> in place of <React.Fragment> and </React.Fragment>
