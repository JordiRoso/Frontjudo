import { useState, useEffect } from "react";
import { ResultsService } from "../../_services/ResultsService";
import { useNavigate } from "react-router-dom";

function CreateResults() {
  const [name, setName] = useState("");
  const [nameComp, setNameComp] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("male");
  const [category, setCategory] = useState("senior");
  const [year, setYear] = useState("2022");
  const [weight, setWeight] = useState("60");
  const [position, setPosition] = useState("1");
  const [club, setClub] = useState("");
  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nameComp.trim() || !club.trim()) {
      setErrorMessage("El nombre del competidor y el club no pueden estar vacíos");
      setTimeout(() => handleCloseMessage(), 5000);
      return;
    }

    if (!name.trim() || !location.trim()) {
      setErrorMessage("El nombre de la  competicion y localidad no pueden estar vacios");
      setTimeout(() => handleCloseMessage(), 5000);
      return;
    }
    
    

    const data = {
      name,
      location,
      gender,
      category,
      year,
      results: [
        {
          weight: weight,
          position: position,
          name: name,
          club: club,
        },
      ],
    };

    submitData(data);
  };

  const submitData = async (data) => {
    try {
      console.log(data);
      await ResultsService.createCompetition(data);
      setSuccessMessage("Resultados subidos con éxito");
    } catch (error) {
      setErrorMessage("Error al subir resultados siii");
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("auth-token");
    console.log(token);
    if (!token) {
      navigate(`/login`);
    } else {
      if (successMessage || errorMessage) {
        const timer = setTimeout(() => {
          setSuccessMessage("");
          setErrorMessage("");
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [successMessage, errorMessage]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleNameCompChange = (event) => {
    setNameComp(event.target.value);
  };

  const handleClubChange = (event) => {
    setClub(event.target.value);
  };

  const isMenCompetition = gender === "male";

  return (
    <div className="container">
      <h1>Crear Torneo</h1>
      {successMessage && <p class="alert alert-success">{successMessage}</p>}
      {errorMessage && <p class="alert alert-danger">{errorMessage}</p>}
   
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <select
            className="form-control"
            id="year"
            value={year}
            onChange={handleYearChange}
          >
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            class="form-control"
            id="location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            className="form-control"
            id="gender"
            value={gender}
            onChange={handleGenderChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            className="form-control"
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="weight">Weight:</label>
          <select
            className="form-control"
            id="weight"
            value={weight}
            onChange={handleWeightChange}
          >
            {isMenCompetition ? (
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
              </>
            )}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <select
            className="form-control"
            id="position"
            value={position}
            onChange={handlePositionChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="n/c">n/c</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="nameComp">Nombre Competidor:</label>
          <input
            type="text"
            className="form-control"
            id="nameComp"
            value={nameComp}
            onChange={handleNameCompChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="club">Club:</label>
          <input
            type="text"
            className="form-control"
            id="club"
            value={club}
            onChange={handleClubChange}
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Crear Competicion
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateResults;
