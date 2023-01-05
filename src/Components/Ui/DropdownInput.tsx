import Ionicons from "@expo/vector-icons/Ionicons";
import DropdownItem from "./DropdownItem";
import { Text, InputStyles } from "./index";
import {
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { Colors } from "../styles";

export type DropdownOption = {
  value: string;
  textShown: string;
};

interface DropdownProps {
  value: string | null;
  setValue: (value: string) => void;
  placeholder?: string;
  options: DropdownOption[];
  hasSearchField?: boolean;
}

export const DropdownInput = ({
  placeholder = "Choose an option",
  setValue,
  value,
  options,
  hasSearchField,
}: DropdownProps) => {
  const [isOpen, setOpen] = useState(false);
  const [textQuery, setTextQuery] = useState("");
  const [searchResults, setSearchResults] = useState<DropdownOption[]>([]);

  useEffect(() => {
    if (!textQuery) {
      setSearchResults([]);
      return;
    }

    setSearchResults(
      options.filter((option) =>
        option.textShown.toLowerCase().includes(textQuery.toLowerCase())
      )
    );
  }, [textQuery]);

  return (
    <View>
      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onDismiss={() => {
          // Set the Input value to null
        }}
        onRequestClose={() => {
          setOpen(false);
        }}
      >
        <View style={DropdownStyles.dropdownOverlay}>
          <View style={DropdownStyles.dropdownContentContainer}>
            {hasSearchField ? (
              <View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Ionicons
                    name="search"
                    size={20}
                    color={Colors["text-secondary"]}
                  />
                  <TextInput
                    placeholder="Search"
                    style={{
                      letterSpacing: -0.4,
                      fontFamily: "InterSemibold",
                      flexGrow: 1,
                      paddingLeft: 8,
                    }}
                    onChangeText={(value) => setTextQuery(value)}
                    placeholderTextColor={Colors["text-secondary"]}
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                    height: 2,
                    backgroundColor: Colors["gray-100"],
                    marginTop: 8,
                    borderRadius: 1000,
                  }}
                ></View>
              </View>
            ) : null}
            <ScrollView
              style={{
                maxHeight: "100%",
                paddingTop: 8,
              }}
            >
              {!textQuery ? (
                options.map((option, optionIdx) => (
                  <DropdownItem
                    key={optionIdx}
                    option={option}
                    setOpen={setOpen}
                    setValue={setValue}
                    setTextQuery={setTextQuery}
                  />
                ))
              ) : (
                <View>
                  {!searchResults.length ? (
                    <Text
                      style={{
                        width: "100%",
                        textAlign: "center",
                        color: Colors["text-secondary"],
                        marginTop: 8,
                      }}
                    >
                      No results found
                    </Text>
                  ) : (
                    <>
                      {searchResults.map((option, optionIdx) => (
                        <DropdownItem
                          option={option}
                          setOpen={setOpen}
                          setValue={setValue}
                          setTextQuery={setTextQuery}
                          key={optionIdx}
                        />
                      ))}
                    </>
                  )}
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setOpen(!isOpen)}
        style={[InputStyles.inputContainer, DropdownStyles.openDropdown]}
      >
        {value ? (
          <Text>{value}</Text>
        ) : (
          <Text style={DropdownStyles.inputValuePlaceholder}>
            {placeholder}
          </Text>
        )}
        <Ionicons
          name="chevron-forward-circle-sharp"
          size={20}
          color={Colors["text-secondary"]}
        />
      </TouchableOpacity>
    </View>
  );
};

export const DropdownStyles = StyleSheet.create({
  inputValuePlaceholder: {
    color: Colors["text-secondary"],
  },
  openDropdown: {
    backgroundColor: Colors["gray-100"],
    fontSize: 14,
    fontFamily: "InterSemibold",
    flexGrow: 1,
    paddingVertical: 12,
    letterSpacing: -0.4,
  },
  dropdownContentContainer: {
    width: "100%",
    backgroundColor: "#FFF",
    display: "flex",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 5,
    maxHeight: "90%",
  },
  dropdownItem: {
    paddingVertical: 16,
  },
  dropdownItemText: {
    fontSize: 14,
  },
  dropdownOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});
