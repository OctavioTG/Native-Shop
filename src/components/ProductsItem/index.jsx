import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import styles from "./styles";

const ProductsItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onSelected(item)}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.recetasdepan.net/wp-content/uploads/2019/05/Receta-de-pan-baguette.jpg",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={[styles.text, {fontWeight: "normal"}]}>{item.description}</Text>
        <Text style={styles.text}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsItem;
