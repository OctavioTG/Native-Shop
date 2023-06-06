import { FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import CategoriesItem from "../../components/CategoriesItem";
import React from "react";
import { selectedCategory } from "../../store/actions/category.action";

import styles from "./styles";

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = item => {
    dispatch(selectedCategory(item.id));
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
        data={categories}
        renderItem={renderCategoriesItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CategoriesScreen;