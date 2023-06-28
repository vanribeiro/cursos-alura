import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createNativeStackNavigator();

import Principal from "./telas/Principal";
import Login from "./telas/Login";
import Configuracao from "./telas/Configuracao";
import Resumo from "./telas/Resumo";
import Finalizar from "./telas/Finalizar";

export default function Rotas() {
	
	const options = {
		headerShown: true,
		headerStyle: {
			backgroundColor: '#34404f',
		},
		headerTintColor: '#EBEBEB',
	};

	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="Login"
					component={Login}
					options={{ headerShown: false }}
				/>
				<Tab.Screen
					name="Principal"
					component={Principal}
					options={options}
				/>
				<Tab.Screen
					name="Resumo"
					component={Resumo}
					options={options}
				/>
				<Tab.Screen
					name="Finalizar"
					component={Finalizar}
					options={options}
				/>
				<Tab.Screen
					name="Configurações"
					component={Configuracao}
					options={{ headerTitleAlign: "center", ...options}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
