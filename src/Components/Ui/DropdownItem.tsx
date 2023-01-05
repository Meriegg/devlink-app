import { DropdownStyles, type DropdownOption } from "./DropdownInput";
import { Text } from "./Text";
import { TouchableOpacity } from "react-native";

interface Props {
  setValue: (value: string) => void;
  setOpen: (value: boolean) => void;
  setTextQuery: (value: string) => void;
  option: DropdownOption;
}

const DropdownItem = ({ setValue, setOpen, option, setTextQuery }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setValue(option.value);
        setTextQuery("");
        setOpen(false);
      }}
      style={DropdownStyles.dropdownItem}
    >
      <Text style={DropdownStyles.dropdownItemText}>{option.textShown}</Text>
    </TouchableOpacity>
  );
};

export default DropdownItem;
