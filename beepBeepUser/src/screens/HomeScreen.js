import { FlatList, StyleSheet, View } from "react-native";
import restaurants from "../../assets/data/restaurants.json";
import RestaurantItem from "../components/RestaurantItem.js";

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
