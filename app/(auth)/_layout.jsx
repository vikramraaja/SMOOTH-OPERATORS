import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="portal"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-in-users"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-in-doctors"
          options={{
            headerShown: false,
          }}
        />{" "}
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="get-otp"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="white" style="light" />
    </>
  );
};

export default AuthLayout;
