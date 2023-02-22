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

import React, { useEffect, useState } from "react";
import { ResultsService } from "../../_services/ResultsService";
import "./JudoList.scss";

import Judo from "../../components/Judo/Judo";

export default function JudoList() {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    getAllCompetitions();
  }, []);

  const getAllCompetitions = async () => {
    try {
      const res = await ResultsService.getAllCompetitions();
      setCompetitions(res.data);
    } catch (error) {
      console.log(error.message || error);
    }
  };
  
  return (
    <div className="competition-list">
        <div>
            <h1>Resultados de las competiciones</h1>
        </div>
      <div className="container pt-5 pb-5">
        <h1 className="h1  mb-5 "></h1>

        <div className="d-flex flex-wrap justify-content-center gap-5">
          {competitions.map((competition) => (
            <Judo key={competition._id} competition={competition} />
          ))}
        </div>
      </div>
    </div>
  );
}


