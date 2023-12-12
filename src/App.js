import { useState } from "react";

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
  //Define state for input
  const [description, setDescription] = useState("");

  //Define state for quantity
  const [quantity, setQuantity] = useState(1);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  };

  //Function to handle input
  const handleInput = (event) => {
    setDescription(event.target.value);
  };

  //Function to handle select
  const handleSelect = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 Trip?</h3>
      <select value={quantity} onChange={handleSelect}>
        {/* Defining Array of option available in select element */}
        {[...Array(20).keys()].map((indexValue) => (
          <option value={indexValue} key={indexValue}>
            {indexValue + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item....."
        value={description}
        onChange={handleInput}
      />
      <button>Add Item</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {itemData.map((item) => (
          <Item itemObj={item} key={item.id} />
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
