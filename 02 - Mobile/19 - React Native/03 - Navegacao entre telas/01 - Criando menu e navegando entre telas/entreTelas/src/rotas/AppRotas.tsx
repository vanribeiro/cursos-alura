import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

function AppRotas() {
  const definirIcones =
    (route: any) =>
    // eslint-disable-next-line react/no-unstable-nested-components
    ({color}: any) => {
      return route.name === 'Melhores Produtores' ? (
        <Icon name="heart" size={22} color={color} />
      ) : (
        <Icon name="home" size={22} color={color} />
      );
    };

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarStyle: {height: 60},
            tabBarLabelStyle: {
              fontSize: 12,
              paddingBottom: 4,
              fontFamily: 'Montserrat-Regular',
            },
            tabBarIcon: definirIcones(route),
            tabBarActiveTintColor: '#2a9f95',
            tabBarInactiveTintColor: '#c7c7c7',
          })}>
          <Tab.Screen name="Home" component={ProdutorRotas} />
          <Tab.Screen
            name="Melhores Produtores"
            component={MelhoresProdutoresRotas}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default AppRotas;
