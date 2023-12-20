//Function to Define Stats Component
export default function Stats({ itemList }) {
  //If there is no any item added
  if (!itemList.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );
  }

  const numItem = itemList.length;
  const numPacked = itemList.filter((item) => item.packed).length;
  const calcPercentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {calcPercentage === 100
          ? "You got everything! Ready to go ✈"
          : `You have ${numItem} on the list, and you already packed ${numPacked} (
        ${calcPercentage} %)`}
      </em>
    </footer>
  );
}
