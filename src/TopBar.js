
import {StyleSheet, View , Image } from 'react-native';

import {useContext} from 'react';
import { AppContext } from './user';
const TopBar = () => {
  
  const { avatarimg } = useContext(AppContext);
  return (
    <View style={styles.headerWrapper}>
    <Image
      style={[styles.image, {flex:0.8}]}
      source={require('./img/yellowlogoandtext.png')}
      resizeMode="contain"
      accessible={true}
      accessibilityLabel={'Little Lemon Logo'}
    />
    {avatarimg &&
    <Image
    style={[styles.image, {flex:0.2}]}
      source={{ uri: avatarimg }}
      resizeMode="contain"
      accessible={true}
      accessibilityLabel={'Little Lemon Logo'}
    />
}
        </View>
  );
  }

  
const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection:'row',
        backgroundColor:'#edefee',
        alignItems: "center",
        justifyContent: "center",
    },
    image: {height:40,
        padding: 10,
        width: "100%",
      }
})

  export default TopBar;