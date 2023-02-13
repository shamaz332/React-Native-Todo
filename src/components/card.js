import React from "react";
import Checkbox from "expo-checkbox";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const styles = StyleSheet.create({
  view: {
    width: "100%",
    paddingHorizontal: SIZES.padding,
    paddingVertical: 12,
    borderRadius: SIZES.borderRadius,
    elevation: 12,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 2,
      height: 12,
    },
    shadowRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
  },
  text: {
    ...FONTS.h2_semiBold,
    color: COLORS.primary,
  },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    marginRight: 15,
  },
});

const Card = ({ text }) => {
  const [isSelected, setSelection] = React.useState(true);

  const setChecked = () => {
    setSelection(!isSelected);
  };
  return (
    <View style={styles.view}>
      <Checkbox
        style={styles.checkbox}
        value={isSelected}
        onValueChange={setChecked}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Card;
