import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInputComponent,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import places from "../../consts/places";

const { width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const categoryIcons = [
    <Icon name="flight" size={25} color={COLORS.primary} />,
    <Icon name="beach-access" size={25} color={COLORS.primary} />,
    <Icon name="near-me" size={25} color={COLORS.primary} />,
    <Icon name="place" size={25} color={COLORS.primary} />,
  ];

  const ListCategories = () => {
    return (
      <View
        style={{
          marginTop: 60,
          marginHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {categoryIcons.map((icon, index) => (
          <TouchableOpacity>
            <View
              key={index}
              style={{
                height: 60,
                width: 60,
                backgroundColor: COLORS.secondary,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
              }}
            >
              {icon}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ place }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate("DetailsScreen", place)}
      >
        <ImageBackground
          style={{
            height: 220,
            width: width / 2,
            marginRight: 20,
            padding: 10,
            overflow: "hidden",
            borderRadius: 15,
          }}
          source={place.image}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {place.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Icon
                name="place"
                style={{
                  fontSize: 20,
                  color: COLORS.white,
                }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  color: COLORS.white,
                  fontSize: 16,
                }}
              >
                {place.location}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Icon
                name="star"
                style={{
                  fontSize: 20,
                  color: COLORS.white,
                }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  color: COLORS.white,
                  fontSize: 16,
                }}
              >
                {place.star}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const RecommendedCard = ({ place }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate("DetailsScreen", place)}
      >
        <ImageBackground
          style={{
            width: width - 40,
            height: 200,
            marginRight: 20,
            borderRadius: 12,
            overflow: "hidden",
            padding: 10,
          }}
          source={place.image}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 22,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {place.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                width: "100%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Icon
                  name="place"
                  style={{ fontSize: 22, color: COLORS.white }}
                />
                <Text
                  style={{ color: COLORS.white, marginLeft: 5, fontSize: 18 }}
                >
                  {place.location}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 13,
              }}
            >
              {place.details}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: COLORS.primary,
        }}
      >
        <TouchableOpacity>
          <Icon
            name="sort"
            style={{
              fontSize: 28,
              color: COLORS.white,
              padding: 5,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <IonIcon
            name="notifications-outline"
            style={{
              fontSize: 28,
              color: COLORS.white,
              padding: 5,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 20,
          }}
        >
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Explore the
            </Text>
            <Text
              style={{
                color: COLORS.white,
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Beautiful Places
            </Text>
            <View
              style={{
                height: 60,
                width: "100%",
                backgroundColor: COLORS.white,
                borderRadius: 10,
                position: "absolute",
                top: 90,
                flexDirection: "row",
                paddingHorizontal: 20,
                alignItems: "center",
                elevation: 15,
              }}
            >
              <Icon name="search" size={25} />
              <TextInput
                placeholder="Search place"
                style={{
                  color: COLORS.grey,
                  opacity: 0.5,
                  paddingLeft: 8,
                  fontSize: 15,
                }}
              />
            </View>
          </View>
        </View>
        <ListCategories />
        <Text
          style={{
            marginHorizontal: 20,
            marginVertical: 20,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Places
        </Text>
        <View>
          <FlatList
            data={places}
            renderItem={({ item }) => <Card place={item} />}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{ paddingLeft: 20 }}
          />
        </View>
        <Text
          style={{
            marginHorizontal: 20,
            marginVertical: 20,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Recommended
        </Text>
        <FlatList
          snapToInterval={width - 20}
          contentContainerStyle={{
            paddingLeft: 20,
            paddingBottom: 20,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={places}
          renderItem={({ item }) => <RecommendedCard place={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
