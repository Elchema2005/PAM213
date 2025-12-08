import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PantallaInicio from '../ScreensXD/PantallaInicio';
import PantallaBuscar from '../ScreensXD/PantallaBuscar';
import PantallaCalendario from '../ScreensXD/PantallaCalendario';
import PantallaPerfil from '../ScreensXD/PantallaPerfil';

const Tab = createBottomTabNavigator();

export default function TabsAlumno() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Inicio" component={PantallaInicio} />
      <Tab.Screen name="Buscar" component={PantallaBuscar} />
      <Tab.Screen name="Calendario" component={PantallaCalendario} />
      <Tab.Screen name="Perfil" component={PantallaPerfil} />
    </Tab.Navigator>
  );
}
