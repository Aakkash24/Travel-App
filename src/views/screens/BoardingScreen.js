import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../../consts/colors";
import { StatusBar } from "expo-status-bar";

const BoardingScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={require("../../assets/onboardImage.jpg")}
      ></ImageBackground>
      <View
        style={{
          height: "50%",
          bottom: 0,
          position: "absolute",
          paddingHorizontal: 40,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: 35,
            fontWeight: "bold",
          }}
        >
          Discover
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 35,
            fontWeight: "bold",
          }}
        >
          world with us
        </Text>
        <Text
          style={{
            color: COLORS.white,
            lineHeight: 25,
            marginTop: 15,
            fontSize: 18,
            fontWeight: "400",
          }}
        >
          Client in attained hungrier from and the to before their of for
          grateful keep the feel parents
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <View
            style={{
              height: 50,
              width: 120,
              backgroundColor: COLORS.white,
              borderRadius: 7,
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BoardingScreen;
