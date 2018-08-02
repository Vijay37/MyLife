import { StyleSheet, Text, View, Button } from 'react-native';
 
class firstScreen extends Component {
 
static navigationOptions =
 {
    title: 'firstScreen',
 };
 
 NavigateActivityFunction = () =>
 {
    this.props.navigation.navigate('Second');
    
 }
 
 render()
 {
    return(
       <View style = { styles.MainContainer }>
 
          <Button onPress = { this.NavigateActivityFunction } title = 'My Life'></Button>
        
       </View>
    );
 }
}
 
const styles = StyleSheet.create(
{
 MainContainer: {
 
    flex: 1,
    backgroundColor: '#7843C0',
    alignItems: 'center',
    justifyContent: 'center',
  
 },
 
 ActivityNameTextCss: {
 
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
 },
 
});
 
export default firstScreen;