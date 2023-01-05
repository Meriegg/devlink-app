import { SafeAreaView, StatusBar, Platform, StyleSheet } from "react-native";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SafeView = ({ children }: Props) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default SafeView;
