import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import {
  View,
  Text,
} from '@copilot/components';
import { ThemeContextProvider } from '@copilot/providers';

const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <ThemeContextProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View>
            <Text>Hello there,</Text>
            <Text testID="heading">
              Welcome Copilot
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeContextProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  }
});

export default App;