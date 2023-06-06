import { FlatList, View } from "react-native";
import { filteredProduct, selectedProduct } from "../../store/actions/products.action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ProductsItem from "../../components/ProductsItem";

import styles from "./styles";

const ProductsScreen = ({ navigation, route }) => {
  const filteredProducts = useSelector(state => state.products.filteredProduct);
  const categorySelected = useSelector(state => state.categories.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filteredProduct(categorySelected.id));
  }, []);

  const handleSelectedProduct = item => {
    dispatch(selectedProduct(item.id));
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
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ProductsScreen;