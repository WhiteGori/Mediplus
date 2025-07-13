/*
  @file:      OptionPicker
  @brief:     Creates a modal which allows to select an option from a list
  @details:

  Available utility props:

  * options:
      An array of objects {<key>, <label>, <value>}, where 'label' is the label
      that will be shown in the options list.
  * enableCancel:
      A boolean value that indicates whether the 'Cancel' button should be
      rendered when the modal is expanded or not.
  * cancel:
      A label for the 'Cancel' button that closes the modal.
  * initial:
      The initially selected option. Its label will be shown as placeholder.
      If you wish to use a string as placeholder instead of an option, you can
      use: initial={createInitialFromString('Your String Goes Here')}
  * onSelection:
      Callback that is called when the selected item changes. The option
      corresponding to the selected item is passed to it as a parameter.

  *****************************************************************************

  Available style modifying props:

  * collapsedStyle:
      Styles for the container of the modal.
  * expandedStyle:
      Styles for the modal itself. Remember to specify width and height.
  * optionStyle:
      Styles for the option buttons inside the modal.
  * cancelStyle:
      Styles for the 'Cancel' button text.
  * cancelButtonColor:
      Color of the 'Cancel' button background.
 */

import * as Res from '../resources';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {GeneralPurposeButton} from './Buttons';

export function createInitialFromString(str) {
  return {key: undefined, label: str, value: undefined};
}
export const OptionPicker = props => {
  // The 'selected' state manages the label that is shown in the
  // collapsed view.
  const [selected, setSelected] = useState(
    props.initial === undefined ? '' : props.initial.label,
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const DEFAULT_MODAL_WIDTH = Dimensions.get('window').width - 20;
  const DEFAULT_MODAL_HEIGHT = Dimensions.get('window').height / 1.5;

  return (
    <View>
      <TouchableOpacity
        style={
          props.collapsedStyle === undefined
            ? defaultStyles.collapsedStyle
            : props.collapsedStyle
        }
        onPress={() => setIsModalVisible(true)}>
        <Text style={defaultStyles.placeholderStyle}>{selected}</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={
          /* Enables the back gesture on Android to close the modal */
          () => setIsModalVisible(false)
        }>
        <ModalPicker
          setVisible={setIsModalVisible}
          defaultWidth={DEFAULT_MODAL_WIDTH}
          defaultHeight={DEFAULT_MODAL_HEIGHT}
          enableCancelButton={props.enableCancel}
          cancelButtonText={props.cancel}
          cancelButtonStyle={props.cancelStyle}
          cancelButtonColor={props.cancelButtonColor}
          options={props.options}
          optionButtonStyle={props.optionStyle}
          optionSetter={setSelected}
          onOptionSelection={props.onSelection}
        />
      </Modal>
    </View>
  );
};

const ModalPicker = props => {
  function renderOptions(
    options,
    optionButtonStyle,
    optionSetter,
    setVisible,
    onOptionSelection,
  ) {
    let optionsArray = [];
    for (let option of options) {
      optionsArray.push(
        <View key={option.key} style={defaultStyles.optionButtonContainerStyle}>
          <GeneralPurposeButton
            text={option.label}
            textStyle={
              optionButtonStyle === undefined
                ? defaultStyles.optionStyle
                : optionButtonStyle
            }
            onPress={() => {
              optionSetter(option.label);
              setVisible(false);
              onOptionSelection(option);
            }}
          />
        </View>,
      );
    }
    return <>{optionsArray}</>;
  }

  return (
    <View
      style={[
        props.expandedStyle === undefined
          ? [
              defaultStyles.expandedStyle,
              {
                width: props.defaultWidth,
                height: props.defaultHeight,
              },
            ]
          : props.expandedStyle,
      ]}>
      <ScrollView contentContainerStyle={defaultStyles.innerModalStyle}>
        {renderOptions(
          props.options,
          props.optionButtonStyle,
          props.optionSetter,
          props.setVisible,
          props.onOptionSelection,
        )}
        {props.enableCancelButton === true && (
          <GeneralPurposeButton
            color={
              props.cancelButtonColor === undefined
                ? Res.COMPONENT_COLOR.PRIMARY
                : props.cancelButtonColor
            }
            text={props.cancelButtonText}
            textStyle={
              props.cancelButtonStyle === undefined
                ? defaultStyles.cancelStyle
                : props.cancelButtonStyle
            }
            onPress={() => props.setVisible(false)}
          />
        )}
      </ScrollView>
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  collapsedStyle: {
    borderColor: Res.COMPONENT_COLOR.PRIMARY,
    borderWidth: 3,
    borderRadius: 100,
    padding: 10,
    width: '100%',
  },
  expandedStyle: {
    flex: 1,
    alignSelf: 'center',
    marginVertical: '30%',
    backgroundColor: Res.COMPONENT_COLOR.BACKGROUND,
    borderColor: Res.COMPONENT_COLOR.SECONDARY,
    borderWidth: 3,
    borderRadius: 20,
    justifyContent: 'center',
  },
  innerModalStyle: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  placeholderStyle: Res.CommonStyles.texts.paragraph,
  optionStyle: [Res.CommonStyles.texts.paragraph, {color: 'white'}],
  cancelStyle: [Res.CommonStyles.texts.paragraph, {color: 'white'}],
  optionButtonContainerStyle: {
    marginBottom: 10,
    width: '100%',
  },
});
