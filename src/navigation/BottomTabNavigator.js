import { StyleSheet, Text, View } from "react-native";

import CartNavigator from "./CartNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import BreadNavigation from "./BreadNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator screenOptions={{headerShown: false}}>
      <BottomTabs.Screen
        name="BreadNavigation"
        component={BreadNavigation}
        options={{
          tabBarIcon: () => (
            <View>
              <Ionicons name="home" size={30} color="black" />
              <Text>Shop</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: () => (
            <View>
              <Ionicons name="cart" size={30} color="black" />
              <Text>Cart</Text>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({});
