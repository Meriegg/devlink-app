import { Colors } from "../styles";
import { Text } from "./Text";
import { View, TextInput, StyleSheet, type TextInputProps } from "react-native";
import type { ReactNode } from "react";

export type CustomInputProps = {
  label?: string;
  labelRequired?: boolean;
  error?: string;
  left?: ReactNode;
  right?: ReactNode;
} & TextInputProps;

export const Input = ({
  label,
  labelRequired,
  error,
  left,
  right,
  ...props
}: CustomInputProps) => {
  return (
    <View>
      {label ? (
        <Text style={InputStyles.labelStyle}>
          {label}
          {labelRequired ? (
            <Text
              style={{
                color: Colors["accent-pink-500"],
              }}
            >
              *
            </Text>
          ) : null}
        </Text>
      ) : null}
      <View
        style={[
          InputStyles.inputContainer,
          error ? InputStyles.inputContainerError : null,
        ]}
      >
        {left}
        <TextInput
          placeholderTextColor={Colors["text-secondary"]}
          style={InputStyles.input}
          {...props}
        />
        {right}
      </View>
      {error ? <Text style={InputStyles.errorLabel}>{error}</Text> : null}
    </View>
  );
};

export const InputStyles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontFamily: "InterSemibold",
    flexGrow: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    letterSpacing: -0.4,
  },
  inputContainer: {
    borderRadius: 10000,
    borderWidth: 2,
    borderColor: Colors["gray-100"],
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  inputContainerError: {
    borderColor: Colors["red-500"],
  },
  errorLabel: {
    color: Colors["red-500"],
    letterSpacing: 0,
  },
  labelStyle: {
    color: Colors["text-primary"],
    fontSize: 14,
    letterSpacing: 0,
  },
});
