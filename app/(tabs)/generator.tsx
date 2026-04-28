import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import QRCode from 'react-native-qrcode-svg';

const Generator = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [qrCode, setQrCode] = React.useState("");

  const handleInputChange = (text: string) => {
    setInputValue(text);
    setQrCode("");
  };

  const generateQRCode = () => {
    setQrCode(inputValue);
  };

  return (
    <View style={styles.container}>
      <Text>Generate QR Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text to generate QR code"
        value={inputValue}
        onChangeText={handleInputChange}
      />

      <TouchableOpacity
        onPress={generateQRCode}
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white" }}>Generate</Text>
      </TouchableOpacity>

      {qrCode ? (
        <QRCode
          value={qrCode}
          size={200}
          color="black"
          backgroundColor="white"
        />
      ) : null}
    </View>
  );
};

export default Generator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
