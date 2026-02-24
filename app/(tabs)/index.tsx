import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>DocuMind</Text>
        <Text style={styles.subtitle}>
          Scan. Extract. Understand.
        </Text>
      </View>

      {/* Main Action */}
      <TouchableOpacity
        style={styles.scanButton}
        activeOpacity={0.8}
        onPress={() => router.push("/scan")}
      >
        <Ionicons name="camera-outline" size={28} color="#fff" />
        <Text style={styles.scanText}>Scan Document</Text>
      </TouchableOpacity>

      {/* Secondary Actions */}
      <View style={styles.secondaryContainer}>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/paste")}
        >
          <Ionicons name="document-text-outline" size={22} color="#2563EB" />
          <Text style={styles.secondaryText}>Paste Text</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/history")}
        >
          <Ionicons name="time-outline" size={22} color="#2563EB" />
          <Text style={styles.secondaryText}>History</Text>
        </TouchableOpacity>
      </View>

      {/* Privacy Note */}
      <View style={styles.footer}>
        <Ionicons name="shield-checkmark-outline" size={16} color="#6B7280" />
        <Text style={styles.privacyText}>
          Images are not stored. Only extracted text is processed.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  header: {
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 4,
  },
  scanButton: {
    backgroundColor: "#2563EB",
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  scanText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  secondaryContainer: {
    marginTop: 30,
  },
  secondaryButton: {
    backgroundColor: "#EFF6FF",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },
  secondaryText: {
    fontSize: 16,
    color: "#2563EB",
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 20,
  },
  privacyText: {
    fontSize: 12,
    color: "#6B7280",
  },
});