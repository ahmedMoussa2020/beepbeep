import { View, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import HeaderScreen from "./HeaderScreen.js";
import styles from "./styles";
import DishListItems from "../../components/DishListItems";
import restaurants from "../../../assets/data/restaurants.json";
import { useNavigation, useRoute } from "@react-navigation/native";

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params.id;
  console.log(id);
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <HeaderScreen restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItems dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
