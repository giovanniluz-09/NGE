import { Stack } from "expo-router";
import "../styles/global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ title: "Login" }}/>
      <Stack.Screen name="register" options={{ title: "Register" }}/>
    </Stack>
  )
}
