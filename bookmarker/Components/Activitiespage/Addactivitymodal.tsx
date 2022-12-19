import { View, Text, Modal, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Modalstyles } from "../../Styles/Modalstyles";
import { Addtaskmodal_I } from "../../Global/Types";
import Inputfield from "../LoginComponents/Inputfield";

const Addactivitymodal = ({
  modalVisible,
  setModalVisible,
}: Addtaskmodal_I) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setdate] = useState("");
  const [desc, setdesc] = useState("");
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
          <Text style={Modalstyles.addTitle}>Add Activity</Text>
          <Inputfield
            placeholder="Enter title"
            inputvalue={title}
            setText={setTitle}
            keyboard_type="default"
          />
          <Inputfield
            placeholder="Enter venue"
            inputvalue={location}
            setText={setLocation}
            keyboard_type="default"
          />
          <Inputfield
            placeholder="Enter date"
            inputvalue={date}
            setText={setdate}
            keyboard_type="default"
          />
          <Inputfield
            placeholder="Enter description"
            inputvalue={desc}
            setText={setdesc}
            keyboard_type="default"
          />
          {/* <TextInput
            style={Modalstyles.input}
            placeholder="Enter details of task"
            multiline={true}
          /> */}
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

export default Addactivitymodal;
