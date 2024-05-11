import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <View className="flex-row">
            <Image
              source={images.logo}
              className="w-[250px] h-[84px]"
              resizeMode="contain"
            />
          </View>
          <View className="rounded-full w-[200px] h-[200px] overflow-hidden justify-center items-center">
          <Image
            source={images.cards}
            className="w-[300px] h-[300px]"
            resizeMode="contain"
          /></View>
          <View className="relative mt-5">
            <Text className="text-2xl text-black font-bold text-center">
              Hassel free doctor appointment at{" "}
              <Text className="text-secondary">ClinicMate</Text>
            </Text>
          </View>
          <CustomButton
            title="Continue with Mobile No"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
