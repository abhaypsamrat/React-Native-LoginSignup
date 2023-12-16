import { TextInput } from "react-native";
import React from "react";
import { darkGreen } from "./Constants";

const InputField = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: darkGreen,
        paddingHorizontal: 10,
        width: "65%",
        height: 40,
        marginVertical: 10,
        backgroundColor: "rgb(220, 220, 220)",
      }}
      placeholderTextColor={darkGreen}
    ></TextInput>
  );
};

export default InputField;