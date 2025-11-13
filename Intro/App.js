import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Menu from './Screen/Menu';


//zona 2 main: Zona de componentes
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Menu></Menu>
    </GestureHandlerRootView>
  );
}