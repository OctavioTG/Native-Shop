import React from 'react'
import { View, Text, Button } from 'react-native'


function CategoriesScreen({navigation}) {
  return (
    <View>
    <Text>CategoriesScreen</Text>
    <Button title='Categorias' onPress={() => navigation.navigate('Bread')}/>
    </View>
  )
}

export default CategoriesScreen