import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const Malacious = ({navigation}) => {
  const [url, setUrl] = useState("");
  const [vulnerabilities, setVulnerabilities] = useState([]);

  const scanWebsite = () => {
    // Perform vulnerability scanning logic here
    // This is where you would integrate with a vulnerability scanning library or API
    // For simplicity, let's assume vulnerabilities are returned as an array of objects
    const mockVulnerabilities = [
      {
        id: 1,
        title: "Cross-Site Scripting (XSS)",
        explanation:
          "XSS allows an attacker to execute malicious scripts on web pages viewed by other users.",
      },
      {
        id: 2,
        title: "SQL Injection",
        explanation:
          "SQL Injection allows an attacker to manipulate a database by injecting malicious SQL code.",
      },
      {
        id: 3,
        title: "Insecure Direct Object References",
        explanation:
          "Insecure Direct Object References allow an attacker to access unauthorized resources or data.",
      },
    ];

    setVulnerabilities(mockVulnerabilities);
  };

  const handleVulnerabilityPress = (vulnerability) => {
    Alert.alert(vulnerability.title, vulnerability.explanation, [
      { text: "Close", onPress: () => {} },
    ]);
  };

  const handleClear = () => {
    setUrl("");
    setVulnerabilities([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <MaskedView
          maskElement={
            <Text
              style={[styles.headerTitle, { backgroundColor: "transparent" }]}
            >
              Malacious Scanner
            </Text>
          }
        >
          <LinearGradient
            colors={["red", "black"]}
            start={[0.5, 0]}
            end={[1, 1]}
            style={styles.yellowHeader}
          >
            <Text style={[styles.headerTitle, { opacity: 0 }]}> Malacious Scanner</Text>
          </LinearGradient>
        </MaskedView>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter Link"
        onChangeText={(text) => setUrl(text)}
        value={url}
      />

      <TouchableOpacity onPress={scanWebsite} style={styles.scan}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          Scan
        </Text>
      </TouchableOpacity>

      <ScrollView style={styles.vulnerabilitiesContainer}>
        <Text style={styles.vulnerabilitiesTitle}>Vulnerabilities:</Text>
        {vulnerabilities.map((vulnerability) => (
          <TouchableOpacity
            key={vulnerability.id}
            style={styles.vulnerabilityItem}
            onPress={() => handleVulnerabilityPress(vulnerability)}
          >
            <Text style={styles.vulnerabilityTitle}>{vulnerability.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {vulnerabilities.length > 0 && (
        <>
          <TouchableOpacity onPress={handleClear} style={styles.clear}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>Clear</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    height: 70,
    backgroundColor: "#fff",
    elevation: 50,
  },
  headerTitle: {
    fontSize: 30,
    color: "#000",
    marginTop: 18,
    marginLeft:40,
    alignSelf:"center"
  },
  headerMenuIcon: {
    color: "#000",
    top: 10,
    marginLeft: 20,
  },
  yellowHeader: {
    textAlign: "center",
    marginTop: -5,
    textAlign:"center"
  },

  input: {
    height: 40,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 25,
    width: 300,
    alignSelf: "center",
    padding:5,
    borderRadius:10
  },
  scan: {
    backgroundColor: "black",
    width: 100,
    borderRadius: 20,
    alignSelf: "center",
    padding: 5,
    height: 40,
  },
  vulnerabilitiesContainer: {
    marginTop: 20,
    marginLeft:10
  },
  vulnerabilitiesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  vulnerabilityItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  vulnerabilityTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  clear:{
    backgroundColor: "black",
    width: 200,
    borderRadius: 20,
    alignSelf: "center",
    padding: 5,
    height: 40,
  }
});

export default Malacious;
