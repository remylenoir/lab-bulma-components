import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Signup from "./Signup";

// class App extends Component {
//   render() {
//     const mainContainer = (
//       <div className="app-container">
//         <Navbar />

//         <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
//         <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

//         <CoolButton isSmall isDanger className="is-rounded my-class">
//           Button 1
//         </CoolButton>
//         <CoolButton isSmall isSuccess>
//           Button 2
//         </CoolButton>

//         <Signup />
//       </div>
//     );
//     return mainContainer;
//   }
// }

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>

      <Signup />
    </div>
  );
};

export default App;
