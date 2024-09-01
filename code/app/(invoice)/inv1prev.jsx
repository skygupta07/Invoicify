import React, { useEffect, useState } from "react";
import { Stack } from 'expo-router';
import { router } from "expo-router";
import { View, Text, Button, Alert } from "react-native";
import { WebView } from "react-native-webview";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";

export default function Invoice1Preview({ navigation }) {
  const route = useRoute();
  const { invoiceHTML } = route.params;
  const [htmlContent, setHtmlContent] = useState(null);

  useEffect(() => {
    if (invoiceHTML) {
      setHtmlContent(invoiceHTML);
    }
  }, [invoiceHTML]);

  const handlePrintInvoice = async () => {
    try {
      if (htmlContent) {
        const { uri } = await Print.printToFileAsync({
          html: htmlContent,
        });
        console.log("File has been saved to:", uri);
        await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
        router.push("home");
      } else {
        Alert.alert("Error", "No invoice data available.");
      }
    } catch (err) {
      Alert.alert("Error", "An error occurred while printing.");
    }
  };

  if (!htmlContent) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No invoice data available</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <WebView
          originWhitelist={["*"]}
          source={{ html: htmlContent }}
          style={{ flex: 1 }}
          scalesPageToFit={true}
          useWebKit={true}
        />

        <View className="flex justify-center items-center">
          <TouchableOpacity
            onPress={() => router.push("invoice1screen")}
            className="w-[350] bg-blue-500 p-6 rounded-xl mt-5"
          >
            <Text className="text-white font-pbold text-center">
              UPDATE INVOICE DETAILS
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex justify-center items-center">
          <TouchableOpacity
            onPress={handlePrintInvoice}
            className="w-[350] bg-blue-800 p-6 rounded-xl mt-5 mb-2 align-center"
          >
            <Text className="text-white font-pbold text-center">
              PRINT INVOICE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}