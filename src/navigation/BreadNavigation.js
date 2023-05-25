import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from "../screens/CategoriesScreen/index"
import CategoryBreadScreen from "../screens/CategoryBreadScreen/index"
import BreadDetailScreen from "../screens/BreadDetailScreen/index"




const BreadNavigation = () => {
  const Stack = createNativeStackNavigator()
  return (
      <Stack.Navigator initialRouteName='Home' 
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fa2e59",
        },
        headerTitleAlign: "center"
      }}>
        <Stack.Screen name='Home' component={CategoriesScreen} />
        <Stack.Screen name='Bread' component={CategoryBreadScreen} options={({ route }) => ({
          title: route.params.name,
        })} />
        <Stack.Screen name='Detail' component={BreadDetailScreen} options={({ route }) => ({
          title: route.params.name,
        })} />
      </Stack.Navigator>
  )
}

export default BreadNavigation
