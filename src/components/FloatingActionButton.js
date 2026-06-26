import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const FloatingActionButton = ({ icon, onPress, style, disabled = false }) => {
  return (
    <TouchableOpacity
      style={[styles.fab, style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.icon}>{icon}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  icon: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  disabled: {
    opacity: 0.5,
  },
});

export default FloatingActionButton;
