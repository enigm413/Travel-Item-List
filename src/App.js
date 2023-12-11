const itemData = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

//Function to define Main App Component
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <Stats />
    </div>
  );
}

//Function to Define Logo Component
function Logo() {
  return <h1>🌴🌴 Far Away 💼💼</h1>;
}

//Function to define Form Component
function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your 😍 Trip?</h3>
      <select>
        {[...Array(20).keys()].map((indexValue) => (
          <option value={indexValue}>{indexValue + 1}</option>
        ))}
      </select>
      <input type="text" placeholder="Item....." />
      <button>Add Item</button>
    </form>
  );
}

//Function to Define Stats Component
function Stats() {
  return (
    <footer className="stats">
      <em>Start Adding som items to you packing list 🚀.</em>
    </footer>
  );
}
