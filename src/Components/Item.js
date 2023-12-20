//Function to Define Item Component

export default function Item({ itemObj, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => onToggleItems(itemObj.id)}
      />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.description} : {itemObj.quantity}
      </span>
      <button onClick={() => onDeleteItems(itemObj.id)}>&times;</button>
    </li>
  );
}
