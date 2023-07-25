import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator()

export default Routes = () => {
    return <Stack.Navigator>
        <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
}