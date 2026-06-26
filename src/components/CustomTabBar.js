import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const PROFILE_IMAGE =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=250";

export default function CustomTabBar({ state, navigation }) {
  if (!state || !state.routes) {
    return (
      <View style={styles.outerContainer}>
        <BlurView intensity={24} tint="dark" style={styles.tabBarContainer} />
      </View>
    );
  }

  const tabIcons = [
    { type: "avatar", badgeText: "2" },
    { type: "icon", name: "people-outline", size: 22, badgeText: "2" },
    {
      type: "icon",
      name: "paper-plane-outline",
      size: 21,
      badgeText: "12",
      style: styles.planeIconFix,
    },
    { type: "icon", name: "chatbubble-outline", size: 21, badgeText: "2" },
    { type: "icon", name: "search-outline", size: 21, badgeText: null },
  ];

  return (
    <View style={styles.outerContainer}>
      <BlurView intensity={24} tint="dark" style={styles.tabBarContainer}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const iconConfig = tabIcons[index] || {
            type: "icon",
            name: "search-outline",
            size: 21,
            badgeText: null,
          };

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              style={isFocused ? styles.tabItemActive : styles.tabItem}
              onPress={onPress}
              activeOpacity={0.8}
            >
              {iconConfig.type === "avatar" ? (
                <View style={styles.avatarWrapper}>
                  <Image source={{ uri: PROFILE_IMAGE }} style={styles.avatar} />
                  {iconConfig.badgeText ? (
                    <View style={styles.badgeContainer}>
                      <View style={styles.badgeGlow} />
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>{iconConfig.badgeText}</Text>
                      </View>
                    </View>
                  ) : null}
                </View>
              ) : (
                <View style={styles.iconWrapper}>
                  <Ionicons
                    name={iconConfig.name}
                    size={iconConfig.size}
                    color={isFocused ? "#ffffff" : "#808080"}
                    style={iconConfig.style}
                  />
                  {iconConfig.badgeText ? (
                    <View style={styles.badgeContainer}>
                      <View style={styles.badgeGlow} />
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>{iconConfig.badgeText}</Text>
                      </View>
                    </View>
                  ) : null}
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 18,
    alignItems: "center",
    zIndex: 20,
  },
  tabBarContainer: {
    flexDirection: "row",
    height: 76,
    width: "100%",
    borderRadius: 32,
    backgroundColor: "rgba(10, 10, 10, 0.9)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  tabItem: {
    flex: 1,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    marginHorizontal: 2,
  },
  tabItemActive: {
    flex: 1,
    height: 56,
    borderRadius: 24,
    backgroundColor: "rgba(255, 255, 255, 0.09)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
    marginHorizontal: 2,
  },
  avatarWrapper: {
    width: 38,
    height: 38,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
  },
  iconWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
  planeIconFix: {
    transform: [{ rotate: "15deg" }],
    marginLeft: -1,
  },
  badgeContainer: {
    position: "absolute",
    top: -3,
    right: -6,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeGlow: {
    position: "absolute",
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: "#D8FF2E",
    opacity: 0.35,
    transform: [{ scale: 1.35 }],
  },
  badge: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: "#D8FF2E",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontSize: 9,
    fontWeight: "700",
    color: "#000000",
    lineHeight: 10,
  },
});
