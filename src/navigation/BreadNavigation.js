import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from "../screens/CategoriesScreen/index"
import CategoryBreadScreen from "../screens/CategoryBreadScreen/index"
import BreadDetailScreen from "../screens/BreadDetailScreen/index"




const BreadNavigation = () =>{
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={CategoriesScreen} />
        <Stack.Screen name='Bread' component={CategoryBreadScreen}/>
        <Stack.Screen name='Detail' component={BreadDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default BreadNavigation
