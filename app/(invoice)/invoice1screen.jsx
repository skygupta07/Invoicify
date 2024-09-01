import React, { useState } from "react";
import { Stack } from 'expo-router';
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { inv1prevhtml } from "./preview/inv1prevhtml";
import { useNavigation } from "@react-navigation/native";

export default function Invoice1Form() {
  const [invoiceNumber, setInvoiceNumber] = useState("194725");
  const [invoiceDate, setInvoiceDate] = useState(new Date());
  const [billToName, setBillToName] = useState();
  const [billToAddress, setBillToAddress] = useState();
  const [billToPhone, setBillToPhone] = useState();
  const [fromName, setFromName] = useState();
  const [fromAddress, setFromAddress] = useState();
  const [fromPhone, setFromPhone] = useState();
  const [items, setItems] = useState([
    { description: "", amount: "", quantity: "" },
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [invoiceHTML, setInvoiceHTML] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const navigation = useNavigation(); // Initialize useNavigation

  const handleGenerateInvoice = () => {
    // Validate form
    if (
      !invoiceNumber ||
      !billToName ||
      !billToAddress ||
      !billToPhone ||
      !fromName ||
      !fromAddress ||
      !fromPhone ||
      items.some((item) => !item.description || !item.amount || !item.quantity)
    ) {
      Alert.alert("Validation Error", "Please fill in all required fields.");
      return;
    }

    let total = 0;
    const itemsHTML = items
      .map((item, index) => {
        const amount = parseFloat(item.amount) || 0;
        const quantity = parseFloat(item.quantity) || 1;
        const itemTotal = amount * quantity;
        total += itemTotal;
        return `
          <tr>
            <td style="border: 1px solid #000; padding: 10px;">${item.description
          }</td>
            <td style="border: 1px solid #000; padding: 10px;">${amount.toFixed(
            2
          )}</td>
            <td style="border: 1px solid #000; padding: 10px;">${quantity.toFixed(
            2
          )}</td>
            <td style="border: 1px solid #000; padding: 10px;">${itemTotal.toFixed(
            2
          )}</td>
          </tr>
        `;
      })
      .join("");

    const dateStr = invoiceDate.toISOString().split("T")[0];

    const html = inv1prevhtml(
      invoiceNumber,
      dateStr,
      billToName,
      billToAddress,
      billToPhone,
      fromName,
      fromAddress,
      fromPhone,
      itemsHTML,
      total
    );

    setInvoiceHTML(html);

    // navigation.navigate('inv1prev', { invoiceHTML: html });
    router.push({
      pathname: "inv1prev",
      params: { invoiceHTML: html }
    });
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || invoiceDate;
    setShowDatePicker(false);
    setInvoiceDate(currentDate);
  };

  const handleAddItem = () => {
    setItems([...items, { description: "", amount: "", quantity: "" }]);
  };

  const handleChangeItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleItemPress = (index) => {
    setSelectedItemIndex(index);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView className="p-4 bg-primary h-full text-white">
        <View className="mb-6 mt-16">
          <Text className="text-3xl font-bold mb-6 text-center uppercase text-secondary">
            Create Invoice
          </Text>

          <View className="mb-4">
            <Text className="text-lg font-medium mb-2 text-gray-300">
              Invoice Number
            </Text>
            <TextInput
              className="border border-gray-300 p-2 rounded text-white"
              placeholder="Enter Invoice Number"
                placeholderTextColor="#bbb"
              value={invoiceNumber}
              onChangeText={setInvoiceNumber}
            />
          </View>

          <View className="mb-4">
            <Text className="text-lg font-medium mb-2 text-gray-300">
              Invoice Date
            </Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput
                className="border border-gray-300 p-2 rounded text-white"
                placeholder="Select Invoice Date"
                placeholderTextColor="#bbb"
                value={invoiceDate.toISOString().split("T")[0]}
                editable={false}
              />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={invoiceDate}
                mode="date"
                display="default"
                onChange={onDateChange}
              />
            )}
          </View>

          {/* BILL TO Section */}
          <Text className="text-xl font-semibold mb-4 text-secondary">
            BILL TO:
          </Text>
          <View className="mb-4">
            <Text className="text-lg font-medium mb-2 text-gray-300">
              Customer Name
            </Text>
            <TextInput
              className="border border-gray-300 p-2 rounded text-white"
              placeholder="Enter Customer Name"
                placeholderTextColor="#bbb"
              value={billToName}
              onChangeText={setBillToName}
            />
          </View>
          <View className="mb-4">
            <Text className="text-lg font-medium mb-2 text-gray-300">
              Customer Address
            </Text>
            <TextInput
              className="border border-gray-300 p-2 rounded text-white"
              placeholder="Enter Customer Address"
                placeholderTextColor="#bbb"
              value={billToAddress}
              onChangeText={setBillToAddress}
            />
          </View>
          <View className="mb-4">
            <Text className="text-lg font-medium mb-2 text-gray-300">
              Customer Phone
            </Text>
            <TextInput
              className="border border-gray-300 p-2 rounded text-white"
              placeholder="Enter Customer Phone"
                placeholderTextColor="#bbb"
              value={billToPhone}
              onChangeText={setBillToPhone}
              keyboardType="numeric"
            />
          </View>

          {/* FROM Section */}
          <Text className="text-xl font-semibold mb-4 text-secondary">FROM:</Text>
          <View className="mb-4">
            <Text className="text-lg font-medium mb-2 text-gray-300">
              Your Name
            </Text>
            <TextInput
              className="border border-gray-300 p-2 rounded text-white"
              placeholder="Enter Your Name"
                placeholderTextColor="#bbb"
              value={fromName}
              onChangeText={setFromName}
            />
          </View>
          <View className="mb-4">
            <Text className="text-lg font-medium mb-2 text-gray-300">
              Your Address
            </Text>
            <TextInput
              className="border border-gray-300 p-2 rounded text-white"
              placeholder="Enter Your Address"
                placeholderTextColor="#bbb"
              value={fromAddress}
              onChangeText={setFromAddress}
            />
          </View>
          <View className="mb-4">
            <Text className="text-lg font-medium mb-2 text-gray-300">
              Your Phone
            </Text>
            <TextInput
              className="border border-gray-300 p-2 rounded text-white"
              placeholder="Enter Your Phone"
                placeholderTextColor="#bbb"
              value={fromPhone}
              onChangeText={setFromPhone}
              keyboardType="numeric"
            />
          </View>

          {/* Items Section */}
          <Text className="text-xl font-semibold mb-4 text-secondary">ITEMS:</Text>
          {items.map((item, index) => (
            <View
              key={index}
              className={`mb-4 p-4 bg-trans border border-gray-300 rounded-xl shadow-xl ${selectedItemIndex === index
                ? "bg-trans border-blue-800 shadow-2xl"
                : ""
                }`}
              onTouchStart={() => handleItemPress(index)} // Handle item press for focus
            >
              <Text className="text-lg font-medium mb-2 text-gray-300">
                Item {index + 1}
              </Text>
              <TextInput
                className="border border-gray-300 p-2 rounded mb-2 text-white"
                placeholder="Description"
                placeholderTextColor="#bbb"
                value={item.description}
                onChangeText={(text) =>
                  handleChangeItem(index, "description", text)
                }
              />
              <TextInput
                className="border border-gray-300 p-2 rounded mb-2 text-white"
                placeholder="Quantity"
                placeholderTextColor="#bbb"
                value={item.quantity}
                onChangeText={(text) => handleChangeItem(index, "quantity", text)}
                keyboardType="numeric"
              />
              <TextInput
                className="border border-gray-300 p-2 rounded mb-2 text-white"
                placeholder="Rate"
                placeholderTextColor="#bbb"
                value={item.amount}
                onChangeText={(text) => handleChangeItem(index, "amount", text)}
                keyboardType="numeric"
              />
              
              <TouchableOpacity
                onPress={() => handleRemoveItem(index)}
                className="mt-2 bg-red-500 p-2 rounded-xl"
              >
                <Text className="text-white font-bold text-center">
                  Remove Item
                </Text>
              </TouchableOpacity>
            </View>
          ))}

          <View>
            <TouchableOpacity
              onPress={handleAddItem}
              className="mt-2 bg-blue-500 p-2 rounded mt-5"
            >
              <Text className="text-white font-pbold text-center">
                ADD ITEM
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={handleGenerateInvoice}
              className="mt-2 bg-green-500 p-2 rounded mt-5 mb-10"
            >
              <Text className="text-white font-pbold text-center">
                GENERATE INVOICE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
