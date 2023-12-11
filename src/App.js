//Function to define Main App Component
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Stats />
    </div>
  );
}

//Function to Define Logo Component
function Logo() {
  return <h1>🌴🌴 Far Away 💼💼</h1>;
}

//Function to Define Stats Component
function Stats() {
  return (
    <footer className="stats">
      <em>Start Adding som items to you packing list 🚀.</em>
    </footer>
  );
}
