import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onUpdatePlant, onDeletePlant}) {
  let plantsToDisplay = plants.map((plant)=>{
    console.log(plant)
    return <PlantCard 
      key={plant.id}
      plant={plant}
      onUpdatePlant={onUpdatePlant}
      onDeletePlant={onDeletePlant}
      />
  })
  return (
    <ul className="cards">
      {plantsToDisplay}
      </ul>
  );
}

export default PlantList;
