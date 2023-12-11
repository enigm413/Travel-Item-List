const itemData = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

//Function to define Main App Component
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
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
  // Function to handle default form submsion
  const handleSubmit = () => {
    Event.preventDefault();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 Trip?</h3>
      <select>
        {/* Defining Array of option available in select element */}
        {[...Array(20).keys()].map((indexValue) => (
          <option value={indexValue}>{indexValue + 1}</option>
        ))}
      </select>
      <input type="text" placeholder="Item....." />
      <button>Add Item</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {itemData.map((item) => (
          <Item itemObj={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ itemObj }) {
  return (
    <li>
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.description} : {itemObj.quantity}
      </span>
      <button>&times;</button>
    </li>
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
