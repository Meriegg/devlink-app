import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Input, type CustomInputProps } from "./Input";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../styles";

export const PasswordInput = ({
  secureTextEntry,
  ...props
}: CustomInputProps) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <Input
      secureTextEntry={!showContent}
      right={
        <TouchableOpacity onPress={() => setShowContent(!showContent)}>
          {showContent ? (
            <Ionicons name="eye-off" size={20} color={Colors["text-primary"]} />
          ) : (
            <Ionicons name="eye" size={20} color={Colors["text-primary"]} />
          )}
        </TouchableOpacity>
      }
      {...props}
    />
  );
};
