import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

/**
 * NOTE:
 * This file only captures image and extracts text.
 * Image is NEVER stored.
 * Only extracted text is passed forward.
 */

export default function ScanScreen() {
  const cameraRef = useRef<Camera | null>(null);

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<CameraType>("back");

  /* ================= PERMISSIONS ================= */

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View style={styles.center}><ActivityIndicator /></View>;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.center}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  /* ================= CAPTURE FUNCTION ================= */

  const handleCapture = async () => {
    if (!cameraRef.current) return;

    try {
      setLoading(true);

      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.7,
        base64: true, // Required for OCR API
      });

      if (!photo.base64) {
        throw new Error("Image capture failed");
      }

      /**
       * ================= OCR PROCESS =================
       * Replace this with:
       * - Google Vision API
       * - Tesseract
       * - Your backend OCR service
       */

      const extractedText = await fakeOCR(photo.base64);

      // Navigate forward with extracted text
      router.replace({
        pathname: "/result",
        params: { text: extractedText },
      });

    } catch (error) {
      Alert.alert("Error", "Failed to process document");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  /* ================= TEMP OCR MOCK ================= */

  const fakeOCR = async (base64: string): Promise<string> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return "Sample extracted text from document.\nReplace with real OCR integration.";
  };

  /* ================= UI ================= */

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => (cameraRef.current = ref)}
      />

      <View style={styles.controls}>
        {/* Flip Camera */}
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() =>
            setType((current) =>
              current === "back" ? "front" : "back"
            )
          }
        >
          <Ionicons name="camera-reverse-outline" size={28} color="#fff" />
        </TouchableOpacity>

        {/* Capture */}
        <TouchableOpacity
          style={styles.captureButton}
          onPress={handleCapture}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Ionicons name="scan-circle-outline" size={60} color="#fff" />
          )}
        </TouchableOpacity>

        {/* Cancel */}
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.back()}
        >
          <Ionicons name="close-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  controls: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  captureButton: {
    backgroundColor: "rgba(37,99,235,0.9)",
    borderRadius: 50,
    padding: 12,
  },
  iconButton: {
    padding: 12,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});