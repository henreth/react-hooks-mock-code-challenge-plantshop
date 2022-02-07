import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const plantURL ='http://localhost:6001/plants';

function PlantPage() {
  let [plants, setPlants] = useState([])

  useEffect(() => {
    fetch(plantURL)
      .then((r) => r.json())
      .then((plantItems) => setPlants(plantItems));    
    }, []);

  function handleUpdatePlant(updatedPlant) {
      const updatedPlants = plants.map((plant) => {
        if (plant.id === updatedPlant.id) {
          return updatedPlant;
        } else {
          return plant;
        }
      });
      setPlants(updatedPlants);
    }

    function handleAddPlant(newPlant) {
      setPlants([...plants, newPlant]);  
    }
  
  const [searchText, setSearchText] = useState("");

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }
  
  function handleDeletePlant(deletedPlant) {
    const updatedPlants = plants.filter((plant) => plant.id !== deletedPlant.id);
    setPlants(updatedPlants);
  }


  const plantsToDisplay = plants
    .filter(
      (plant) => plant.name.toLowerCase().includes(searchText.toLowerCase()));  
;

  return (
    <main>
      <NewPlantForm 
        onAddPlant={handleAddPlant}/>
      <Search 
        onSearchChange={handleSearchChange}
        searchText={searchText}/>
      <PlantList 
        plants={plantsToDisplay}
        onUpdatePlant = {handleUpdatePlant}
        onDeletePlant= {handleDeletePlant}
        />
    </main>
  );
}

export default PlantPage;
