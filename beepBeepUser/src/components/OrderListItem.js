import { Image, Text, View } from "react-native";

const OrderListItem = ({ order }) => {
  return (
    <View style={{ flexDirection: "row", margin: 10, alignItems: "center" }}>
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{ width: 75, height: 75, marginRight: 10 }}
      />

      <View style={{ fontWeight: "600", fontSize: 16 }}>
        <Text>{order.Restaurant.name}</Text>
        <Text style={{ marginVertical: 5 }}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </View>
  );
};

export default OrderListItem;
