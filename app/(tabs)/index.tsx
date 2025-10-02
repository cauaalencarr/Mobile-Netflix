import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ListRenderItemInfo,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import { featuredMovie, homeMovies } from "../../data/homeMovies";
import { movieSections } from "../../data/movies";

import LogoNetflix from "../../assets/images/logonetflix2.png";
import SearchIcon from "../../assets/images/lupa.png";
import ProfileIcon from "../../assets/images/perfil azul escuro.png";
import PlayIcon from "../../assets/images/Polygon 1.png";

const { width } = Dimensions.get("window");

interface Movie {
  id: string;
  poster: any;
}

interface MovieSection {
  title: string;
  data: Movie[];
}

const renderMovieItem = ({ item }: ListRenderItemInfo<Movie>) => (
  <TouchableOpacity style={styles.movieItem}>
    <Image source={item.poster} style={styles.poster} />
  </TouchableOpacity>
);

const renderSection = (section: MovieSection) => (
  <View style={styles.section} key={section.title}>
    <Text style={styles.sectionTitle}>{section.title}</Text>
    <FlatList
      horizontal
      data={section.data}
      renderItem={renderMovieItem}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.sectionList}
    />
  </View>
);

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={featuredMovie.poster}
          style={styles.heroImageBackground}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent", "rgba(0,0,0,0.9)"]}
            style={styles.gradient}
          >
            <View style={styles.header}>
              <TouchableOpacity>
                <Image source={LogoNetflix} style={styles.logo} />
              </TouchableOpacity>

              <View style={styles.headerIcons}>
                <TouchableOpacity>
                  <Image source={SearchIcon} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image source={ProfileIcon} style={styles.profileIcon} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.navLinksContainer}>
              <Text style={styles.navLinkText}>TV Shows</Text>
              <Text style={styles.navLinkText}>Movies</Text>
              <Text style={styles.navLinkText}>Categories</Text>
            </View>

            <View style={styles.heroContent}>
              <Text style={styles.heroDescription}>
                Charming  Feel-Good  Dramedy  Movie
              </Text> 
              <View style={styles.heroButtons}>
                <TouchableOpacity style={styles.myListButton}>
                  <Text style={styles.myListIcon}>+</Text>
                  <Text style={styles.myListText}>My List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.playButton}>
                  <Image source={PlayIcon} style={styles.playIcon} />
                  <Text style={styles.playButtonText}>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.infoButton}>
                  <Text style={styles.infoIcon}>ⓘ</Text>
                  <Text style={styles.infoText}>More Info</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New Releases</Text>
          <FlatList
            horizontal
            data={homeMovies}
            renderItem={renderMovieItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionList}
          />
        </View>

        {movieSections.map(renderSection)}

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  heroImageBackground: {
    width: "100%",
    height: 600,
    justifyContent: "space-between",
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginLeft: 20,
  },
  navLinksContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 1,
    paddingVertical: 10,
    marginTop: -310,
    marginBottom: 20,
    width: "100%",
    alignSelf: "center",
  },
  navLinkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  heroContent: {
    alignItems: "center",
    paddingBottom: 30,
  },
  heroDescription: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  heroButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    marginTop: 20,
  },
  myListButton: {
    alignItems: "center",
  },
  myListIcon: {
    color: "#fff",
    fontSize: 28,
  },
  myListText: {
    color: "#ccc",
    fontSize: 12,
  },
  infoButton: {
    alignItems: "center",
  },
  infoIcon: {
    color: "#fff",
    fontSize: 24,
  },
  infoText: {
    color: "#ccc",
    fontSize: 12,
  },
  playButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  playIcon: {
    width: 12,
    height: 12,
    resizeMode: "contain",
    marginRight: 8,
  },
  playButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  section: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 15,
  },
  sectionList: {
    paddingHorizontal: 10,
  },
  movieItem: {
    marginRight: 8,
  },
  poster: {
    width: 110,
    height: 165,
    borderRadius: 6,
    resizeMode: "cover",
  },
});
