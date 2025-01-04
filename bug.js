```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a variable outside the useEffect scope
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval
    // This leads to memory leaks and potential unexpected behavior
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```