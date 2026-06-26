import { Audio } from "expo-av";
import axios from "axios";

const OPENAI_API_KEY =
  "Ysk-proj-p3xsVSmJPclDWn3_L8PR68iIF17PMrCRyWY2SMihS-oXbAlnrJrIiH-ZgvRZNc1RLGmFQ1ftFkT3BlbkFJIfy8sQQEi4GwDNZIzuXWNlh0X6Nzh0NgPINBg76OZneCppgQKl1x-nEbDHQM-zexz2jjeJpNYA"; // Replace with your API key

export const startVoiceRecording = async () => {
  try {
    // Request permissions
    const { status } = await Audio.requestPermissionsAsync();
    if (status !== "granted") {
      throw new Error("Permission to access microphone was denied");
    }

    // Configure audio mode
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    // Start recording
    const recording = new Audio.Recording();
    await recording.prepareToRecordAsync(
      Audio.RecordingOptionsPresets.HIGH_QUALITY
    );
    await recording.startAsync();

    // Record for 5 seconds (you can adjust this or add a stop button)
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Stop recording
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();

    // Send to OpenAI Whisper API
    const transcription = await transcribeAudio(uri);
    return transcription;
  } catch (error) {
    console.error("Error in voice recording:", error);
    throw error;
  }
};

const transcribeAudio = async (uri) => {
  try {
    const formData = new FormData();
    formData.append("file", {
      uri,
      type: "audio/m4a",
      name: "recording.m4a",
    });
    formData.append("model", "whisper-1");

    const response = await axios.post(
      "https://api.openai.com/v1/audio/transcriptions",
      formData,
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data.text;
  } catch (error) {
    console.error("Error transcribing audio:", error);
    throw error;
  }
};
