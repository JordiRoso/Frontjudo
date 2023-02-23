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

ResultsService.getSingleCompe = async (_id) => {
  const apiUrl = `${environment.BASE_API_URL}/results/${_id}`;
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

// ResultsService.createCompetitors = async (competitionId,data) => {
//   console.log("competitionId", competitionId);
//        console.log("data", data);
//   try {
//     let url;

//     if (data.gender === "male") {
      
//       url = `${environment.BASE_API_URL}/results/${competitionId}`;
      
//     } else {
//       url = `${environment.BASE_API_URL}/results/${competitionId}`;
//     }

//     const res = await axios.post(url, data);
//     console.log("POST response:", res);

//     const savedCompetitor = res.data;

//     return savedCompetitor;
//   } catch (error) {
//     console.log("Error creating competition");
//     throw error;
//   }
// };





//aquest de sota es el bo

ResultsService.updateCompetition = async (competitionId, competitionData) => {
  try {
    console.log("competitionId", competitionId);
    console.log("competitionData:", competitionData);
    const reqFromService = `${environment.BASE_API_URL}/resultgirls/${competitionId}`;
    const res = await axios.patch(reqFromService, { results: competitionData });
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















ResultsService.updateResult = async (resultId, updatedResultData) => {
  try {
    const req = `${environment.BASE_API_URL}/resultgirls/result/${resultId}`;
    const res = await axios.patch(req, updatedResultData);
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


  
  

