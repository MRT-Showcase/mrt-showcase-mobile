import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import { isNumericString } from "../../helper/isNumericString";

interface OTPInputProps {
  length: number;
  onCodeFilled: (code: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onCodeFilled }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length === 1) {
      const newOtp = [...otp];
      if (!isNumericString(text)) {
        return;
      }
      newOtp[index] = text;

      setOtp(newOtp);

      if (index < length - 1) {
        inputs.current[index + 1]?.focus();
      } else {
        onCodeFilled(newOtp.join(""));
        setOtp(Array(length).fill(""));
      }
    }
  };

  const handleBackspace = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (event.nativeEvent.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <View
          key={index}
          style={[
            styles.circle,
            { backgroundColor: digit ? "#0055B8" : "#E5EDF7" },
          ]}
        >
          <TextInput
            style={styles.input}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(event) => handleBackspace(event, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (inputs.current[index] = ref)}
            autoFocus={index === 0}
            blurOnSubmit={false}
            caretHidden
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  input: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    color: "transparent",
    fontSize: 24,
    // Adjust the input background color to be transparent
    backgroundColor: "transparent",
  },
});

export default OTPInput;
