// import React, { useEffect, useState } from "react";
// import { ResultsService} from "../../_services/ResultsService";
// import "./JudoList.scss";

// import Judo from "../../components/Judo/Judo";

// export default function JudoList() {
//   const [competition, setCompetitions] = useState({});

//   useEffect(() => {
//     getAllCompetitions();
//   }, []);

//   const getAllCompetitions = async () => {
//     try {
//       const res = await ResultsService.getAllCompetitions();
//       let groupedCompetitions = res.data.reduce((acc, competition) => {
//         if (!acc[competition.weight]) {
//           acc[competition.weight] = [];
//         }
//         acc[competition.weight].push(competition);
//         return acc;
//       }, {});
//       setCompetitions(groupedCompetitions);
//     } catch (error) {
//       console.log(error.message || error);
//     }
//   };
//   // const getAllCompetitions = async () => {
//   //   try {
//   //       const res = await ResultsService.getAllCompetitions();
//   //       setCompetitions(res.data);
//   //   } catch (error) {
//   //       console.log(error.message || error);
//   //   }
// // };
  
//   return (
//     <div className="competition-list">
//         <div>
//             <h1>Resultados de las competiciones</h1>
//         </div>
//       <div className="container pt-5 pb-5">
//         <h1 className="h1  mb-5 "></h1>

//         {Object.keys(competition).map((weight) => (
//           <div className="mb-5">
            
            
//             <div className="d-flex flex-wrap justify-content-center gap-5">
//               {competition[weight].map((competition) => (
//                 <Judo key={competition.id} competition={competition} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// aquest de sota es el bootstrap, sense filtres

// import React, { useEffect, useState } from "react";
// import { ResultsService } from "../../_services/ResultsService";
// import "./JudoList.scss";

// import Judo from "../../components/Judo/Judo";

// export default function JudoList() {
//   const [competitions, setCompetitions] = useState([]);

//   useEffect(() => {
//     getAllCompetitions();
//   }, []);

//   const getAllCompetitions = async () => {
//     try {
//       const res = await ResultsService.getAllCompetitions();
//       setCompetitions(res.data);
//     } catch (error) {
//       console.log(error.message || error);
//     }
//   };
  
//   return (
//     <div className="competition-list">
//         <div>
//             <h1>Resultados de las competiciones</h1>
//         </div>
//       <div className="container pt-5 pb-5">
//         <h1 className="h1  mb-5 "></h1>

//         <div className="d-flex flex-wrap justify-content-center gap-5">
//           {competitions.map((competition) => (
//             <Judo key={competition._id} competition={competition} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { ResultsService } from "../../_services/ResultsService";
import "./JudoList.scss";

import Judo from "../../components/Judo/Judo";
import JudoFilter from "../../components/JudoFilter/JudoFilter";

export default function JudoList() {
  const [competitions, setCompetitions] = useState([]);
  const [filter, setFilter] = useState({ gender: "", category: "", year: "" }); // inicializar estado del filtro

  useEffect(() => {
    getAllCompetitions();
  }, [filter]); // actualizar la lista de competiciones cada vez que cambie el filtro

  const getAllCompetitions = async () => {
    try {
      const res = await ResultsService.getAllCompetitions();
      let filteredCompetitions = res.data;

      // aplicar el filtro a la lista de competiciones si se ha seleccionado alguna opción en el filtro
      if (filter.gender !== "") {
        filteredCompetitions = filteredCompetitions.filter(
          (competition) => competition.gender === filter.gender
        );
      }
      if (filter.category !== "") {
        filteredCompetitions = filteredCompetitions.filter(
          (competition) => competition.category === filter.category
        );
      }
      if (filter.year !== "") {
        filteredCompetitions = filteredCompetitions.filter(
          (competition) => competition.year === filter.year
        );
      }

      setCompetitions(filteredCompetitions);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter({ ...filter, ...newFilter });
  };

  // return (
  //   <div className="competition-list">
  //     <div className="text-center">
  //       <h1>Resultados de las competiciones</h1>
  //       <JudoFilter
  //         genderOptions={["male", "female"]}
  //         categoryOptions={["senior", "junior"]}
  //         yearOptions={["2021", "2022"]}
  //         onFilterChange={handleFilterChange}
  //       />
  //     </div>
  //     <div className="container pt-5 pb-5">
  //       <div className="d-flex flex-wrap justify-content-center gap-5">
  //         {competitions.map((competition) => (
  //           <Judo key={competition._id} competition={competition} />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
  
  return (
    <div className="competition-list">
      <div className="title-container text-center">
        <h1>Resultados de las competiciones</h1>
      </div>
      <div className="filter-container text-center">
        <JudoFilter
          genderOptions={["male", "female"]}
          categoryOptions={["senior", "junior"]}
          yearOptions={["2021", "2022"]}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="container pt-5 pb-5 competitions-container" style={{ overflow: 'auto' }}>
        <div className="d-flex flex-wrap justify-content-center gap-5">
          {competitions.map((competition) => (
            <Judo key={competition._id} competition={competition} />
          ))}
        </div>
      </div>
    </div>
  );
  
  
  
}



