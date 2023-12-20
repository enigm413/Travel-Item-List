import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

//Function to define Main App Component
export default function App() {
  //Define state for item list
  const [itemList, setitemList] = useState([]);

  //Function to handle add items
  const handleAddItems = (item) => {
    setitemList((itemList) => [...itemList, item]);
  };

  //Function to handle delete items
  const handleDeleteItems = (id) => {
    setitemList((itemList) => itemList.filter((item) => item.id !== id));
  };

  //Function to handle toggle item
  const handleToggleItems = (id) => {
    setitemList((itemList) =>
      itemList.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  //Function to handle clear list
  const handleClearList = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete everuthing"
    );
    if (confirm) setitemList([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        packingItems={itemList}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearLists={handleClearList}
      />
      <Stats itemList={itemList} />
    </div>
  );
}
