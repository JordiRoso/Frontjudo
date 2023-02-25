import { useState, useEffect } from "react";
import { ResultsService } from "../../_services/ResultsService";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function CreateCompes() {
  const navigate = useNavigate();

  const [competitions, setCompetitions] = useState([]);
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(1);
  const [selectedName, setselectedName] = useState("");
  const [selectedClub, setSelectedClub] = useState("");
  const [selectedGender, setSelectedGender] = useState("male");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [competitionId, setCompetitionId] = useState(null);
  const [_id, set_Id] = useState("");
  const [year, setYear] = useState("2022");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newResultId = uuidv4();

    if (!selectedCompetition) {
      console.error("No se ha seleccionado una competición");
      return;
    }

    const data = {
      competitionId: selectedCompetition._id,
      category: "category",
      name: "name",
      gender: "gender",
      location: "location",
      year: "year",

      results: [
        {
          weight: selectedWeight,
          position: selectedPosition,
          name: selectedName,
          club: selectedClub,
          // _id: newResultId,
        },
      ],
    };
    set_Id(newResultId);
    submitData(data);
  };

  
  const submitData = async (data) => {
    try {
      console.log(data);
      const { competitionId, results } = data;
      console.log(results);
      await ResultsService.updateCompetition(competitionId, results);
      console.log(competitionId._id);
      setSuccessMessage("Resultados subidos con éxito siiiiii");
    } catch (error) {
      if (error.response) {
        // Error de servidor, por ejemplo un error 500
        setErrorMessage("Error en el servidor. Intente más tarde.");
      } else if (error.request) {
        // No se pudo conectar con el servidor
        setErrorMessage(
          "No se pudo conectar con el servidor. Intente más tarde."
        );
      } else {
        // Error desconocido
        setErrorMessage("Ocurrió un error. Intente más tarde.");
      }
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("auth-token");
    console.log(token);
    if (!token) {
      navigate(`/login`);
    } else {
      const getAllCompetitions = async () => {
        try {
          const res = await ResultsService.getAllCompetitions();
          const competitionsWithGender = res?.data?.map((competition) => {
            return {
              ...competition,
            };
          });
          setCompetitions(competitionsWithGender);
        } catch (error) {
          console.error(error);
        }
      };
      getAllCompetitions();
    }
   
  }, []);

  
  const handleCompetitionChange = (e) => {
    const selectedCompetitionID = e.target.value;
    console.log("Selected competition ID:", selectedCompetitionID);
    const selectedCompetition = competitions.find(
      (competition) => competition._id === selectedCompetitionID
    );
    setSelectedCompetition(selectedCompetition);
    setCompetitionId(selectedCompetitionID);
  };

  const handleWeightChange = (e) => {
    setSelectedWeight(parseInt(e.target.value));
  };

  const handlePositionChange = (e) => {
    setSelectedPosition(parseInt(e.target.value));
  };

  const handleNameChange = (e) => {
    setselectedName(e.target.value);
  };

  const handleClubChange = (e) => {
    setSelectedClub(e.target.value);
  };
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <div class="container">
  <h2>Actualizar resultados</h2>
  {successMessage && <p>{successMessage}</p>}
  {errorMessage && <p>{errorMessage}</p>}
  <form onSubmit={handleSubmit}>
    <div class="form-group">
      <label for="competition">Competición:</label>
      <select class="form-control" id="competition" value={competitionId || ""} onChange={handleCompetitionChange}>
        {competitions.map((competition) => (
          <option key={competition._id} value={competition._id}>
            {competition.name} ({competition.category} - {competition.year} - {competition.gender})
          </option>
        ))}
      </select>
    </div>

    <div class="form-group">
      <label for="gender">Género:</label>
      <select class="form-control" id="gender" value={selectedGender} onChange={handleGenderChange}>
        <option value="male">Masculino</option>
        <option value="female">Femenino</option>
      </select>
    </div>

    <div class="form-group">
      <label for="weight">Peso:</label>
      <select class="form-control" id="weight" value={selectedWeight} onChange={handleWeightChange}>
        {selectedGender === "male" ? (
          <>
            <option value="-60">-60</option>
            <option value="-66">-66</option>
            <option value="-73">-73</option>
            <option value="-81">-81</option>
            <option value="-90">-90</option>
            <option value="-100">-100</option>
            <option value="+100">+100</option>
          </>
        ) : (
          <>
            <option value="-48">-48</option>
            <option value="-52">-52</option>
            <option value="-57">-57</option>
            <option value="-63">-63</option>
            <option value="-70">-70</option>
            <option value="-78">-78</option>
            <option value="+78">+78</option>
          </>
        )}
      </select>
    </div>

    <div class="form-group">
      <label for="position">Position:</label>
      <select class="form-control" id="position" value={selectedPosition} onChange={handlePositionChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="n/c">n/c</option>
      </select>
    </div>

    <div class="form-group">
      <label for="name">Nombre Competidor:</label>
      <input type="text" class="form-control" id="name" value={selectedName} onChange={handleNameChange} />
    </div>

    <div class="form-group">
      <label for="club">Club:</label>
      <input type="text" class="form-control" id="club" value={selectedClub} onChange={handleClubChange} />
    </div>

    <button type="submit" class="btn btn-primary">Actualizar resultados</button>
  </form>
</div>

    // <div>
    //   <h2>Actualizar resultados</h2>
    //   {successMessage && <p>{successMessage}</p>}
    //   {errorMessage && <p>{errorMessage}</p>}
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="competition">Competición:</label>
    //       <select
    //         id="competition"
    //         value={competitionId || ""}
    //         onChange={handleCompetitionChange}
    //       >
    //         {competitions.map((competition) => (
    //           <option key={competition._id} value={competition._id}>
    //             {competition.name} ({competition.category} - {competition.year}{" "}
    //             - {competition.gender})
    //           </option>
    //         ))}
    //       </select>
    //     </div>

    //     <div>
    //       <label htmlFor="gender">Género:</label>
    //       <select
    //         id="gender"
    //         value={selectedGender}
    //         onChange={handleGenderChange}
    //       >
    //         <option value="male">Masculino</option>
    //         <option value="female">Femenino</option>
    //       </select>
    //     </div>
    //     <div>
    //       <label htmlFor="weight">Peso:</label>
    //       <select
    //         type="string"
    //         id="weight"
    //         value={selectedWeight}
    //         onChange={handleWeightChange}
    //       >
    //         {selectedGender === "male" ? (
    //           <>
    //             <option value="-60">-60</option>
    //             <option value="-66">-66</option>
    //             <option value="-73">-73</option>
    //             <option value="-81">-81</option>
    //             <option value="-90">-90</option>
    //             <option value="-100">-100</option>
    //             <option value="+100">+100</option>
    //           </>
    //         ) : (
    //           <>
    //             <option value="-48">-48</option>
    //             <option value="-52">-52</option>
    //             <option value="-57">-57</option>
    //             <option value="-63">-63</option>
    //             <option value="-70">-70</option>
    //             <option value="-78">-78</option>
    //             <option value="+78">+78</option>
    //           </>
    //         )}
    //       </select>
    //     </div>
    //     <div>
    //       <label htmlFor="position">Position:</label>
    //       <select
    //         type="number"
    //         id="position"
    //         value={selectedPosition}
    //         onChange={handlePositionChange}
    //       >
    //         <option value="1">1</option>
    //         <option value="2">2</option>
    //         <option value="3">3</option>
    //         <option value="5">5</option>
    //         <option value="7">7</option>
    //         <option value="n/c">n/c</option>
    //       </select>
    //     </div>

    //     <div>
    //       <label htmlFor="name">Nombre Competidor:</label>
    //       <input
    //         type="text"
    //         id="name"
    //         value={selectedName}
    //         onChange={handleNameChange}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="club">Club:</label>
    //       <input
    //         type="text"
    //         id="club"
    //         value={selectedClub}
    //         onChange={handleClubChange}
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Crear Competicion
    //     </button>
    //   </form>
    // </div>
    
  );
}
export default CreateCompes;
