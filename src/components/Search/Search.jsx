import React, { useEffect, useState } from "react";
// import JudoListas from "../JudoListas/JudoListas";
import { ResultsService } from "../../_services/ResultsService";
import queryString from "query-string";

function Search() {
  const [searchResults, setSearchResults] = useState({});
  const [competitions, setCompetitions] = useState([]);
  const [competitionNames, setCompetitionNames] = useState([]);
  const [formData, setFormData] = useState({
    year: "",
    gender: "",
    category: "",
    weight: "",
    name: "",
    id: "",
    selectedWeight: "",
  });

  useEffect(() => {
    const getAllCompetitions = async () => {
      try {
        const res = await ResultsService.getAllCompetitions();
        setCompetitionNames(res.data.map((competition) => competition.name));
      } catch (error) {
        console.error(error);
      }
    };
    getAllCompetitions();
  }, []);
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      id: Date.now().toString(),
    }));
  }, []);

  const search = async () => {
    try {
      const res = await ResultsService.searchCompetition(formData);
      setSearchResults(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="year">Año:</label>
          <select
            className="form-control"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
          >
            <option value="">Todos</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Género:</label>
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Todos</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoría:</label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Todas</option>
            <option value="senior">Senior</option>
            <option value="junior">Junior</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="weight">Peso:</label>
          <select
            className="form-control"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          >
            <option value="">Todos</option>
            {formData.gender === "male" && (
              <>
                <option value="-60">-60</option>
                <option value="-66">-66</option>
                <option value="-73">-73</option>
                <option value="-81">-81</option>
                <option value="-90">-90</option>
                <option value="-100">-100</option>
                <option value="100">100</option>
              </>
            )}
            {formData.gender === "female" && (
              <>
                <option value="-48">-48</option>
                <option value="-52">-52</option>
                <option value="-57">-57</option>
                <option value="-63">-63</option>
                <option value="-70">-70</option>
                <option value="-78">-78</option>
                <option value="78">78</option>
              </>
            )}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Competencia:</label>
          <select
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          >
            <option value="">Todas</option>
            {competitionNames.map((name) => (
              <option key={name._id} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>
      {searchResults && searchResults.length > 0 && (
        <JudoListas competition={searchResults} />
      )}
    </>
  );
}

export default Search;
