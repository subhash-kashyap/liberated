// Needs to contain options to select whom to chat with 

import React, { useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { Avatar } from 'react-native-elements';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';

 const Home =({navigation}) => {


    const chat = () => {
        // Need to go to the proper user 
        navigation.navigate('Chat');
      };
    return (
        <View >
            <Button title="User 1" onPress={chat}/>
            <Button title="User 2" />
            <Button title="User 3" />
        </View>
    )
}

export default Home;