import React from 'react';
import {Modal as NativeModal, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Modal = ({isVisibleModal, onClose, data}) => {
  return (
    <NativeModal
      animationType="fade"
      transparent={true}
      visible={isVisibleModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={onClose}
            style={styles.modalCloseContainer}>
            <Text style={styles.modalCloseContent}>&#215;</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Contact ways</Text>
          <Text style={styles.subtitle}>
            {`We found some ways to contact ${
              data.firstName
            }, please select at least one.`}
          </Text>
          <Text style={styles.sectionTitle}>Email address</Text>
          {data.userEmails &&
            data.userEmails.map(userEmail => (
              <Text key={userEmail.id}>{userEmail.email}</Text>
            ))}
          <Text style={styles.sectionTitle}>Phone</Text>
          {data.userPhones &&
            data.userPhones.map(userPhone => (
              <Text key={userPhone.id}>{userPhone.phone}</Text>
            ))}
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NativeModal>
  );
};

export {Modal};
