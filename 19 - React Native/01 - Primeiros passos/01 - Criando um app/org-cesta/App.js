import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta';
import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';



export default function App() {
  const [fontCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  });

  const noContainerPai = useCallback(async () => {
    if(fontCarregada) {
      await SplashScreen.preventAutoHideAsync();
    }
  }, [fontCarregada]);

  if(!fontCarregada) {
    return null;
  }

    return (
      <SafeAreaView 
        noContainerPai={noContainerPai}
        style={{ flex: 1 }}
      >
        <StatusBar />
        <Cesta />
      </SafeAreaView>
    );

}

