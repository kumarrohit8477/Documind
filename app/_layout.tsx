import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      {/* This hides the header for the entire tab group */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* You can add specific modal screens here later */}
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}