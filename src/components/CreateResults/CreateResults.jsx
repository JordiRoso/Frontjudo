import { useState } from "react";
import { ResultsService } from "../../_services/ResultsService";
import { v4 as uuidv4 } from "uuid";

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
  // const [_id, set_Id] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // const newResultId = uuidv4();

    const data = {
      name,
      location,
      gender,
      category,
      year,
      results: [
        {
          weight,
          position,
          name,
          club,
          // _id: newResultId
        },
      ],
    };

    // set_Id(newResultId);

    submitData(data);
  };

  const submitData = async (data) => {
    try {
      console.log(data);
      // await ResultsService.createCompetition(data);
      await ResultsService.createCompetition(data);
      
      setSuccessMessage("Resultados subidos con éxito");
    } catch (error) {
      setErrorMessage("Error al subir resultados siii");
    }
  };

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

    <div class="container">
  <h1>Create Results</h1>
  {successMessage && <p class="alert alert-success">{successMessage}</p>}
  {errorMessage && <p class="alert alert-danger">{errorMessage}</p>}
  <form onSubmit={handleSubmit}>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" id="name" value={name} onChange={handleNameChange} />
    </div>
    <div class="form-group">
      <label for="year">Year:</label>
      <select class="form-control" id="year" value={year} onChange={handleYearChange}>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
    <div class="form-group">
      <label for="location">Location:</label>
      <input type="text" class="form-control" id="location" value={location} onChange={handleLocationChange} />
    </div>
    <div class="form-group">
      <label for="gender">Gender:</label>
      <select class="form-control" id="gender" value={gender} onChange={handleGenderChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="form-group">
      <label for="category">Category:</label>
      <select class="form-control" id="category" value={category} onChange={handleCategoryChange}>
        <option value="junior">Junior</option>
        <option value="senior">Senior</option>
      </select>
    </div>
    {/* <div class="form-group">
      <label for="-73">-73:</label>
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" id="input1" placeholder="Nombre" />
        </div>
        <div class="col">
          <input type="text" class="form-control" id="input2" placeholder="Nombre" />
        </div>
        <div class="col">
          <input type="text" class="form-control" id="input3" placeholder="Nombre" />
        </div>
        <div class="col">
          <input type="text" class="form-control" id="input4" placeholder="Nombre" />
        </div>
      </div>
    </div> */}
    <div class="form-group">
      <label for="weight">Weight:</label>
      <select class="form-control" id="weight" value={weight} onChange={handleWeightChange}>
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
        <div class="form-group">
    <label for="position">Position:</label>
    <select class="form-control" id="position" value={position} onChange={handlePositionChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="n/c">n/c</option>
    </select>
</div>

<div class="form-group">
    <label for="nameComp">Nombre Competidor:</label>
    <input type="text" class="form-control" id="nameComp" value={nameComp} onChange={handleNameCompChange} />
</div>

<div class="form-group">
    <label for="club">Club:</label>
    <input type="text" class="form-control" id="club" value={club} onChange={handleClubChange} />
</div>

<div class="form-group">
    <button type="submit" class="btn btn-primary">Crear Competicion</button>
</div>
</form>
    </div>
      );
    }
    
    export default CreateResults;
    
    

//     <div class="container">
//       <h1>Create Results</h1>
//       {successMessage && <p class="alert alert-success">{successMessage}</p>}
//       {errorMessage && <p class="alert alert-danger">{errorMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <div class="form-group">
//           <label for="name">Name:</label>
//           <input
//             type="text"
//             class="form-control"
//             id="name"
//             value={name}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div class="form-group">
//           <label for="year">Year:</label>
//           <select
//             class="form-control"
//             id="year"
//             value={year}
//             onChange={handleYearChange}
//           >
//             <option value="2022">2022</option>
//             <option value="2023">2023</option>
//           </select>
//         </div>
//         <div class="form-group">
//           <label for="location">Location:</label>
//           <input
//             type="text"
//             class="form-control"
        //     id="location"
        //     value={location}
        //     onChange={handleLocationChange}
        //   />
        // </div>
        // <div class="form-group">
        //   <label for="gender">Gender:</label>
        //   <select
        //     class="form-control"
        //     id="gender"
        //     value={gender}
        //     onChange={handleGenderChange}
        //   >
        //     <option value="male">Male</option>
        //     <option value="female">Female</option>
        //   </select>
        // </div>
        // <div class="form-group">
        //   <label for="category">Category:</label>
        //   <select
        //     class="form-control"
        //     id="category"
        //     value={category}
        //     onChange={handleCategoryChange}
        //   >
        //     <option value="junior">Junior</option>
        //     <option value="senior">Senior</option>
        //   </select>
        // </div>
//         <div class="form-group">
//           <label for="-73">-73:</label>
//           <div class="row">
//             <div class="col">
//               <span>peso</span>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="input1"
//                 name="posicion1"
//                 placeholder="-73"
//               />
//             </div>
//             <div class="col">
//               <span>posicion</span>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="input1"
//                 name="posicion1"
//                 placeholder="1"
//               />
//             </div>
//             <div class="col">
//               <span>nombre</span>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="input2"
//                 name="posicion2"
//                 placeholder="Nombre"
//               />
//             </div>
//             <div class="col">
//               <span>club</span>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="input3"
//                 name="posicion3"
//                 placeholder="Club"
//               />
//             </div>
//           </div>
//         </div>

//         <div class="form-group">
//           <button type="submit" class="btn btn-primary">
//             Crear Competicion
//           </button>
//         </div>
//       </form>
//     </div>


// import { useState } from "react";
// import { ResultsService } from "../../_services/ResultsService";
// import { v4 as uuidv4 } from "uuid";

// function CreateResults() {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [gender, setGender] = useState("male");
//   const [category, setCategory] = useState("senior");
//   const [year, setYear] = useState("2022");
//   const [weight, setWeight] = useState("-60"); // Corregir valor inicial de weight
//   const [club, setClub] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [results, setResults] = useState([]);

//   const submitData = async (data) => {
//     try {
//       console.log(data);
//       await ResultsService.createCompetition(data);
//       setSuccessMessage("Resultados subidos con éxito");
//     } catch (error) {
//       setErrorMessage("Error al subir resultados");
//     }
//   };

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleYearChange = (event) => {
//     setYear(event.target.value);
//   };

//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//   };

//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//   };

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleWeightChange = (event) => {
//     setWeight(event.target.value);
//   };

//   const handleNameCompChange = (event) => {
//     setNameComp(event.target.value);
//   };
//   const handleChange = (event) => {
//     setClub(event.target.value);
//   };
  
//   const handleClubChange = (event) => {
//     setClub(event.target.value);
//   };
  

//   const handleAddResult = (event) => {
//     event.preventDefault();
//     setResults((prevResults) => [
//       ...prevResults,
//       {
//         weight,
//         position: prevResults.length + 1, // Corregir posición de los resultados
//         name: nameComp,
//         club,
//       },
//     ]);
//     // Limpiar los campos después de agregar un resultado
//     setNameComp("");
//     setClub("");
//   };

//   const handleRemoveResult = (index) => {
//     setResults((prevResults) => {
//       const newResults = [...prevResults];
//       newResults.splice(index, 1);
//       return newResults;
//     });
//   };

//   const handleSubmitResults = async (event) => {
//     event.preventDefault();

//     const data = {
//       name,
//       location,
//       gender,
//       category,
//       year,
//       results,
//     };

//     submitData(data);
//   };

//   return (
//     <div className="container">
//       <h1>Create Results</h1>
//       {successMessage && <p className="alert alert-success">{successMessage}</p>}
//       {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
//       <form onSubmit={handleSubmitResults}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={name}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="location">Location:</label> 
//           <input
//             type="text"
//             className="form-control"
//             id="location"
//             value={location}
//             onChange={handleLocationChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender">Gender:</label>
//           <select
//             className="form-control"
//             id="gender"
//             value={gender}
//             onChange={handleGenderChange}
//           >
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="category">Category:</label>
//           <select
//             className="form-control"
//             id="category"
//             value={category}
//             onChange={handleCategoryChange}
//           >
//             <option value="senior">Senior</option>
//             <option value="junior">Junior</option>
//             <option value="youth">Youth</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="year">Year:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="year"
//             value={year}
//             onChange={handleYearChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="weight">Weight:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="weight"
//             value={weight}
//             onChange={handleWeightChange}
//           />
//         </div>
//         <hr />
//         <h3>Results:</h3>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Position</th>
//               <th>Name</th>
//               <th>Club</th>
//               <th>Weight</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {results.map((result, index) => (
//               <tr key={uuidv4()}>
//                 <td>{result.position}</td>
//                 <td>{result.name}</td>
//                 <td>{result.club}</td>
//                 <td>{result.weight}</td>
//                 <td>
//                   <button
//                     type="button"
//                     className="btn btn-danger"
//                     onClick={() => handleRemoveResult(index)}
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="form-group">
//           <label htmlFor="nameComp">Name:</label> 
//           {/* <input
//             type="text"
//             className="form-control"
//             id="nameComp"
//             value={nameComp}
//             onChange={handleNameCompChange}
//           /> */}
//         </div>
//         <button onClick={handleAddResult}>Add Result</button>
//         <div className="form-group">
//           <label htmlFor="club">Club:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="club"
//             value={club } onChange={handleChange}
//             />
//           </div>
//           <button onClick={handleAddResult}>Add Result</button>
//           <button type="submit" className="btn btn-primary">
//             Enviar
//           </button>
//         </form>
//         </div>
//       );
//     };
    
//     export default CreateResults;
