import {
  Text as DefaultText,
  StyleSheet,
  TextProps,
  PixelRatio,
} from "react-native";
import { type FontFamilyType } from "../../types";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  fontFamily?: FontFamilyType;
} & TextProps;

export const Text = ({
  children,
  style,
  fontFamily = "InterBold",
  ...props
}: Props) => {
  return (
    <DefaultText
      style={[
        TextStyles.text,
        {
          fontFamily: fontFamily,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </DefaultText>
  );
};

export const TextStyles = StyleSheet.create({
  text: {
    letterSpacing: PixelRatio.getPixelSizeForLayoutSize(-0.53),
  },
});
