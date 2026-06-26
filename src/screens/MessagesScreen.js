import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

export default function MessagesScreen() {
  return (
    <SafeAreaProvider>
      {/* <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}></SafeAreaView> */}
      <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
        <View style={styles.container}>
          {/* Header */}

          <View>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Messages</Text>
              <View style={styles.headerIcons}>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="search" color="#fff" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Feather name="edit" color="#fff" size={20} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Tabs */}
            <View style={styles.tabContainer}>
              <BlurView intensity={20} tint="dark" style={styles.blurTabContent}>
                <TouchableOpacity style={[styles.tab, styles.activeTab]}>
                  <Text style={styles.activeTabText}>Primary</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                  <Text style={styles.inactiveTabText}>Requests</Text>
                </TouchableOpacity>
              </BlurView>
            </View>
          </View>

          {/* Filters */}
          <View style={styles.filterContainer}>
            <BlurView intensity={20} tint="dark" style={styles.blurFilterContent}>
              <TouchableOpacity
                style={[styles.filterBadge, styles.activeFilterBadge]}
              >
                <Text style={styles.activeFilterText}>All</Text>
                <View style={styles.badgeCount}>
                  <Text style={styles.badgeCountText}>2</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.filterBadge}>
                <Feather
                  name="send"
                  color="#a3a3a3"
                  size={14}
                  style={styles.badgeIcon}
                />
                <Text style={styles.filterText}>Direct</Text>
                <View style={styles.badgeCount}>
                  <Text style={styles.badgeCountText}>2</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.filterBadge}>
                <Ionicons
                  name="sparkles-outline"
                  color="#a3a3a3"
                  size={14}
                  style={styles.badgeIcon}
                />
                <Text style={styles.filterText}>Digital Persons</Text>
              </TouchableOpacity>
            </BlurView>
            <BlurView intensity={20} tint="dark" style={styles.sliderButton}>
              <Ionicons name="options-outline" color="#fff" size={18} />
            </BlurView>
          </View>

          {/* Chat List */}
          <ScrollView style={styles.chatList}>
            {/* Evan Nicolini */}
            <View style={styles.chatRow}>
              <View style={styles.avatarContainer}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
                  }}
                  style={styles.avatar}
                />
                <View style={styles.onlineStatus} />
              </View>
              <View style={styles.chatContent}>
                <View style={styles.rowHeader}>
                  <Text style={styles.name}>
                    Evan Nicolini{" "}
                    <MaterialIcons name="verified" color="#2196F3" size={16} />
                  </Text>
                  <Text style={styles.timeStamp}>Now</Text>
                </View>
                <Text style={styles.messageText}>
                  Sounds great, let's do it!
                </Text>
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.chatBtnActive}>
                    <Text style={styles.chatBtnTextActive}>Chat</Text>
                    <View style={styles.innerBadge}>
                      <Text style={styles.innerBadgeText}>2</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.dpBtn}>
                    <Octicons
                      name="sparkles-fill"
                      color="#a3a3a3"
                      size={12}
                      style={styles.btnIcon}
                    />
                    <Text style={styles.dpBtnText}>Evan's DP</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.locationTag}>
                  <FontAwesome
                    name="location-arrow"
                    color="#a3a3a3"
                    size={10}
                    style={styles.locIcon}
                  />
                  <Text style={styles.locationText}>San Diego</Text>
                </View>
              </View>
            </View>

            {/* Emmitt Burk */}
            <View style={styles.chatRow}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
                }}
                style={styles.avatar}
              />
              <View style={styles.chatContent}>
                <View style={styles.rowHeader}>
                  <Text style={styles.name}>
                    Emmitt Burk{" "}
                    <MaterialIcons name="verified" color="#2196F3" size={16} />
                  </Text>
                  <Text style={styles.timeStamp}>1 Hour</Text>
                </View>
                <Text style={styles.messageText}>
                  Can you send the file over?
                </Text>
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.chatBtnActive}>
                    <Text style={styles.chatBtnTextActive}>Chat</Text>
                    <View style={styles.innerBadge}></View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.dpBtn}>
                    <Octicons
                      name="sparkles-fill"
                      color="#a3a3a3"
                      size={12}
                      style={styles.btnIcon}
                    />
                    <Text style={styles.dpBtnText}>Emmitt's DP</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.locationTag}>
                  <FontAwesome
                    name="location-arrow"
                    color="#a3a3a3"
                    size={10}
                    style={styles.locIcon}
                  />
                  <Text style={styles.locationText}>San Diego</Text>
                </View>
              </View>
            </View>

            {/* Chelsea Smithback */}
            <View style={styles.chatRow}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
                }}
                style={styles.avatar}
              />
              <View style={styles.chatContent}>
                <View style={styles.rowHeader}>
                  <Text style={styles.name}>
                    Chelsea Smithback{" "}
                    <MaterialIcons name="verified" color="#2196F3" size={16} />
                  </Text>
                  <Text style={styles.timeStamp}>2 Hours</Text>
                </View>
                <Text style={styles.messageText}>
                  What would you like to ask about Chelsea?
                </Text>
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.dpBtn}>
                    <Text style={styles.chatBtnText}>Chat</Text>
                    <View style={styles.innerBadge}></View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.chatBtnActive}>
                    <Octicons
                      name="sparkles-fill"
                      color="#a3a3a3"
                      size={12}
                      style={styles.btnIcon}
                    />
                    <Text style={styles.chatBtnTextActive}>Chelsea's DP</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.locationTag}>
                  <FontAwesome
                    name="location-arrow"
                    color="#a3a3a3"
                    size={10}
                    style={styles.locIcon}
                  />
                  <Text style={styles.locationText}>San Diego</Text>
                </View>
              </View>
            </View>

            {/* MIRRA Team */}

            <View style={styles.chatRow}>
              <View style={styles.groupAvatarContainer}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
                  }}
                  style={[styles.groupAvatar, styles.avatarTop]}
                />
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
                  }}
                  style={[styles.groupAvatar, styles.avatarBottom]}
                />
              </View>
              <View style={[styles.chatContentLast]}>
                <View style={styles.rowHeader}>
                  <Text style={styles.name}>
                    <MaterialCommunityIcons name="account-multiple" size={16} />{" "}
                    California Explorers
                  </Text>
                  <Text style={styles.timeStamp}>Sunday</Text>
                </View>
                <View style={styles.msgStatusRow}>
                  <Text style={styles.messageText}>
                    <Text style={{ fontWeight: "bold", color: "#fff" }}>
                      You:{" "}
                    </Text>
                    Let's visit the museum first
                  </Text>
                  <Ionicons
                    name="checkmark-done"
                    color="#a3a3a3"
                    size={16}
                    style={styles.checkIcon}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000000", paddingTop: 10 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  safeArea: { flex: 1, backgroundColor: "#000" },
  headerTitle: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  headerIcons: { flexDirection: "row" },
  iconButton: {
    backgroundColor: "#ffffff33",
    padding: 10,
    borderRadius: 12,
    marginLeft: 10,
  },
  tabContainer: {
    backgroundColor: "transparent",
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    overflow: "hidden",
  },
  blurTabContent: {
    flexDirection: "row",
    backgroundColor: "#ffffff33",
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  tab: { flex: 1, paddingVertical: 12, alignItems: "center", borderRadius: 12 },

  activeTab: { backgroundColor: "#FFFFFF0D" },
  activeTabText: { color: "#fff", fontWeight: "600" },
  inactiveTabText: { color: "#737373", fontWeight: "600" },

  //////////////////////////////////////////////////////
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 20,
    gap: 8,
    justifyContent: "space-between",
  },

  blurFilterContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    overflow: "hidden",
  },
  tabContainer2: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#ffffff33",
    paddingVertical: 4,
    paddingHorizontal: 4,
    width: "auto",
    borderWidth: 1,

    borderRadius: 12,
    padding: 0.5,
  },
  filterScroll: {
    alignItems: "center",
    padding: 1.5,
    justifyContent: "center",
  },
  filterBadge: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 8,

    paddingHorizontal: Platform.OS === "ios" ? 15 : 10,
    borderRadius: 12,
    marginRight: 4,
  },
  activeFilterBadge: { backgroundColor: "#FFFFFF0D" },
  badgeIcon: { marginRight: 4 },
  filterText: { color: "#a3a3a3", fontSize: 13, fontWeight: "500" },
  activeFilterText: { color: "#fff", fontSize: 13, fontWeight: "500" },
  badgeCount: {
    backgroundColor: "#D7FD1E",
    borderRadius: 50,
    padding: 4,
    marginLeft: 6,
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeCountText: { color: "#000", fontSize: 11, fontWeight: "bold" },
  sliderButton: {
    backgroundColor: "#ffffff33",
    padding: 13,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    overflow: "hidden",
  },

  ////////////////////////////////////

  chatList: { paddingHorizontal: 16 },
  chatRow: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  avatarContainer: { position: "relative" },
  avatar: {
    width: 80,
    height: 105,
    borderRadius: 16,
    backgroundColor: "#262626",
  },
  onlineStatus: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#d4ff00",
    borderWidth: 2,
    borderColor: "#000",
  },
  chatContent: {
    flex: 1,
    marginLeft: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: "#FFFFFF33",
  },
  chatContentLast: {
    flex: 1,
    marginLeft: 16,
  },

  rowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  name: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  timeStamp: { color: "#737373", fontSize: 12 },
  messageText: { color: "#a3a3a3", fontSize: 14, marginBottom: 10, flex: 1 },
  actionButtons: { flexDirection: "row", marginBottom: 10 },
  chatBtnActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF33",
    paddingVertical: 6,
    paddingHorizontal: Platform.OS === "ios" ? 40 : 32,
    borderRadius: 10,
    borderColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    marginRight: 8,
  },
  chatBtn: {
    backgroundColor: "#141414",
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginRight: 8,
  },
  chatBtnTextActive: { color: "#fff", fontSize: 12, fontWeight: "600" },
  chatBtnText: { color: "#a3a3a3", fontSize: 12, fontWeight: "600" },
  innerBadge: {
    backgroundColor: "#d4ff00",
    borderRadius: 8,
    paddingHorizontal: 5,
    marginLeft: 6,
  },
  innerBadgeText: { color: "#000", fontSize: 10, fontWeight: "bold" },
  dpBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF0D",
    paddingVertical: 6,
    paddingHorizontal: Platform.OS === "ios" ? 40 : 32,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  dpBtnActive: { backgroundColor: "#141414", flex: 1.3 },
  btnIcon: { marginRight: 4 },
  dpBtnText: { color: "#a3a3a3", fontSize: 12 },
  locationTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff33",
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  locIcon: { marginRight: 4 },
  locationText: { color: "#a3a3a3", fontSize: 11 },
  msgStatusRow: { flexDirection: "row", alignItems: "center" },
  checkIcon: { marginLeft: 8, marginBottom: 10 },
  groupAvatarContainer: { width: 80, height: 95, position: "relative" },
  groupAvatar: {
    width: 45,
    height: 55,
    borderRadius: 12,
    position: "absolute",
  },
  avatarTop: { top: 0, left: 0, zIndex: 1 },
  avatarBottom: {
    bottom: 0,
    right: 0,
    zIndex: 2,
    borderWidth: 2,
    borderColor: "#000",
  },
});
