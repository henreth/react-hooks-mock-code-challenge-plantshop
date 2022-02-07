import React from "react";

function PlantCard({plant, onUpdatePlant,onDeletePlant}) {

  function handleUpdatePlant() {
    // add fetch request
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isSoldOut: !plant.isSoldOut,
      }),
    })
      .then((r) => r.json())
      .then((updatedPlant) => onUpdatePlant(updatedPlant));  
    }

  function handleDeleteClick() {
      // Call onDeleteItem, passing the deleted item
      fetch(`http://localhost:6001/plants/${plant.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => onDeletePlant(plant));
    }


  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      {!plant.isSoldOut ? (
        <button onClick={handleUpdatePlant} className="primary">In Stock</button>
      ) : (
        <button onClick={handleUpdatePlant}>Out of Stock</button>
      )}
      <button className='delete' onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default PlantCard;
