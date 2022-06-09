import React from 'react';
import { NavigationContainer, LinkingOptions, NavigatorScreenParams, useNavigationContainerRef } from '@react-navigation/native';
import {
  View,
  Text,
} from '@copilot/components';
import { useTheme } from '@copilot/providers';
import StackNavigator from './StackNavigator';

type MenuParamList = {
  Home: undefined;
  Profile: undefined;
};

type StackNavigatorParamList = {
  Menu: NavigatorScreenParams<MenuParamList>;
  Unauthorized: undefined;
};

const linking: LinkingOptions<StackNavigatorParamList> = {
  prefixes: ['http://localhost:4200', 'com.copilot://'],
  config: {
      initialRouteName: 'Menu',
      screens: {
        Menu: {
          path: '',
          screens: {
              Home: {
                  path: '',
              },
              Profile: {
                  path: 'profile',
              },
          },
        },
        Unauthorized: '401',
      }
  },
};

function NavigationProvider() {
  const { theme } = useTheme();
  const navigationRef = useNavigationContainerRef<StackNavigatorParamList>();

  return (
      <NavigationContainer 
        ref={navigationRef}
        theme={theme}
        linking={linking}
        documentTitle={{
            formatter: (options, route) => `Copilot - ${options?.['title'] ?? route?.name}`,
        }}
        fallback={<SplashScreen />}
        >
        <StackNavigator />
      </NavigationContainer>
  );
}

function SplashScreen() {
  return <View><Text>Splash...</Text></View>;
}

export default NavigationProvider;