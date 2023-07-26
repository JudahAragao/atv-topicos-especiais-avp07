import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Ícones das tabs e de botões telas
import Home from '../screens/Home';

const Tab = createMaterialBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00455F', // Defina a cor de fundo do botão aqui
        }}
    >
        {children}
    </View>
);


export default HomeMenuBottomTab = ({ navigation, route }) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#FFFFFF"
            inactiveColor="#FFC300"
            barStyle={{ backgroundColor: '#0095e0' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
                }}
            />
        </Tab.Navigator>
    );
}
