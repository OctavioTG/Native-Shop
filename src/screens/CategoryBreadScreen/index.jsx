import React from 'react'
import { View, Text, Button } from 'react-native'

function CategoryBreadScreen({navigation}) {
  return (
    <View>
    <Text>CategoryBreadScreen</Text>
    <Button title='Detalles' onPress={() => navigation.navigate('Detail')}/>
    </View>
  )
}

export default CategoryBreadScreen