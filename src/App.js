import React, { useState } from "react";
import "./index.css";

const App = () => {

  const [tasks, setItems] = useState([
    { itemName: "do homework", priority: 1, isCompleted: false }, //Item variables or our app to render
    { itemName: "wash dishes", priority: 2, isCompleted: true },
    { itemName: "water plants", priority: 5, isCompleted: false },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(6);

  const handleAddButtonClick = () => {
    const newItem = {
      /**keys and objects */ itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setInputValue("");
    calculateTotal();
  };

  const handleQuantityIncrease = (index) => {
    // This will increase the items in the cart
    const newItems = [...items]; //Array literal

    newItems[index].quantity++; //this sintax will be executed when new items are added to the cart

    setItems(newItems);
    calculateTotal(); //Sum the value of HandleQuantityIncrease.
  };

  const handleQuantityDecrease = (index) => {
    //Sytax will decreade the number o items in our cart.
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems); //
    calculateTotal(); //Sum the value of HandleQuantityIncrease.
  };

  const toggleComplete = (index) => {
    //Syntax will cross-out the item once toggled to mark complete.
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
  };

  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalItemCount(totalItemCount);
  };

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="add-item-input"
            placeholder="Add an item..."
          />
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => handleAddButtonClick()}
          />
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div
                className="item-name"
                contenteditable="true"
                onClick={() => toggleComplete(index)}
              >
                {item.isSelected ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed" contenteditable="true">
                      {item.itemName}
                    </span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => handleQuantityDecrease(index)}
                  />
                </button>
                <span> {item.quantity} </span>
                <button>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() => handleQuantityIncrease(index)}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total: {totalItemCount}</div>
      </div>
    </div>
  );
};

export default App;
