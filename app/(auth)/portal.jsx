{
  /*import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";

const Portal = () => {
  const submit = {};
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Portals</Text>
          <CustomButton
            title="User Login"
            handlePress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isSubmitting}
          />
          <CustomButton
            title="User Login"
            handlePress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isSubmitting}
          />
          <CustomButton
            title="User Login"
            handlePress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Portal;*/
}

import React from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const Portal = () => {
  const navigation = useNavigation();

  const handleUserLogin = () => {
    navigation.navigate("sign-in-users"); // Navigate to User Login screen
  };

  const handleDoctorLogin = () => {
    navigation.navigate("sign-in-doctors"); // Navigate to Doctor Login screen
  };

  const handleHospitalLogin = () => {
    navigation.navigate("sign-in-management"); // Navigate to Hospital Login screen
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full  justify-center items-center min-h-[85px] px-4 mt-20">
          <Text className="text-2xl font-bold mt-20">Portals</Text>
          <CustomButton
            title="User Login"
            handlePress={handleUserLogin}
            containerStyles="w-full rounded-full mt-5 h-[70px] bg-gray-100"
            textStyles="text-black"
          />
          <CustomButton
            title="Doctor Login"
            handlePress={handleDoctorLogin}
            containerStyles="w-full rounded-full mt-7 h-[70px] bg-gray-100"
            textStyles="text-black"
          />
          <CustomButton
            title="Hospital Login"
            handlePress={handleHospitalLogin}
            containerStyles="w-full rounded-full mt-7 h-[70px] bg-gray-100"
            textStyles="text-black"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Portal;
