import axios from "axios";
import { environment } from "../_environment/environment";

export const ResultsService = {};

ResultsService.getAllCompetitions = async () => {
    try{
      const req = `${environment.BASE_API_URL}/results`;
      const res = await axios.get(req);
      if (!res.data) {
        throw new Error("No se encontraron resultados");
      }
      return res.data;
    } catch (error) {
      console.log("Error al acceder a la información del API");
      throw error;
    }
  };
  //  ResultsService.searchCompetition  = async (name, year, gender, category) => {
  //   console.log("Valores de los parámetros: ", name, year, gender, category);
  //   try {
  //     const req = `http://localhost:3000/results/buscar/search?name=${name}&year=${year}&gender=${gender}&category=${category}`;
  //     console.log("URL de la API: ", req);
  //     const res = await axios.get(req);
  //     if (res.status !== 200) {
  //       console.error("Error al acceder a la información del API");
  //       throw new Error("Error al acceder a la información del API");
  //     }
  //     console.log("Datos de la competición: ", res.data);
  //     return res.data;
  //   } catch (error) {
  //     console.error("Error al acceder a la información del API");
  //     throw error;
  //   }
  // };
  
  
  ResultsService.searchCompetition = async (competition) => {
    try {
      let queryParams = "";
      if (competition.name) {
        queryParams += `name=${competition.name}&`;
      }
      if (competition.year) {
        queryParams += `year=${competition.year}&`;
      }
      if (competition.gender) {
        queryParams += `gender=${competition.gender}&`;
      }
      if (competition.category) {
        queryParams += `category=${competition.category}&`;
      }
      if (competition.weight) {
        queryParams += `weight=${competition.weight}&`;
      }
      queryParams = queryParams.slice(0, -1);
  
      const req = `${environment.BASE_API_URL}/results/buscar/search?${queryParams}`;
      console.log("URL de la API: ", req); // agregado
      const res = await axios.get(req);
      if (res.status !== 200) {
        console.log("Mensaje de error: ", res.data.message);
        throw new Error(res.data.message);
      }
      return res.data.data;
    } catch (error) {
      console.log("Error al acceder a la información del API");
      throw error;
    }
  };
  
  

ResultsService.getCompetitionByName = async (name) => {
    try {
        const req = `${environment.BASE_API_URL}/results/nombre/${name}`;
        const res = await axios.get(req);
        console.log(res.data);
        if (!res.data) {
            throw new Error("Competition not found");
        }
        return res.data;
    } catch (error) {
        console.log("Error accessing API information");
        throw error;
    }
};

ResultsService.getSingleCompe = async (id) => {
  const apiUrl = `${environment.BASE_API_URL}/results/${id}`;
  // const res = await axios.get(apiUrl);
  // console.log(res);

  return await axios.get(apiUrl);

  
};

ResultsService.createCompetition = async (data) => {
  try {
    let url;

    if (data.gender === "male") {
      
      url = `${environment.BASE_API_URL}/results/men`;
    } else {
      url = `${environment.BASE_API_URL}/resultgirls/girl`;
    }

    const res = await axios.post(url, data);
    const savedCompetition = res.data;

    return savedCompetition;
  } catch (error) {
    console.log("Error creating competition");
    throw error;
  }
};

ResultsService.createCompetitors = async (competitionId,data) => {
  console.log("competitionId", competitionId);
       console.log("data", data);
  try {
    let url;

    if (data.gender === "male") {
      
      url = `${environment.BASE_API_URL}/results/${competitionId}`;
      
    } else {
      url = `${environment.BASE_API_URL}/results/${competitionId}`;
    }

    const res = await axios.post(url, data);
    console.log("POST response:", res);

    const savedCompetitor = res.data;

    return savedCompetitor;
  } catch (error) {
    console.log("Error creating competition");
    throw error;
  }
};



// ResultsService.updateCompetition = async (id, competitionData, isMenCompetition) => {
//   try {
//     const Controller = isMenCompetition ? CompetitionMenController : CompetitionGirlController;
//     const competition = await Controller.update({ params: { id }, body: competitionData });
//     if (!competition) {
//       throw new Error("Competition not found");
//     }
//     return competition;
//   } catch (error) {
//     console.log("Error updating competition");
//     throw error;
//   }
// };

// ResultsService.updateCompetition = async (id, data) => {
//   try {
//     const req = `${environment.BASE_API_URL}/resultgirls/${id}`;
//     const res = await axios.patch(req, data);
//     if (!res.data.success) {
//       throw new Error(res.data.message);
//     }
//     return res.data;
//   } catch (error) {
//     console.log("Error accessing API information");
//     throw error;
//   }
// };

ResultsService.updateCompetition = async (competitionId, competitionData) => {
  try {
    console.log("competitionId", competitionId);
  console.log("competitionData:", competitionData);
    const req = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
    const res = await axios.patch(req, competitionData);
    console.log("PATCH response:", res);
    if (!res.data.success) {
      throw new Error(res.data.message);
    }
    return res.data;
  } catch (error) {
    console.log("Error accessing API information");
    throw error;
  }
};

//aquest de sota es el bo

// ResultsService.updateCompetition = async (competitionId, competitionData) => {
//   try {
//     console.log("competitionId", competitionId);
//     console.log("competitionData:", competitionData);
//     const reqFromService = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     const res = await axios.patch(reqFromService, { results: competitionData });
//     console.log("PATCH response:", res); 
//     if (!res.data.success) {
//       throw new Error(res.data.message);
//     }
//     return res.data;
//   } catch (error) {
//     console.log("Error accessing API information");
//     throw error;
//   }
// }; 

// ResultsService.updateCompetition = async (competitionId, competitionData) => {
//   try {
//     const reqForResults = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     const existingResultsRes = await axios.get(reqForResults);
//     if (!existingResultsRes.data.success) {
//       throw new Error(existingResultsRes.data.message);
//     }
//     const existingResults = existingResultsRes.data.data.results;
//     const mergedResults = { ...existingResults, ...competitionData };
//     console.log("competitionData:", competitionData);
//     console.log("existingResults:", existingResults);
//     const reqFromService = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     const data1 = { results: mergedResults };
//     console.log("mergedResults:", mergedResults);
//     const res = await axios.patch(reqFromService, data1);
//     // const res = await axios.patch(reqFromService, { results: competitionData });
//     console.log("PATCH response:", res); 
//     if (!res.data.success) {
//       throw new Error(res.data.message);
//     }
//     return res.data;
//   } catch (error) {
//     console.log("Error accessing API information");
//     throw error;
//   }
// }; 

// ResultsService.updateCompetition = async (competitionId, competitionData) => {
//   try {
//     const reqForResults = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     const existingResultsRes = await axios.get(reqForResults);
//     if (!existingResultsRes.data.success) {
//       throw new Error(existingResultsRes.data.message);
//     }
//     const existingResults = existingResultsRes.data.data.results;
//     const updatedResults = Object.assign({}, existingResults, competitionData); // combina las dos estructuras de datos
//     console.log("competitionData:", competitionData);
//     console.log("existingResults:", existingResults);
//     const reqFromService = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     const data1 = { results: updatedResults };
//     console.log("updatedResults:", updatedResults);
//     const res = await axios.patch(reqFromService, data1);
//     console.log("PATCH response:", res); 
//     if (!res.data.success) {
//       throw new Error(res.data.message);
//     }
//     return res.data;
//   } catch (error) {
//     console.log("Error accessing API information");
//     throw error;
//   }
// };


// ResultsService.updateCompetition = async (competitionId, competitionData) => {
//   try {
//     const reqForResults = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     const existingResultsRes = await axios.get(reqForResults);
//     if (!existingResultsRes.data.success) {
//       throw new Error(existingResultsRes.data.message);
//     }
//     const existingResults = existingResultsRes.data.data.results;
   
//     console.log("existingResults:", existingResults);
//     const mergedResults = { ...existingResults, ...competitionData };
//     console.log("competitionData:", competitionData);
//     console.log("existingResults:", existingResults);
//     const reqForPatch = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     const data = { results: mergedResults };
//     const res = await axios.patch(reqForPatch, data);
//     console.log("PATCH response:", res); 
//     if (!res.data.success) {
//       throw new Error(res.data.message);
//     }
//     return res.data;
//   } catch (error) {
//     console.log("Error accessing API information");
//     throw error;
//   }
// };


// aquest es bo no fa servir form

//  ResultsService.updateCompetition = async (competitionId, competitionData) =>{
//   console.log("competitionId", competitionId);
//      console.log("competitionData:", competitionData);
  
//     try {
//       const req = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//       const res = await axios.patch(req, { results: competitionData });

//       console.log("PATCH response:",res);
//       if (!res.data) {
//         throw new Error("No se encontró la competición");
//       }
//       return res.data;
//     } catch (error) {
//       console.log("Error al actualizar la competición");
//       throw error;
//     }
//   };





// ResultsService.updateCompetition = async (competitionId, competitionData) => {
//   console.log("competitionData:", competitionData);
//   try {
//     const reqFromService = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     console.log("reqFromService:", reqFromService); // Agregamos esta línea de registro
//     const res = await axios.patch(reqFromService, competitionData);
//     console.log("PATCH response:", res); 
//     if (!res.data.success) {
//       throw new Error(res.data.message);
//     }
//     return res.data;
//   } catch (error) {
//     console.log("Error accessing API information");
//     throw error;
//   }
// };


// aquest tambe es bo a sota

// ResultsService.updateCompetition = async (competitionId, competitionData) => {
//   console.log("competitionData:", competitionData);
//   try {
//     const reqFromService = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     console.log("reqFromService:", reqFromService); // Agregamos esta línea de registro
//     const data = { results: competitionData };
//     const res = await axios.patch(reqFromService, data);
//     console.log("PATCH response:", res); 
//     if (!res.data.success) {
//       throw new Error(res.data.message);
//     }
//     return res.data;
//   } catch (error) {
//     console.log("Error accessing API information");
//     throw error;
//   }
// };

// ResultsService.updateCompetition = async (competitionId, competitionData) => {
//   console.log("competitionData:", competitionData);
//   try {
//     const reqFromService = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     console.log("reqFromService:", reqFromService); // Agregamos esta línea de registro
//     const res = await axios.patch(reqFromService, { results: competitionData });
//     console.log("PATCH response:", res); 
//     if (!res.data.success) {
//       throw new Error(res.data.message);
//     }
//     return res.data;
//   } catch (error) {
//     console.log("Error accessing API information");
//     throw error;
//   }
// };





// ResultsService.updateCompetition = async (competitionId, competitionData) => {
//   console.log("competitionData antes de la verificación FormData:", competitionData);
//   if (competitionData instanceof FormData) {
//     console.log('competitionData es un objeto FormData:', competitionData);
//     throw new Error("No se permite FormData en la entrada.");
//   } else {
//     try {
//       console.log("competitionId", competitionId);
//       console.log("competitionData:", competitionData);
//       const reqFromService = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//       const res = await axios.post(reqFromService, { results: competitionData });
//       console.log("PATCH response:", res); 
//       if (!res.data.success) {
//         throw new Error(res.data.message);
//       }
//       return res.data;
//     } catch (error) {
//       console.log("Error accessing API information");
//       throw error;
//     }
//   }
// };


// ResultsService.updateCompetition = async (competitionId, competitionData) => {
//   try {
//     console.log("competitionId", competitionId);
//     console.log("competitionData:", competitionData);
//     const reqFromService = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     delete axiosConfig.env;

//     const res = await axios.patch(reqFromService, { results: competitionData }, { headers: { 'Content-Type': 'application/json' } });
//     console.log("PATCH response:", res);
//     if (!res.data.success) {
//       throw new Error(res.data.message);
//     }
//     return res.data;
//   } catch (error) {
//     console.log("Error accessing API information");
//     throw error;
//   }
// };



// ResultsService.updateCompetition = async (competitionId, competitionData) => {
//   console.log("competitionData:", competitionData);
//   try {
//     const reqFromService = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     console.log("reqFromService:", reqFromService); // Agregamos esta línea de registro
    
//     const existingResults = await CompetitionGirl.findById(competitionId).select('results');
//     const data = { results: { ...existingResults.results, ...competitionData } };
    
//     const res = await axios.patch(reqFromService, data);
//     console.log("PATCH response:", res); 
//     if (!res.data.success) {
//       throw new Error(res.data.message);
//     }
//     return res.data;
//   } catch (error) {
//     console.log("Error accessing API information");
//     throw error;
//   }
// };

// ResultsService.updateCompetition = async (competitionId, competitionData) =>{
  //   console.log("competitionId", competitionId);
  //      console.log("competitionData:", competitionData);
    
  //     try {
  //       const req = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
  //       const res = await axios.patch(req, { results: competitionData });
  
  //       console.log("PATCH response:",res);
  //       if (!res.data) {
  //         throw new Error("No se encontró la competición");
  //       }
  //       return res.data;
  //     } catch (error) {
  //       console.log("Error al actualizar la competición");
  //       throw error;
  //     }
  //   };


  // ResultsService.updateCompetition = async (competitionId, competitionData) => {
  //   console.log("competitionData:", competitionData);
  //   try {
  //     const reqForResults = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
  //     const existingResultsRes = await axios.get(reqForResults);
  //     console.log("existingResultsRes:", existingResultsRes);
  //     if (!existingResultsRes.data.success) {
  //       throw new Error(existingResultsRes.data.message);
  //     }
  //     const existingResults = existingResultsRes.data.data;
  //     const reqForPatch = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
  //     const data = { results: Object.assign(existingResults, competitionData) };
  //     console.log("competitionData:", competitionData);
  //     console.log("existingResults:", existingResults);
  //     const res = await axios.patch(reqForPatch, data);
  //     console.log("PATCH response:", res);
  //     if (!res.data.success) {
  //       throw new Error(res.data.message);
  //     }
  //     return res.data;
  //   } catch (error) {
  //     console.log("Error accessing API information");
  //     throw error;
  //   }
  // };
  

  // ResultsService.updateCompetition = async (competitionId) => {
  //   try {
  //     const reqForResults = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
  //     const existingResultsRes = await axios.get(reqForResults);
  //     if (!existingResultsRes.data.success) {
  //       throw new Error(existingResultsRes.data.message);
  //     }
  //     const existingResults = existingResultsRes.data.data;
  //     const reqForPatch = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
  //     const data = { results: existingResults };
  //     const res = await axios.patch(reqForPatch, data);
  //     if (!res.data.success) {
  //       throw new Error(res.data.message);
  //     }
  //     return res.data;
  //   } catch (error) {
  //     console.log("Error accessing API information");
  //     throw error;
  //   }
  // };

//    ResultsService.updateCompetition = async (competitionId, competitionData) => {
//   try {
//     const reqFromService = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     console.log("reqFromService:", reqFromService); // Agregamos esta línea de registro
//     const res = await axios.patch(reqFromService, competitionData);
//     console.log("PATCH response:", res); 
//     if (!res.data.success) {
//       throw new Error(res.data.message);
//     }
//     return res.data;
//   } catch (error) {
//     console.log("Error accessing API information");
//     throw error;
//   }
// };





// ResultsService.updateCompetition = async (competitionId, competitionData) => {
//   try {
//     const reqForResults = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     const existingResultsRes = await axios.get(reqForResults);
//     if (!existingResultsRes.data.success) {
//       throw new Error(existingResultsRes.data.message);
//     }
//     const existingResults = existingResultsRes.data.data.results;
//     const updatedResults = [...existingResults];
    
//     // Loop over competitionData to add/update results
//     competitionData.forEach(newResult => {
//       const existingResult = existingResults.find(result => areResultsEqual(result, newResult));
//       if (existingResult) {
//         // Update existing result
//         existingResult.position = newResult.position;
//         existingResult.weight = newResult.weight;
//       } else {
//         // Add new result to updatedResults
//         updatedResults.push(newResult);
//       }
//     });
    
//     // Remove duplicates from updatedResults
//     const uniqueResults = [];
//     updatedResults.forEach(result => {
//       const existingResult = uniqueResults.find(r => areResultsEqual(r, result));
//       if (!existingResult) {
//         uniqueResults.push(result);
//       }
//     });
    
//     const reqFromService = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
//     const data1 = { results: uniqueResults };
//     console.log("uniqueResults:", uniqueResults);
//     const res = await axios.patch(reqFromService, data1);
//     if (!res.data.success) {
//       throw new Error(res.data.message);
//     }
//     return res.data;
//   } catch (error) {
//     console.log("Error accessing API information");
//     throw error;
//   }
// };

// // Helper function to compare two results
// function areResultsEqual(result1, result2) {
//   return result1.name === result2.name &&
//          result1.club === result2.club &&
//          result1.weight === result2.weight;
// }


  
  

