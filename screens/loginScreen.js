import { StyleSheet, Text, View, Button } from 'react-native';
import React, { Component } from 'react';
import constants from '../additionalComponents/constants';

export default class loginScreen extends Component
{
static navigationOptions = () => ({
    title: 'My Life',
    headerTintColor: constants.WHITE,
    headerStyle: {
        backgroundColor: constants.PRIMARY_COLOR
    },
  });

 render()
 {
    return(
       <View style = { styles.MainContainer }>
 
          <Text style = { styles.ActivityNameTextCss }> This Is loginScreen. </Text>
 
       </View>
    );
 }
}
 
const styles = StyleSheet.create({
 
     MainContainer: {
    
        flex:1,
        justifyContent: 'center',
        margin: 5
      
     },
    
     ActivityNameTextCss: {
    
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
     },
    
    });
 
 