// Rendering 2 functions

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
