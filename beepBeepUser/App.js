import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import BasketScreen from "./src/screens/BasketScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
import OrderScreen from "./src/screens/OrderScreen";
import RestaurantDetailsScreen from "./src/screens/RestaurantItem/RestaurantDetailsScreen";
import OrderDetails from "./src/screens/OrderDetails";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      {/* <DishDetailsScreen /> */}
      {/* <BasketScreen /> */}
      {/* <OrderScreen /> */}
      <OrderDetails />
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
