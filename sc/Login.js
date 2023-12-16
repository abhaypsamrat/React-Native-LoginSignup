import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Background from "./Background";
import { darkGreen } from "./Constants";
import InputField from "./InputField";
import Btn from "./Btn";

const Login = (props) => {
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
          Login
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 400,
            borderTopLeftRadius: 150,
            paddingTop: 80,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, color: darkGreen, fontWeight: "bold" }}>
            Welcome Back
          </Text>
          <Text>Login to your account</Text>
          <InputField placeholder="Email/Username" />
          <InputField placeholder="Password" secureTextEntry={true} />
          <View style={{ alignItems: "flex-end", width: "55%" }}>
            <Text
              style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
            >
              Forget Password?
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={() => props.navigation.navigate("Main")}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
