import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CoverImgSelector = () => {
    const [image, setImage] = useState(null);

    
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

   
    const handleImagePress = async () => {
        Alert.alert('Selector de imagen', '', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'GALERIA',
              onPress:pickImage,
               
              },
            ])
          
        }

  return (
    <View style={styles.coverImgContainer}>
      <Text style={styles.lbl}>Imagen de portada (opcional)</Text>
      <TouchableOpacity onPress={handleImagePress} style={styles.container}>
      {image && <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    coverImgContainer: {
        width: '100%',
        height: '25%',
       // backgroundColor: 'red',
    },
    lbl: {
        fontSize: 16,
        padding: 10,
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'grey',
        borderRadius: 20,
        overflow: 'hidden',
    },
})

export default CoverImgSelector;