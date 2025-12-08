import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PantallaInicio from '../ScreensXD/PantallaInicio';
import PantallaPublicarTutoria from '../ScreensXD/PantallaPublicarTutoria';
import PantallaChat from '../ScreensXD/PantallaChat';
import PantallaPerfilTutor from '../ScreensXD/PantallaPerfilTutor';

const Tab = createBottomTabNavigator();

export default function TabsTutor() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Inicio" component={PantallaInicio} />
      <Tab.Screen name="Publicar" component={PantallaPublicarTutoria} />
      <Tab.Screen name="Chat" component={PantallaChat} />
      <Tab.Screen name="Perfil" component={PantallaPerfilTutor} />
    </Tab.Navigator>
  );
}
