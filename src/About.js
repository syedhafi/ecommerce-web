// import Herosection from "./components/Herosection";
// const About = () => {
//   const data = {
//     name: "Hafi Store",
//   };

//   return <Herosection myData={data} />;
// };

// export default About;np

import { useProductContext } from "./context/Productcontext";
const About = () => {
  const { myName } = useProductContext();
  return <>{myName}</>;
};

export default About;
