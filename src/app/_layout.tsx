import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "../styles/global.css";

export default function RootLayout() {
  return (
    <>
    <StatusBar barStyle={"default"}/>
    <Stack screenOptions={{
      headerShown: false,
      animation: 'slide_from_right',
      }}>
    </Stack>
    </>
  );
}
