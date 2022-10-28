import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import places from "../../consts/places";

const DetailsScreen = ({ navigation, route }) => {
  const place = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{ flex: 0.7 }} source={place.image}>
        <View
          style={{
            marginTop: 60,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <Icon
            name="arrow-back-ios"
            style={{
              color: COLORS.white,
              fontSize: 28,
            }}
            onPress={() => navigation.goBack()}
          />
          <Icon
            name="more-vert"
            style={{
              color: COLORS.white,
              fontSize: 28,
            }}
          />
        </View>
        <View
          style={{
            padding: 20,
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            position: "absolute",
            bottom: 30,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              width: "70%",
              fontSize: 30,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            {place.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Icon
              name="star"
              style={{
                fontSize: 30,
                color: COLORS.orange,
              }}
            />
            <Text
              style={{ color: COLORS.white, fontWeight: "bold", fontSize: 20 }}
            >
              {place.star}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          top: -30,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: COLORS.white,
          paddingVertical: 40,
          paddingHorizontal: 20,
          flex: 0.3,
        }}
      >
        <View
          style={{
            height: 60,
            width: 60,
            position: "absolute",
            top: -30,
            backgroundColor: COLORS.white,
            borderRadius: 30,
            right: 20,
            elevation: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Icon
              name="favorite"
              style={{
                color: COLORS.red,
                fontSize: 27,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Icon name="place" style={{ color: COLORS.primary, fontSize: 28 }} />
          <Text
            style={{
              fontSize: 20,
              marginLeft: 5,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            {place.location}
          </Text>
        </View>
        <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 20 }}>
          About the trip
        </Text>
        <Text style={{ marginTop: 20, lineHeight: 22 }}>{place.details}</Text>
      </View>
      <View
        style={{
          backgroundColor: COLORS.primary,
          flexDirection: "row",
          height: 70,
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", color: COLORS.white }}
          >
            {place.price}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: COLORS.grey,
              marginLeft: 2,
            }}
          >
            /PER DAY
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: COLORS.white,
              height: 50,
              width: 150,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Book Now
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
