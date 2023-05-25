import { FlatList, View } from "react-native";

import { CATEGORIES } from "../../data/categories";
import CategoriesItem from "../../components/CategoriesItem";
import React from "react";

import styles from "./styles";

const CategoriesScreen = ({ navigation }) => {
  const handleSelectedCategory = item => {
    navigation.navigate("Bread", {
      categoryId: item.id,
      name: item.title,
    });
  };

  const renderCategoriesItem = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategory} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoriesItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CategoriesScreen;