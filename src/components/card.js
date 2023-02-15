import React from "react";
import Checkbox from "expo-checkbox";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS, FONTS, SHADOW, SIZES } from "../constants";

const styles = StyleSheet.create({
  view: {
    ...SHADOW,
    width: "100%",
    paddingHorizontal: SIZES.padding,
    paddingVertical: 10,
    borderRadius: SIZES.borderRadius,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    marginBottom: 12,
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

const Card = ({ data, setIsCheked, index, deleteTask }) => {
  return (
    <Pressable
      style={styles.view}
      onLongPress={() => {
        deleteTask(index);
      }}
    >
      <Checkbox
        style={styles.checkbox}
        value={data.checked}
        onValueChange={(value) => {
          setIsCheked(index, value);
        }}
      />
      <Text
        style={{
          ...styles.text,
          textDecorationLine: data.checked ? "line-through" : "none",
        }}
      >
        {data.text}
      </Text>
    </Pressable>
  );
};

export default Card;
