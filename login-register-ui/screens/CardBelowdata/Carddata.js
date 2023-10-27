import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Carddata = () => {
  return (
    <View style={styles.mainContainer}>
    <Text style={styles.mainText}>Apply For The Fresh Loan</Text>
    <View style={styles.parentContainer}>
      <View style={styles.leftChildContainer}>
        <Text style={styles.text}>Karan</Text>
      </View>
      <View style={styles.rightChildContainer}>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText2}>Apply Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.parentContainer}>
      <View style={styles.leftChildContainer}>
        <Text style={styles.text}>HDFCB</Text>
      </View>
      <View style={styles.rightChildContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText2}>Apply Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.parentContainer}>
      <View style={styles.leftChildContainer}>
        <Text style={styles.text}>AuBank</Text>
      </View>
      <View style={styles.rightChildContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText2}>Apply Now</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.parentContainer}>
    <View style={styles.leftChildContainer}>
      <Text style={styles.text}>HDFCB</Text>
    </View>
    <View style={styles.rightChildContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText2}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.parentContainer}>
  <View style={styles.leftChildContainer}>
    <Text style={styles.text}>UTMAD</Text>
  </View>
  <View style={styles.rightChildContainer}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText2}>Apply Now</Text>
    </TouchableOpacity>
  </View>
</View>

    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:80

    },
    mainText:{
        textAlign:'center',
        fontSize:18
    },
  parentContainer: {
    marginTop:20,
    marginRight:20,  
    height: 50,
    width: '95%',
    margin: 10, // Margin from top, bottom, left, and right
    flexDirection: 'row', // Children will be arranged horizontally
    justifyContent: 'space-between', // Children will be spaced evenly
    alignItems: 'center', // Center align items vertically
    borderRadius:10,
    elevation: 5,
    backgroundColor:'white'
  },
  leftChildContainer: {
    // flex: 1, // Takes half of the parent's width
    height: 40,
    marginRight:80,
    marginLeft:40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightChildContainer: {
    flex: 1, // Takes half of the parent's width
    flexDirection: 'row',
    justifyContent: 'space-around', // Buttons will be spaced evenly
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    height: 40,
    width: 80,
    marginRight:20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    backgroundColor: '#036E8C',
  },
  button1:{
    height: 40,
    width: 80,
    marginRight:20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    backgroundColor: '#F5F5F5',
    color:'black'
  },
  buttonText1: {
     color: 'black',
  fontWeight: 'bold',
  fontSize:12
  },
  buttonText2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:12
  },
  
});

export default Carddata;
