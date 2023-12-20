import { useState } from "react";

//Function to define Form Component
export default function Form({ onAddItems }) {
  //Define state for input
  const [description, setDescription] = useState("");

  //Define state for quantity
  const [quantity, setQuantity] = useState(1);

  //Function to handle input
  const handleInput = (event) => {
    setDescription(event.target.value);
  };

  //Function to handle select
  const handleSelect = (event) => {
    setQuantity(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    //Check the description in form is empty or not
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    //Resetting states after form submission
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 Trip?</h3>
      <select value={quantity} onChange={handleSelect}>
        {/* Defining Array of option available in select element */}
        {[...Array(20).keys()].map((indexValue) => (
          <option value={indexValue + 1} key={indexValue}>
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
      <button>Add Items</button>
    </form>
  );
}
