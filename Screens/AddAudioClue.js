// Importa los componentes necesarios de React y React Native
import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image,
    Alert,
    ScrollView, Dimensions,
} from "react-native";
import Navbar from "../Components/Navbar";
import {Audio, InterruptionModeAndroid, InterruptionModeIOS} from "expo-av";
import {useEffect, useState} from "react";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import {Slider} from "@miblanchard/react-native-slider";
import TitleInput from "../Components/TitleInput";
import DescriptionInput from "../Components/DescriptionInput";
import CodeOverlay from "../Components/CodeOverlay";
import ActiveCodeOverlay from "../Components/ActiveCodeOverlay";
import SaveClue from "../Components/SaveClueButton";
import SaveBtn from "../images/Btn_CrearPartida.png";

// Define el componente AddImageClue
const AddAudioClue = () => {
    const [recording, setRecording] = useState(null);
    const [sound, setSound] = useState(null);
    const [isSeeking, setIsSeeking] = useState(false);
    const [shouldPlayAtEndOfSeek, setShouldPlayAtEndOfSeek] = useState(false);
    const [haveRecordingPermissions, setHaveRecordingPermissions] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPlaybackAllowed, setIsPlaybackAllowed] = useState(false);
    const [muted, setMuted] = useState(false);
    const [soundPosition, setSoundPosition] = useState(null);
    const [soundDuration, setSoundDuration] = useState(null);
    const [recordingDuration, setRecordingDuration] = useState(null);
    const [shouldPlay, setShouldPlay] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [shouldCorrectPitch, setShouldCorrectPitch] = useState(true);
    const [volume, setVolume] = useState(1.0);
    const [rate, setRate] = useState(1.0);

    const recordingSettings = Audio.RecordingOptionsPresets.LOW_QUALITY;

    useEffect(() => {
        askForPermissions();
    }, []);

    useEffect(() => {
        if (sound !== null) {
            const interval = setInterval(() => {
                sound.getStatusAsync().then(status => {
                    if (status.isLoaded && status.isPlaying) {
                        setSoundPosition(status.positionMillis);
                    }
                });
            }, 100);
            return () => clearInterval(interval);
        }
    }, [sound]);

    const askForPermissions = async () => {
        const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        setHaveRecordingPermissions(response.status === "granted");
    };

    const updateScreenForSoundStatus = (status) => {
        if (status.isLoaded) {
            setSoundDuration(status.durationMillis ?? null);
            setSoundPosition(status.positionMillis);
            setShouldPlay(status.shouldPlay);
            setIsPlaying(status.isPlaying);
            setRate(status.rate);
            setMuted(status.isMuted);
            setVolume(status.volume);
            setShouldCorrectPitch(status.shouldCorrectPitch);
            setIsPlaybackAllowed(true);
        } else {
            setSoundDuration(null);
            setSoundPosition(null);
            setIsPlaybackAllowed(false);
            if (status.error) {
                console.log(`FATAL PLAYER ERROR: ${status.error}`);
            }
        }
    };

    const updateScreenForRecordingStatus = (status) => {
        if (status.canRecord) {
            setIsRecording(status.isRecording);
            setRecordingDuration(status.durationMillis);
        } else if (status.isDoneRecording) {
            setIsRecording(false);
            setRecordingDuration(status.durationMillis);
            if (!isLoading) {
                stopRecordingAndEnablePlayback();
            }
        }
    };

    const stopPlaybackAndBeginRecording = async () => {
        setIsLoading(true);
        if (sound !== null) {
            await sound.unloadAsync();
            sound.setOnPlaybackStatusUpdate(null);
            setSound(null);
        }
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: InterruptionModeIOS.DoNotMix,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
            playThroughEarpieceAndroid: false,
            staysActiveInBackground: true,
        });

        const newRecording = new Audio.Recording();
        await newRecording.prepareToRecordAsync(recordingSettings);
        newRecording.setOnRecordingStatusUpdate(updateScreenForRecordingStatus);

        setRecording(newRecording);
        await newRecording.startAsync();
        setIsLoading(false);
    };

    const stopRecordingAndEnablePlayback = async () => {
        setIsLoading(true);
        if (!recording) {
            return;
        }
        try {
            await recording.stopAndUnloadAsync();
        } catch (error) {
            if (error.code === "E_AUDIO_NODATA") {
                console.log(
                    `Stop was called too quickly, no data has yet been received (${error.message})`
                );
            } else {
                console.log("STOP ERROR: ", error.code, error.name, error.message);
            }
            setIsLoading(false);
            return;
        }
        const info = await FileSystem.getInfoAsync(recording.getURI() || "");
        console.log(`FILE INFO: ${JSON.stringify(info)}`);
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: InterruptionModeIOS.DoNotMix,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
            playThroughEarpieceAndroid: false,
            staysActiveInBackground: true,
        });
        const {sound: newSound, status} = await recording.createNewLoadedSoundAsync(
            {
                isLooping: true,
                isMuted: muted,
                volume: volume,
                rate: rate,
                shouldCorrectPitch: shouldCorrectPitch,
            },
            updateScreenForSoundStatus
        );
        setSound(newSound);
        setIsLoading(false);
    };

    const onRecordPressed = () => {
        if (isRecording) {
            stopRecordingAndEnablePlayback();
        } else if (!isRecording && !recording) {
            stopPlaybackAndBeginRecording();
        }
    };

    const onPlayPausePressed = () => {
        if (sound !== null) {
            if (isPlaying) {
                sound.pauseAsync();
            } else {
                sound.playAsync();
            }
        }
    };
    const onSeekSliderValueChange = (value) => {
        if (sound !== null && !isSeeking) {
            setIsSeeking(true);
            setShouldPlayAtEndOfSeek(shouldPlay);
            sound.pauseAsync();
        }
    };

    const onSeekSliderSlidingComplete = async (value) => {
        if (sound !== null) {
            setIsSeeking(false);
            const seekPosition = value * (soundDuration || 0);
            if (shouldPlayAtEndOfSeek) {
                sound.playFromPositionAsync(seekPosition);
            } else {
                sound.setPositionAsync(seekPosition);
            }
        }
    };

    const getSeekSliderPosition = () => {
        if (sound !== null && soundPosition !== null && soundDuration !== null) {
            return soundPosition / soundDuration;
        }
        return 0;
    };

    const getMMSSFromMillis = (millis) => {
        const totalSeconds = millis / 1000;
        const seconds = Math.floor(totalSeconds % 60);
        const minutes = Math.floor(totalSeconds / 60);
        const hours = Math.floor(totalSeconds / 3600);

        const padWithZero = (number) => {
            const string = number.toString();
            if (number < 10) {
                return "0" + string;
            }
            return string;
        };
        return padWithZero(hours) + ":" + padWithZero(minutes) + ":" + padWithZero(seconds);
    };

    const getPlaybackTimestamp = () => {
        if (sound !== null && soundPosition !== null && soundDuration !== null) {
            return `${getMMSSFromMillis(soundPosition)}`;
        }
        return "";
    };

    const getRecordingTimestamp = () => {
        if (recordingDuration !== null) {
            return `${getMMSSFromMillis(recordingDuration)}`;
        }
        return `${getMMSSFromMillis(0)}`;
    };
    const getCurrentTimeStamp = () => {
        if (!isPlaybackAllowed || isLoading) {
            return <Text style={styles.timestampText}>{getRecordingTimestamp()}</Text>;
        } else {
            return <Text style={styles.timestampText}>{getPlaybackTimestamp()}</Text>;
        }
    }
    const deleteAudio = async () => {
        if (recording && !isRecording) {
            Alert.alert(
                'Eliminar audio?',
                'Estás seguro que quieres eliminar el audio?',
                [
                    {
                        text: "No",
                        style: "cancel",
                    },
                    {
                        text: "Sí",
                        onPress: async () => {
                            if (isPlaying && sound) {
                                await sound.stopAsync();
                            }
                            if (sound) {
                                await sound.unloadAsync();
                                setSound(null);
                                setIsPlaybackAllowed(false);
                                setSoundDuration(null);
                                setSoundPosition(null);
                            }
                            if (recording) {
                                await FileSystem.deleteAsync(recording.getURI());
                                setRecording(null);
                                setRecordingDuration(null);
                            }
                        }
                    }
                ]
            );
        }
    }
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [code, setCode] = useState("ABC123...");

    const handlePress = () => {
        setIsOverlayVisible(true);
    };

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    const handleAccept = () => {
        setIsOverlayVisible(false);
    };
    return (
        <View style={styles.container}>
            <Navbar title="Crear Pista de audio"/>
            <View style={{padding: 20, paddingBottom: 30, height: "80%"}}>
                <ScrollView>
                    <View style={styles.audioComponent}>
                        <View style={{top: 80}}>
                            <Text style={styles.subHeaderText}>Audio de la pista</Text>
                        </View>
                        {getCurrentTimeStamp()}
                        <TouchableOpacity style={styles.microphoneButton} disabled={isLoading}
                                          onPress={onRecordPressed}>
                            <Image source={require("../images/icon_audio.png")} style={styles.microphoneIcon}/>
                        </TouchableOpacity>
                        <View style={styles.playStopContainer}>
                            <TouchableOpacity onPress={onPlayPausePressed}>
                                <Image source={isPlaying ?
                                    require("../images/pause-icon.png") : require("../images/play-icon.png")}
                                       style={styles.playIcon}/>
                            </TouchableOpacity>
                            <Slider
                                value={getSeekSliderPosition()}
                                onValueChange={onSeekSliderValueChange}
                                onSlidingComplete={onSeekSliderSlidingComplete}
                                disabled={!isPlaybackAllowed || isLoading}
                                containerStyle={styles.playbackContainer}
                            ></Slider>
                            <TouchableOpacity onPress={deleteAudio}>
                                <Image source={require("../images/Delette_Button.png")} style={styles.deleteButton}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.descriptionComponent}>
                        <TitleInput/>
                        <DescriptionInput/>
                    </View>
                    <View style={styles.saveClueComponent}>
                        <CodeOverlay
                            onEditPress={handlePress}
                            code={code}
                            onCodeChange={handleCodeChange}
                            colors={{
                                panelBackground: "#003B2C",
                                qrButton: "#3a7356",
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
            {isOverlayVisible && (
                <View style={styles.overlay}>
                    <ActiveCodeOverlay
                        code={code}
                        onCodeChange={handleCodeChange}
                        onAccept={handleAccept}
                    />
                </View>
            )}
            <SaveClue imgSrc={SaveBtn} text="GUARDAR"/>
        </View>
    )
};

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

// Estilos para el componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6b7695",
        justifyContent: "center", // Centra el contenido verticalmente
    },
    subHeaderText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        top: 10,
    },
    microphoneIcon: {
        height: 50,
        width: 50,
    },
    microphoneButton: {
        backgroundColor: "#ea001a",
        alignSelf: "center",
        top: 150,
        height: 70,
        width: 70,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    durationText: {
        color: "white",
        fontSize: 16,
        left: 20,
        marginTop: 10,
    },
    playbackContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
        marginRight: 10,
        marginLeft: 5,
    },
    playStopContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        position: "absolute",
        top: 320,
        width: "95%",
        alignSelf: "center",
        height: 90,
        paddingVertical: 30,
        marginVertical: 10,
        borderRadius: 30,
        paddingHorizontal: "2%",
    },
    playIcon: {
        height: 50,
        width: 50,
        justifyContent: "center",
        flex: 1,
    },
    deleteButton: {
        height: 50,
        width: 50,
    },
    timestampText: {
        fontSize: 50,
        color: "white",
        alignSelf: "center",
        fontWeight: "bold",
        top: 130,
    },
    overlay: {
        position: "absolute",
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "black",
        opacity: 0.7,
        left: 0,
        top: 0,
        zIndex: 2,
    },
    audioComponent: {
        marginBottom: 100,
        marginTop: -80,
    },
    descriptionComponent: {
        top: 200,
    },
    saveClueComponent: {
        paddingBottom: 20,
        marginTop: 200,
    },
});

// Exporta el componente para que pueda ser usado en otros archivos
export default AddAudioClue;
