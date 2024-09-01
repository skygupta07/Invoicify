import { View, Text, StyleSheet } from 'react-native'
import { useGlobalContext } from "../../context/GlobalProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import { Image, TouchableOpacity } from "react-native";
import { signOut } from "../../lib/appwrite";
import React from 'react'
import { router } from 'expo-router';

const profile = () => {
    const { user, setUser, setIsLogged } = useGlobalContext();
    const logout = async () => {
        await signOut();
        setUser(null);
        setIsLogged(false);
        router.replace("/sign-in");
    };

    return (
        <SafeAreaView className="bg-primary h-full">
            <View className="w-full flex justify-center items-center mt-6 mb-12 px-4 z-2">
                <TouchableOpacity
                    onPress={logout}
                    className="absolute top-6 right-4 flex-row items-center bg-trans p-2 rounded-xl z-2" // Absolute positioning and flex row for alignment
                >
                    <Text className="text-secondary font-pbold">
                        LogOut
                    </Text>
                    <Image
                        source={icons.logout}
                        resizeMode="contain"
                        className="w-6 h-6 ml-2" // Margin right to add space between icon and text
                    />

                </TouchableOpacity>
            </View>

            <View className="flex-1 mt-8 justify-center items-center bg-primary">
                <View className="mt-2 w-32 h-32 rounded-full overflow-hidden border border-gray-300 mb-4">
                    <Image
                        source={{ uri: 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png' }} // Replace with your image source
                        style={styles.profileImage}
                    />
                </View>
                <Text className="text-lg font-pbold text-secondary">Akash Gupta</Text>
                <Text className="text-lg font-bold text-secondary">akash.gupta.ug22@nsut.ac.in</Text>
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});
export default profile
