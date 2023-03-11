import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DishDetailsScreen from "../screens/DishDetailsScreen";
import OrderScreen from "../screens/OrderScreen";
import RestaurantDetailsScreen from "../screens/RestaurantItem/RestaurantDetailsScreen";
// import OrderDetails from "../screens/OrderDetails";
// import BasketScreen from "../screens/BasketScreen";

import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "black" }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="receipt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen name="Restaurant" component={RestaurantDetailsScreen} />
      <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
    </HomeStack.Navigator>
  );
};
export default RootNavigator;
