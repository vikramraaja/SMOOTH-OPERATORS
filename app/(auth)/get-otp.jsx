import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import { React, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, useNavigation } from "expo-router";

const SignIn = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    phone_no: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85px] px-4 mt-20">
          <Text className="text-2xl font-bold mt-20">OTP</Text>
          <Text className="text-1xl mt-2">
            Enter the otp to sign up for this app
          </Text>
          <FormField
            value={form.otp}
            placeholder="otp"
            handleChangeText={(e) => setForm({ ...form, otp: e })}
            otherStyles="mt-7"
            keyboardType={"phone-pad"}
          />
          <CustomButton
            title="Sign up"
            handlePress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isSubmitting}
          />
          <Text className="text-1xl mt-7">
            By clicking continue, you agree to our Terms of Service and Privacy
            Policy
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
