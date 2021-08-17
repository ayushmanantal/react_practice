//Embedded Function with Button

function Button() {
  const [counter, setCounter] = useState(0)
	return <button onClick=
	{
               function logRandom()
               {
                       console.log(Math.random());
               }
            }>{counter}</button>;
}

ReactDOM.render(
  <Button />,
  document.getElementById('mountNode'),
);
