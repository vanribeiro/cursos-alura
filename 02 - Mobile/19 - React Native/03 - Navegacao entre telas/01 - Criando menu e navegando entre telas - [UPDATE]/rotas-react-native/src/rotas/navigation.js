import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from './../paginas/Home';
import Login from './../paginas/Login';
import Cadastro from './../paginas/Cadastro';
import ListaPets from './../paginas/ListaPets';
import Mensagem from './../paginas/Mensagem';
import Sobre from './../paginas/Sobre';
import Perfil from './../paginas/Perfil';
import { Image } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
	return (
		<Drawer.Navigator
			screenOptions={{
				drawerLabelStyle: {
					color: "#FFFFFF",
				},
				drawerStyle: {
					backgroundColor: "#36D6AD",
					fontSize: 14,
					fontFamily: "PoppinsRegular",
					fontWeight: 400,
					lineHeight: 20,
				},
				headerTintColor: "#FFFFFF"
			}}>
			<Drawer.Screen
				name="Lista de Pets"
				component={TabRoutes}
				options={{
					drawerLabel: "Pets para Adoção",
					drawerIcon: () => (
						<Image
							source={require("../assets/pets.png")}
							style={{
								width: 22,
								height: 22,
							}}
						/>
					),
					headerTransparent: true,
					title: "",
				}}
			/>
			<Drawer.Screen
				name="Perfil"
				component={Perfil}
				options={{
					drawerIcon: () => 
						(<Image
							source={require("../assets/avatar.png")}
							style={{
								width: 22,
								height: 22,
							}}
						/>),
					headerTransparent: true,
					title: "",
				}}
			/>
			<Drawer.Screen
				name="Sair"
				component={Home}
				options={{
					drawerIcon: () => 
						(<Image
							source={require("../assets/logout.png")}
							style={{
								width: 22,
								height: 22,
							}}
						/>)
				}}
			/>
		</Drawer.Navigator>
	);
}

function TabRoutes() {
    return (
		<Tab.Navigator
			screenOptions={{
				headerTitle: "",
				headerShown: false,
			}}>
			<Tab.Screen
				name="Lista De Pets"
				component={ListaPets}
				options={{
					tabBarIcon: () => (
						<Image
							source={require("../assets/pets-green.png")}
							style={{
								width: 22,
								height: 22,
							}}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Mensagem"
				component={Mensagem}
				options={{
					tabBarIcon: () => (
						<Image
							source={require("../assets/mensagens.png")}
							style={{
								width: 22,
								height: 22,
							}}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

function Navigation() {
    return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerTitle: "",
					headerShown: false,
				}}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Cadastro" component={Cadastro} />
				<Stack.Screen name="Drawer" component={DrawerRoutes} />
				<Stack.Screen name="Sobre" component={Sobre} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Navigation;