import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Card } from "../components";
import { COLORS, FONTS, SHADOW, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
  },
  textBoxWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SIZES.padding,
  },
  textInput: {
    ...SHADOW,
    borderRadius: SIZES.textBoxRadius,
    backgroundColor: COLORS.secondary,
    height: 54,
    width: "82%",
    color: COLORS.primary,
    marginRight: 15,
    paddingLeft: 15,
    ...FONTS.h2_semiBold,
  },
  btn: {
    backgroundColor: COLORS.accent,
    height: 54,
    width: 54,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Card text={"Helo MIC testing"} />
      <View style={styles.textBoxWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a new task"
          placeholderTextColor={COLORS.primary}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={{ fontSize: 34, color: COLORS.secondary }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
