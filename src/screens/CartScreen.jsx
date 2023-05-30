import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { CART } from "../data/cart";
import CartItem from "../components/CartItem";
import React from "react";

const CartScreen = () => {
  const handleDeleteItem = (id) => {
    console.log(id);
  };

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={CART}
          keyExtractor={(item) => item.id}
          renderItem={renderCartItem}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.confirm}>
          <Text>Confirmar</Text>
          <View>
            <Text style={styles.priceText}>Total: $54</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  confirm: {
    backgroundColor: "grey",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceText: {
    fontSize: 18,
  },
});
