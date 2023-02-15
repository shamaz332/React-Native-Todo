import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
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
  const [list, setList] = React.useState([]);
  const [value, setValue] = React.useState("");

  function updateTask(text) {
    if (value !== "") {
      setList([...list, { text: text, checked: false }]);
      setValue("");
    } else {
      alert("Please enter a task");
    }
  }

  function setIsCheked(index, value) {
    console.log("index, value");
    const newList = [...list];
    newList[index].checked = value;
    setList(newList);
  }
  function deleteTask(index) {
    Alert.alert(
      "Are you sure you want to delete this task?",

      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            const data = list.filter((item, i) => i !== index);
            setList(data);
          },
        },
      ]
    );
  }
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...FONTS.h1_semiBold,
          color: COLORS.secondary,
          marginBottom: 15,
        }}
      >
        Today's Tasks
      </Text>
      <FlatList
        style={{ flex: 1 }}
        data={list}
        renderItem={({ item, index }) => (
          <Card
            data={item}
            index={index}
            setIsCheked={setIsCheked}
            keyExtractor={(item, index) => index.toString()}
            deleteTask={deleteTask}
          />
        )}
      />
      <View style={styles.textBoxWrapper}>
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder="Add a new task"
          placeholderTextColor={COLORS.primary}
          onChangeText={(text) => setValue(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={() => updateTask(value)}>
          <Text style={{ fontSize: 34, color: COLORS.secondary }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
