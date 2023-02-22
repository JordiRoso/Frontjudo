import React, { useState } from "react";
import CompetitionForm from "./components/CompetitionForm";
import ResultsService from "./services/ResultsService";


export default function  UpdateResults() {
    const [competitionData, setCompetitionData] = useState({
      name: "",
      location: "",
      gender: "",
      category: "",
      year: "",
      results: [],
    });
  
    const handleUpdateCompetition = async () => {
      try {
        const competition = await ResultsService.updateCompetition(
          competitionData._id,
          competitionData,
          competitionData.gender === "male"
        );
        console.log("Competition updated successfully", competition);
        // Actualizar el estado de la competición con los datos actualizados
        setCompetitionData(competition);
      } catch (error) {
        console.log("Error updating competition", error);
      }
    };
  
    return (
      <div className="App">
        <h1>Update competition</h1>
        <CompetitionForm
          competitionData={competitionData}
          setCompetitionData={setCompetitionData}
          handleUpdateCompetition={handleUpdateCompetition}
        />
      </div>
    );
  }
  
 
  