import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState([]); // Start with empty array
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(searchText) {
    setSearch(searchText);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  // Filter items based on both category and search text
  const itemsToDisplay = items.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const searchMatch = item.name.toLowerCase().includes(search.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="App">
      <ShoppingList 
        items={itemsToDisplay}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={search}
      />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
    </div>
  );
}

export default App;