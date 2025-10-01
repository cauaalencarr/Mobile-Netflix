import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LogoImage from "../assets/images/n1 1.png";

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/profiles");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <Image source={LogoImage} style={styles.headerLogoImage} />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email or phone number</Text>
          <TextInput style={styles.input} placeholderTextColor="#aaa" />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholderTextColor="#aaa"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.link}>Need help?</Text>
      <Text style={styles.link}>New to Netflix? Sign up now.</Text>
      <Text style={styles.link}>Sing in is protected by Google reCAPTCHA to ensure  you're not a bot.</Text>
      <Text style={styles.link}>Learn more.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  // Logo e Seta
  backButton: {
    marginRight: 10,
    height: 50,
    justifyContent: "center",
  },
  backArrow: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerLogoImage: {
    width: 150,
    height: 50,
    resizeMode: "contain",
  },

  formContainer: {
    marginTop: 100,
    width: "100%",
    alignItems: "center",
  },
  inputWrapper: {
    width: "90%",
    marginBottom: 16,
    position: "relative",
    justifyContent: "center",
  },
  label: {
    position: "absolute",
    top: 10,
    left: 15,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    zIndex: 1,
  },
  input: {
    backgroundColor: "#333",
    borderRadius: 10,
    color: "#fff",
    fontSize: 16,
    height: 65,
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  button: {
    backgroundColor: "#E50914", // Vermelho Netflix
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 20,
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#aaa",
    marginTop: 16,
    textAlign: "center",
  },
});
