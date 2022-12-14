import { View, Text, Modal, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Modalstyles } from "../../Styles/Modalstyles";
import { Addtaskmodal_I } from "../../Global/Types";
import Inputfield from "../LoginComponents/Inputfield";

const Addtaskmodal = ({ modalVisible, setModalVisible }: Addtaskmodal_I) => {
  const [title, setTitle] = useState("");
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Modalstyles.addModalWrapper}>
          <Text style={Modalstyles.addTitle}>Add Task</Text>
          <Inputfield
            placeholder="Enter details of the tast.."
            setText={setTitle}
            keyboard_type="default"
            inputvalue={title}
          />
          <View style={Modalstyles.actionBtns}>
            <TouchableOpacity
              style={[Modalstyles.addActionBtn, Modalstyles.actionBtn]}
            >
              <Text style={Modalstyles.actionBtnText}>Add task</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={[Modalstyles.cancelActionBtn, Modalstyles.actionBtn]}
            >
              <Text style={Modalstyles.actionBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Addtaskmodal;
