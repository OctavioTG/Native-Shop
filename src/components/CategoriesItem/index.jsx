import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import styles from "./styles";

const CategoriesItem = ({ item, onSelected }) => {
  return (
    <View style={[styles.categoriesItem, { backgroundColor: item.color }]}>
      <TouchableOpacity style={styles.container}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.textContainer}>{item.title}</Text>
        </View>
        <View>
          <Image style={styles.image} source={{ uri: item.img }} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesItem;
