import React from 'react';
import { Stack } from 'expo-router';

const CompoLayout = () => {
  return (
    <Stack>

      <Stack.Screen
        name="start"
        options={{
          headerTitle: 'Start',
        }}></Stack.Screen>


    </Stack>
  );
};

export default CompoLayout;
