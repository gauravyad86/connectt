import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from 'expo-router';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', sender: 'other' },
    { id: '2', text: 'How are you?', sender: 'other' },
    { id: '3', text: 'I am good, thanks!', sender: 'me' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSend = () => {
    if (inputMessage.trim()) {
      setMessages((prevMessages) => [
        { id: Date.now().toString(), text: inputMessage, sender: 'me' },
        ...prevMessages,
      ]);
      setInputMessage('');
    }
  };


  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library is required!');
      return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log("Image Picker Result:", result); // Log the result
  
    if (!result.cancelled && result.uri) {
      setMessages((prevMessages) => [
        { id: Date.now().toString(), image: result.uri, sender: 'me' },
        ...prevMessages,
      ]);
    } else {
      console.log("Image selection failed or URI is undefined.");
      alert("Unable to load the image. Please try again.");
    }
  };
  
  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'me' ? styles.myMessage : styles.otherMessage,
      ]}
    >
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.imageMessage} />
      ) : (
        <Text style={styles.messageText}>{item.text}</Text>
      )}
    </View>
  );
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80} // Adjust this offset based on your header height
    >
      {/* Header */}

      <View style={styles.messagesContainer}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.messagesList}
          inverted // Invert the FlatList to show new messages at the bottom
        />
      </View>

      {/* Input and Attachment Section */}
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.attachmentButton}>
          <Ionicons name="attach" size={24} color="#666" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={inputMessage}
          onChangeText={setInputMessage}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#FFA500",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  backButton: {
    marginRight: 10,
  },
  username: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  messagesContainer: {
    flex: 1, // Makes the messages container take available space
    padding: 10,
    paddingBottom:80,
    justifyContent: 'flex-end', // Align messages to the bottom
  },
  messagesList: {
    paddingBottom: 70, // Padding for input area
  },
  messageContainer: {
    maxWidth: '80%',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  myMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  imageMessage: {
    width: 200,
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 1,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    position:"absolute",
    bottom:45,
    width:"100%",
    height:50
  },
  attachmentButton: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
    marginRight: 10,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#25D366',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});