function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '100vh', fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>🚀 React App</h1>
      <p style={{ color: '#666' }}>Deployed to GitHub Pages from <strong>plan8</strong></p>
      <div style={{ margin: '2rem 0' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '0.8em 1.6em', fontSize: '1.1em', borderRadius: '8px',
            border: '1px solid #ddd', cursor: 'pointer', background: '#f9f9f9'
          }}
        >
          Count is {count}
        </button>
      </div>
      <p style={{ color: '#999', fontSize: '0.9em' }}>Built with React 18 + Babel</p>
    </div>
  );
}