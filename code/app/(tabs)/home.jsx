import React from "react";
import { StatusBar } from "react-native";
import { router } from "expo-router";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // For icons

export default function DashboardScreen({ navigation }) {
  return (
    <View className="flex-1 bg-primary p-6">
      <View className="mb-6">
        <Text className="text-3xl font-pextrabold text-center text-secondary mb-4 mt-16 uppercase">
          Invoicify
        </Text>
        <Text className="text-center text-gray-100 mb-10 font-bold mt-10 text-xl">
          Choose from the following options to generate a new invoice
        </Text>
      </View>

      <View className="flex flex-col justify-center gap-4">
        {/* Custom Button for Student Center Invoice */}
        <TouchableOpacity
          className="bg-butt p-6 rounded-lg shadow-lg flex-row items-center"
          onPress={() => router.push("../(invoice)/invoice1screen")}
        >
          <FontAwesome5 name="graduation-cap" size={24} color="white" />
          <Text className="text-white text-lg font-semibold ml-3">
            Student Center Invoice
          </Text>
        </TouchableOpacity>

        {/* Custom Button for Fee Payment Invoice */}
        <TouchableOpacity
          className="bg-butt p-6 rounded-lg shadow-lg flex-row items-center"
          onPress={() => alert("Fee Payment Invoice")}
        >
          <FontAwesome5 name="credit-card" size={24} color="white" />
          <Text className="text-white text-lg font-semibold ml-3">
            Fee Payment Invoice
          </Text>
        </TouchableOpacity>

        {/* Custom Button for Library Invoice */}
        <TouchableOpacity
          className="bg-butt p-6 rounded-lg shadow-lg flex-row items-center"
          onPress={() => alert("Library Invoice")}
        >
          <FontAwesome5 name="book" size={24} color="white" />
          <Text className="text-white text-lg font-semibold ml-3">
            Library Invoice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

