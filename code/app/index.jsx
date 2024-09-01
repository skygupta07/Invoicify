import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo1}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.home1}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Effortless Invoicing,{"\n"}Anytime, Anywhere with
              <Text className="text-secondary-200 font-pbold"> Invoicify</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[150px] h-[15px] absolute -bottom-3 right-24"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-psemibold text-gray-100 mt-7 text-center">
          Easy, secure, and quick one-stop invoicing. Accelerate your progress with Invoicify
          </Text>

          <CustomButton
            title="Welcome to Invoicify"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />

        </View>

      </ScrollView>
      {/* <StatusBar backgroundColor="#161622" style="light" /> */}
    </SafeAreaView>
  );
}