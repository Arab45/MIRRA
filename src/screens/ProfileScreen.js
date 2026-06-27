import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  Octicons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Video } from "expo-av";
import { StatusBar } from "expo-status-bar";

export default function ProfileScreen() {
  const videoRef = useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {/* Top Action Bar */}
            <View style={styles.actionBar}>
              <TouchableOpacity style={styles.actionBtnLarge}>
                <Octicons
                  name="sparkles-fill"
                  color="#fff"
                  size={16}
                  style={styles.btnIcon}
                />
                <Text style={styles.actionBtnText}>Train AI Chat</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionBtnSquare}>
                <Feather name="edit-2" color="#fff" size={16} />
                <Text style={styles.squareBtnText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconOnlyBtn}>
                <Ionicons name="options-outline" color="#fff" size={18} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconOnlyBtn}>
                <Ionicons name="notifications-outline" color="#fff" size={18} />
                <View style={styles.notifBadge}>
                  <Text style={styles.notifBadgeText}>2</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconOnlyBtn}>
                <Feather name="more-vertical" color="#fff" size={18} />
              </TouchableOpacity>
            </View>

            {/* Hero Video Card Frame */}
            <View style={styles.heroCardContainer}>
              <Video
                ref={videoRef}
                source={require("../../assets/hf_20260407_025034_6566b3a9-2145-4858-ab53-fcf9e27d5c9b.mp4")}
                style={styles.heroVideo}
                resizeMode="cover"
                isLooping
                isMuted
                shouldPlay
              />
              <View style={styles.heroOverlay}>
                {/* Horizontal Metrics Bar Layout */}
                <View style={styles.metricsWrapper}>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.metricsContainer}
                  >
                    {/* Card 1 */}
                    <View style={styles.metricCard}>
                      <Text style={styles.metricNumber}>64</Text>
                      <View style={styles.metricMeta}>
                        <Text style={styles.metricLabel}>PROFILE VIEWS</Text>
                        <Text style={styles.metricSubtext}>
                          Last 7 days <Text style={styles.trendUp}>↗ 20%</Text>
                        </Text>
                      </View>
                    </View>

                    {/* Card 2 */}
                    <View style={styles.metricCard}>
                      <Text style={styles.metricNumber}>35</Text>
                      <View style={styles.metricMeta}>
                        <Text style={styles.metricLabel}>DP CHATS</Text>
                        <Text style={styles.metricSubtext}>
                          Last 7 days <Text style={styles.trendUp}>↗ +14%</Text>
                        </Text>
                      </View>
                    </View>

                    {/* Card 3 */}
                    <View style={styles.metricCard}>
                      <Text style={styles.metricNumber}>18</Text>
                      <View style={styles.metricMeta}>
                        <Text style={styles.metricLabel}>CONNECTIONS</Text>
                        <Text style={styles.metricSubtext}>Last 7 days</Text>
                      </View>
                    </View>
                  </ScrollView>
                </View>

                {/* Bottom Overlay Elements */}
                <View style={styles.overlayBottomWrapper}>
                  {/* Location Badge */}
                  <View style={styles.locationContainer}>
                    <BlurView
                      intensity={40}
                      tint="light"
                      style={styles.locationBadge}
                    >
                      <View style={styles.greenDot} />
                      <FontAwesome
                        name="location-arrow"
                        color="#fff"
                        size={12}
                        style={{ marginRight: 6 }}
                      />
                      <Text style={styles.locationText}>
                        Cardiff-by-the-Sea, Encinitas, CA
                      </Text>
                    </BlurView>
                    <BlurView
                      intensity={40}
                      tint="light"
                      style={styles.locFilterBtn}
                    >
                      <Ionicons name="options-outline" color="#fff" size={14} />
                    </BlurView>
                  </View>

                  {/* Profile Info Overlay Card */}
                  <View style={styles.profileOverlayCard}>
                    <BlurView
                      intensity={40}
                      tint="light"
                      style={styles.profileMainRow}
                    >
                      <Image
                        source={{
                          uri: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100",
                        }}
                        style={styles.miniAvatar}
                      />
                      <View style={styles.profileMeta}>
                        <Text style={styles.profileName}>
                          Ariana Luterman{" "}
                          <MaterialIcons
                            name="verified"
                            color="#2196F3"
                            size={14}
                          />
                        </Text>
                        <Text style={styles.profileTitle}>
                          Triathlete, Creator
                        </Text>
                      </View>
                      <View style={styles.instagramBadge}>
                        <View style={styles.instaTextContainer}>
                          <Text style={styles.instaCount}>72.5k</Text>
                          <Text style={styles.instaLabel}>Followers</Text>
                        </View>
                        <Image
                          source={require("../../assets/IG.png")}
                          style={{ height: 15, width: 15 }}
                        />
                      </View>
                    </BlurView>

                    {/* Sub-actions Row */}
                    <View style={styles.cardActionsRow}>
                      <BlurView
                        intensity={40}
                        tint="light"
                        style={styles.subActionBtn}
                      >
                        <TouchableOpacity style={styles.innerTouchable}>
                          <Ionicons
                            name="eye-outline"
                            color="#fff"
                            size={16}
                            style={{ marginRight: 6 }}
                          />
                          <Text style={styles.subActionText}>View Profile</Text>
                        </TouchableOpacity>
                      </BlurView>

                      <BlurView
                        intensity={40}
                        tint="light"
                        style={styles.subActionBtn}
                      >
                        <TouchableOpacity style={styles.innerTouchable}>
                          <Ionicons
                            name="copy-outline"
                            color="#fff"
                            size={16}
                            style={{ marginRight: 6 }}
                          />
                          <Text style={styles.subActionText}>All Cards</Text>
                        </TouchableOpacity>
                      </BlurView>

                      <BlurView
                        intensity={40}
                        tint="light"
                        style={styles.subActionBtn}
                      >
                        <TouchableOpacity style={styles.innerTouchable}>
                          <Feather
                            name="share"
                            color="#fff"
                            size={16}
                            style={{ marginRight: 6 }}
                          />
                          <Text style={styles.subActionText}>Share</Text>
                        </TouchableOpacity>
                      </BlurView>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* Footer Stacked Deck Section */}
            <View style={styles.footerSection}>
              <View style={styles.footerHeader}>
                <Text style={styles.footerTitle}>
                  DP Conversations <Text style={styles.footerCount}>280</Text>
                </Text>
                <TouchableOpacity style={styles.seeAllBtn}>
                  <Text style={styles.seeAllText}>See all</Text>
                  <Ionicons name="chevron-forward" color="#a3a3a3" size={14} />
                </TouchableOpacity>
              </View>

              <View style={styles.cardcontainer}>
                <BlurView
                  intensity={40}
                  tint="light"
                  style={[styles.card, styles.bgCardBottom]}
                />
                <BlurView
                  intensity={40}
                  tint="light"
                  style={[styles.card, styles.bgCardMiddle]}
                />
                <BlurView
                  intensity={40}
                  tint="dark"
                  style={[styles.card, styles.mainCard]}
                >
                  <View style={styles.contentRow}>
                    <View style={styles.greenDot} />
                    <Text style={styles.cardtext} numberOfLines={1}>
                      <Text style={styles.boldText}>Anonymous Ask: </Text>
                      What does Ariana do for work?
                    </Text>
                  </View>
                </BlurView>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#000" },
  scrollView: { flex: 1 },
  scrollContent: { flexGrow: 1 },
  container: { backgroundColor: "#000", paddingBottom: 20 },

  actionBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    marginVertical: 16,
    justifyContent: "space-between",
  },
  actionBtnLarge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff33",
    paddingVertical: 10,
    paddingHorizontal: Platform.OS === "ios" ? 14 : 12,
    borderRadius: 12,
  },
  btnIcon: { marginRight: 6 },
  actionBtnText: { color: "#fff", fontSize: 13, fontWeight: "600" },
  actionBtnSquare: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF1A",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  squareBtnText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
    marginLeft: 6,
  },
  iconOnlyBtn: {
    backgroundColor: "#FFFFFF1A",
    width: 38,
    height: 38,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  notifBadge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#d4ff00",
    borderRadius: 8,
    height: 14,
    width: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  notifBadgeText: { color: "#000", fontSize: 9, fontWeight: "bold" },

  metricsWrapper: { width: "100%", marginTop: 4 },
  metricsContainer: { paddingHorizontal: 4, gap: 8 },
  metricCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  metricNumber: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 8,
  },
  metricMeta: { justifyContent: "center" },
  metricLabel: {
    color: "#a3a3a3",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  metricSubtext: { color: "#737373", fontSize: 9, marginTop: 1 },
  trendUp: { color: "#d4ff00", fontWeight: "bold" },

  heroCardContainer: {
    marginHorizontal: 12,
    marginBottom: 16,
    height: 560,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#1a1a1a",
  },
  heroVideo: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "space-between",
    padding: 14,
    flex: 1,
  },
  overlayBottomWrapper: { gap: 12 },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    justifyContent: "center",
  },
  locationBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    overflow: "hidden",
  },
  greenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#d4ff00",
    marginRight: 6,
  },
  locationText: { color: "#fff", fontSize: 12, fontWeight: "500" },
  locFilterBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    overflow: "hidden",
  },

  profileOverlayCard: { gap: 8 },
  profileMainRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 20,
    overflow: "hidden",
  },
  miniAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#262626",
  },
  profileMeta: { flex: 1, marginLeft: 10 },
  profileName: { color: "#fff", fontSize: 15, fontWeight: "700" },
  profileTitle: { color: "#a3a3a3", fontSize: 11, marginTop: 1 },
  instagramBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  instaTextContainer: { alignItems: "flex-end", marginRight: 6 },
  instaCount: { color: "#fff", fontSize: 12, fontWeight: "700" },
  instaLabel: { color: "#a3a3a3", fontSize: 9 },

  cardActionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
  },
  subActionBtn: {
    flex: 1,
    borderRadius: 14,
    overflow: "hidden",
  },
  innerTouchable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  subActionText: { color: "#fff", fontSize: 12, fontWeight: "600" },

  footerSection: { paddingHorizontal: 16, marginTop: 10 },
  footerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  footerTitle: { color: "#737373", fontSize: 14, fontWeight: "600" },
  footerCount: { color: "#fff", fontWeight: "normal", marginLeft: 6 },
  seeAllBtn: { flexDirection: "row", alignItems: "center" },
  seeAllText: { color: "#a3a3a3", fontSize: 13, marginRight: 2 },

  cardcontainer: {
    width: "100%",
    height: 75,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000",
  },
  card: {
    height: 54,
    borderRadius: 16,
    position: "absolute",
    overflow: "hidden",
  },
  bgCardBottom: {
    backgroundColor: "rgba(255,255,255,0.05)",
    width: "88%",
    top: 12,
    zIndex: 1,
  },
  bgCardMiddle: {
    backgroundColor: "rgba(255,255,255,0.1)",
    width: "94%",
    top: 6,
    zIndex: 2,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  mainCard: {
    width: "100%",
    top: 0,
    zIndex: 3,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },
  contentRow: { flexDirection: "row", alignItems: "center" },
  cardtext: { color: "#a3a3a3", fontSize: 13, flex: 1 },
  boldText: { color: "#fff", fontWeight: "600" },
});
