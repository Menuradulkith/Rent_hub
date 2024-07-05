import React from 'react';
import { Stack } from 'expo-router';

const CompoLayout = () => {
  return (
    <Stack
    screenOptions={{
      headerShown:false,
      headerStyle: {
        backgroundColor: '#6c47ff',
      },
      headerTintColor: '#fff',
      headerBackTitle: 'Back',
    }}>

      <Stack.Screen
        name="start"
        options={{
          headerTitle: 'Start',
        }}></Stack.Screen>


    </Stack>
  );
};

export default CompoLayout;
