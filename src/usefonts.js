import * as Font from "expo-font";
 
export default async function useFonts() {
  return await Font.loadAsync({
    'karla': require('../assets/fonts/Karla-Regular.ttf'),
    'markazi': require('../assets/fonts/MarkaziText-Regular.ttf'),
  });
}
