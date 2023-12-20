import { useState } from "react";
import Item from "./Item.js";

export default function PackingList({
  packingItems,
  onDeleteItems,
  onToggleItems,
  onClearLists,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = packingItems;
  if (sortBy === "description")
    sortedItems = packingItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = packingItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((items) => (
          <Item
            itemObj={items}
            key={items.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearLists}>Reset</button>
      </div>
    </div>
  );
}
