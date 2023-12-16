import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Background from "./Background";
import { darkGreen } from "./Constants";
import InputField from "./InputField";
import Btn from "./Btn";

const Signup = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 360 }}>
        <Text
          style={{
            color: "white",
            fontSize: 60,
            fontWeight: "bold",
            marginVertical: 10,
          }}
        >
          Register
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 400,
            borderTopLeftRadius: 150,
            paddingTop: 50,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, color: darkGreen, fontWeight: "bold" }}>
            Welcome !
          </Text>
          <Text>Create a new account</Text>
          <InputField placeholder="First Name" />
          <InputField placeholder="Last Name" />
          <InputField placeholder="Email / Username" />
          <InputField placeholder="Contact Number" keyboardType="numeric"/>
          <InputField placeholder="Password" secureTextEntry={true} />
          <InputField placeholder="Confirm Password" secureTextEntry={true} />
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => alert("Account Created")}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Already have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
