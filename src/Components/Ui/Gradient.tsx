import { ReactNode } from "react";
import { Colors, MainGradientColors } from "../styles";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { type Omit } from "react-native";

type GradientProps = {
  children?: ReactNode;
} & LinearGradientProps;

export const Gradient = ({ children, colors, ...props }: GradientProps) => {
  return (
    <LinearGradient colors={colors} {...props}>
      {children}
    </LinearGradient>
  );
};

type MainGradientProps = {
  children: ReactNode;
  colors?: string[];
} & Omit<LinearGradientProps, "colors">;

export const MainGradient = ({
  children,
  colors,
  ...props
}: MainGradientProps) => {
  const { mainGradient } = Colors;

  return (
    <LinearGradient
      colors={MainGradientColors}
      start={{
        y: 0.3,
        x: 1,
      }}
      {...props}
    >
      {children}
    </LinearGradient>
  );
};
