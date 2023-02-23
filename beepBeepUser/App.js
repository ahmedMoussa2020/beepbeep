import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import BasketScreen from "./src/screens/BasketScreen";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantItem/RestaurantDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      {/* <DishDetailsScreen /> */}
      <BasketScreen />

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
  },
});
