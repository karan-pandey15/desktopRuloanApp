import React from 'react';
import { View, Text } from 'react-native';

const DashboardScreen = ({ route }) => {
  const { name, phone, email } = route.params;

  return (
    <View>
      <Text>Welcome to the Dashboard</Text>
      <Text>Name: {name}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

export default DashboardScreen;
