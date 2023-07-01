import React from 'react';
import { View, Text, StyleSheet,Linking ,TouchableOpacity} from 'react-native';

const Phone = () => {
        const openWebsite = () => {
          const url = 'https://sancharsaathi.gov.in/'; 
          Linking.openURL(url);
        };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Saanchar Saathi</Text>
      <Text style={styles.heading2}>Know Your Mobile Connection:</Text>
      <Text style={styles.description}>
      • Visit the official Sanchar Saathi website. {"\n"}
        • Fill in the required information, including your 10 Digit Phone Number,Captcha. {"\n"}
        • Now, a OTP will be sent to your Phone Number by which u can login.{"\n"}
        • Than u can see how many Connections are present under your number.{"\n"}
     </Text>
     <Text style={styles.heading2}>How to block your lost phone :</Text>
      <Text style={styles.description}>
      • Head to the Sanchar Saathi website.{"\n"}
      • Scroll down to access the menu to block stolen or lost devices.{"\n"}
      • Enter the device information, such as contact number, IMEI number, device brand, and model.{"\n"}
      • You will have to mention the location where you lost your device and the police complaint number.{"\n"}
      • Enter your personal information and upload an identity card (Aadhaar or PAN).{"\n"}
      • Submit the request.{"\n"}


      </Text>
        <View style = {styles.link}>
        <TouchableOpacity onPress={openWebsite}>
        <Text style={styles.link}>Check Out The Website</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    //alignItems: 'center',
   // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading2:{
    fontSize: 20,
    //fontWeight: 'bold',
    marginBottom: 16,

  },
  link:{
paddingTop:10,
fontWeight:'bold',
fontSize:18,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingTop:100,
  },
  description: {
    fontSize: 16,
    //textAlign: 'center',
    color: '#333',
    backgroundColor:"#FFF6F6",
    margin:5,
  },
});

export default Phone;