import { Colors } from "../styles";
import { Text, MainGradient } from "./index";
import {
  TouchableOpacity,
  StyleSheet,
  type TouchableOpacityProps,
} from "react-native";
import { type ReactNode } from "react";

type MainButtonProps = {
  children: ReactNode;
} & TouchableOpacityProps;

export const MainButton = ({
  children,
  disabled,
  ...props
}: MainButtonProps) => {
  return (
    <TouchableOpacity
      style={[disabled && styles.shared.disabled]}
      disabled={disabled}
      {...props}
    >
      <MainGradient style={styles.mainButton.button}>
        <Text
          fontFamily="InterBold"
          style={[
            {
              color: Colors["text-primary"],
            },
            { ...styles.mainButton.buttonText },
          ]}
        >
          {children}
        </Text>
      </MainGradient>
    </TouchableOpacity>
  );
};

type OutlineButtonProps = {
  children: ReactNode;
} & TouchableOpacityProps;

export const OutlineButton = ({
  children,
  disabled,
  ...props
}: OutlineButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.outlineButton.button, disabled && styles.shared.disabled]}
      disabled={disabled}
      {...props}
    >
      <Text fontFamily="InterBold" style={styles.outlineButton.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  mainButton: StyleSheet.create({
    button: {
      paddingVertical: 15,
      borderRadius: 1000,
    },
    buttonText: {
      width: "100%",
      textAlign: "center",
      fontSize: 14,
      color: "#fff",
      letterSpacing: -0.4,
    },
  }),
  outlineButton: StyleSheet.create({
    button: {
      paddingVertical: 15,
      borderRadius: 1000,
      borderColor: Colors["gray-100"],
      borderWidth: 2,
    },
    buttonText: {
      width: "100%",
      textAlign: "center",
      fontSize: 14,
      color: Colors["text-primary"],
      letterSpacing: -0.4,
    },
  }),
  shared: StyleSheet.create({
    disabled: {
      opacity: 0.6,
    },
  }),
};
