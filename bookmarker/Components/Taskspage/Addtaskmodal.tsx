import {
  View,
  Text,
  Modal,
  Alert,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Modalstyles } from "../../Styles/Modalstyles";
import { Addtaskmodal_I } from "../../Global/Types";

const Addtaskmodal = ({ modalVisible, setModalVisible }: Addtaskmodal_I) => {
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
          <TextInput
            style={Modalstyles.input}
            placeholder="Enter details of task"
            multiline={true}
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
