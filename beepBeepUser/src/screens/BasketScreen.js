import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import restaurants from "../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";

const restaurant = restaurants[0];

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.itemName}>{basketDish.name}</Text>
      <Text style={styles.price}>${basketDish.price}</Text>
    </View>
  );
};

const BasketScreen = ({}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>

      <Text style={{ fontWeight: "bold", marginTop: 20, fontSize: 19 }}>
        Your Items
      </Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40,
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "gray",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  itemName: {
    fontWeight: "600",
  },
  price: {
    marginLeft: "auto",
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
});

export default BasketScreen;
