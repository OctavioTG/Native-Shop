import { FlatList, View } from "react-native";

import { PRODUCTS } from "../../data/products";
import ProductsItem from "../../components/ProductsItem";
import React from "react";

import styles from "./styles";

const ProductsScreen = ({ navigation, route }) => {
  const breads = PRODUCTS.filter(
    bread => bread.category === route.params.categoryId
  );

  const handleSelectedProduct = item => {
    navigation.navigate("Detail", {
      product: item,
      name: item.name,
    });
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <ProductsItem item={item} onSelected={handleSelectedProduct} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={breads}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ProductsScreen;