import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  HomeScreen,
  PhotoGalleryScreen,
  ProfileScreen,
} from "../screens/index";
import Header from "../layout/header";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ header: Header }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PhotoGallery" component={PhotoGalleryScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
