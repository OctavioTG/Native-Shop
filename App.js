import { NavigationContainer } from "@react-navigation/native";
import BreadNavigation from "./src/navigation/BreadNavigation"
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

export default function App() {
  return (
<NavigationContainer>
  <BottomTabNavigator />
</NavigationContainer>
  );
}

