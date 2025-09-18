import { Stack } from "expo-router";
import "../styles/global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="login"/>
      <Stack.Screen name="register"/>
      <Stack.Screen name="home"/>
    </Stack>
  )
}
