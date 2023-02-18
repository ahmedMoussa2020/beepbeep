import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import restaurants from "./assets/data/restaurants.json";
import RestaurantItem from "./src/components/RestaurantItem";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <RestaurantItem restaurant={restaurants[0]} />
      <RestaurantItem restaurant={restaurants[1]} />
      <RestaurantItem restaurant={restaurants[2]} />
      <RestaurantItem restaurant={restaurants[3]} /> */}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
