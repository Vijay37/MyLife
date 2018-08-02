import { StyleSheet, Text, View, Button } from 'react-native';
import React, { Component } from 'react';
class loginScreen extends Component
{
    
 static navigationOptions =
 {
    title: 'loginScreen',
 };
 
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
 
 
export default loginScreen;