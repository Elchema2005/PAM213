import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PantallaBienvenida from '../ScreensXD/PantallaBienvenida';
import PantallaLogin from '../ScreensXD/PantallaLogin';
import PantallaRegistro from '../ScreensXD/PantallaRegistro';

import TabsAlumno from './TabsAlumno';
import TabsTutor from './TabsTutor';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Bienvenida" component={PantallaBienvenida} />
        <Stack.Screen name="Login" component={PantallaLogin} />
        <Stack.Screen name="Registro" component={PantallaRegistro} />

        {/* navegación por rol */}
        <Stack.Screen name="TabsAlumno" component={TabsAlumno} />
        <Stack.Screen name="TabsTutor" component={TabsTutor} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
