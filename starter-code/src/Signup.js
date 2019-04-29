import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

class Signup extends Component {
  render() {
    const signupContainer = (
      <div>
        <Navbar />

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="e.g. not 123" />

        <CoolButton isSmall isSuccess>
          Submit
        </CoolButton>
      </div>
    );
    return signupContainer;
  }
}

export default Signup;
