import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task,setTask]=useState()
  const [taskSumbit,setTaskSumbit]=useState([])


const handlePress=()=>  {
  Keyboard.dismiss()
setTaskSumbit([...taskSumbit,task])
setTask(null)
}


const completeTask=(index)=> {
const tasks=[...taskSumbit]
tasks.splice(index,1)
setTaskSumbit(tasks)


}



  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>

        <View style={styles.items}>
          {taskSumbit.map((item,index)=>  {
          return(
          <TouchableOpacity onPress={()=>completeTask(index)} >
            <Task key={index} text={item} />
            </TouchableOpacity>
          )
          })}

        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text=>setTask(text)} />

        <TouchableOpacity onPress={()=>handlePress()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 25,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: 250,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius: 60,
  },
  addWrapper: {
    width: 40,
    height: 40,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius:60
  },
});
