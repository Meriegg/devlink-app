import SafeView from "./src/Components/SafeAreaView";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_800ExtraBold,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import {
  Text,
  MainButton,
  OutlineButton,
  Input,
  PasswordInput,
  DropdownInput,
} from "./src/Components/Ui";
import { useState } from "react";

export default function App() {
  const [dropdownVal, setDropdownVal] = useState<string | null>(null);

  let [fontsLoaded] = useFonts({
    InterExtraBold: Inter_800ExtraBold,
    InterBold: Inter_700Bold,
    InterSemibold: Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeView>
      <Text style={{ fontSize: 24 }}>Custom Text</Text>
      <MainButton onPress={() => console.log("Hello world!")}>
        Main Button Gradient
      </MainButton>
      <OutlineButton>Main Outline button</OutlineButton>
      <Input
        placeholder="Some input"
        label={"Some Input"}
        labelRequired={true}
      />
      <PasswordInput
        label={"Your Password"}
        labelRequired={true}
        placeholder={"some strong sh*t"}
        onChangeText={(value) => console.log(value)}
      />
      <DropdownInput
        options={[
          { textShown: "Option 1", value: "option1" },
          { textShown: "Option 2", value: "option2" },
          { textShown: "Option 3", value: "option3" },
        ]}
        value={dropdownVal}
        hasSearchField={true}
        setValue={(value) => setDropdownVal(value)}
      />
      <StatusBar style="dark" />
    </SafeView>
  );
}
