import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

const CoverImgSelector = () => {
    const [image, setImage] = useState(null);

   

   /* 
    const openCameraAndSetImage = async () => {
        try {
            const image = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [16, 9],
                quality: 0.5,
                });

                if (!image.cancelled) {
                    // dummy fixing ImagePicker bug in EXPO SDK46
                    //TODO remove this bugfix with next EXPO SDK release
                    const dummyManipulationResult = await ImageManipulator.manipulateAsync(
                        image.uri,
                        [],
                        {}
                    );
                    //end of dummy fix...
            
                    // setPickedImage(image.uri);
                     props.onImageTaken(image.uri);
            
                    setImage(dummyManipulationResult.uri);
                    props.onImageTaken(dummyManipulationResult.uri);
                }
         
         
         
         const cameraResponse = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          console.log(cameraResponse);
      
          if (!cameraResponse.cancelled) {
            setImage(cameraResponse.uri);
          }
        } catch (error) {
          console.error('Error al tomar la foto desde la cámara:', error);
        }
      };*/

    
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
                text: 'CANCEL',
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
      {image && <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }}  resizeMode="cover"/>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    coverImgContainer: {
        width: '100%',
    },
    lbl: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        paddingBottom: 15,
    },
    container: {
        width: '100%',
        backgroundColor: '#C0C0C0',
        borderRadius: 20,
        overflow: 'hidden',
        height: 180,
        //paddingTop: 60,
       // paddingBottom: 60,
        bottom: 10
    },
})

export default CoverImgSelector;