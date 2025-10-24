import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(searchText) {
    setSearch(searchText);
  }

  // Filter items based on both category and search text
  const itemsToDisplay = items.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const searchMatch = item.name.toLowerCase().includes(search.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="ShoppingList">
      <Filter 
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={search}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;