import React, { createContext } from 'react';
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

export interface NavigationContextType {
  route?: string;
}


export const NavigationContext = createContext<NavigationContextType>({} as NavigationContextType);

function NavigationProvider() {
  const { theme } = useTheme();
  const navigationRef = useNavigationContainerRef<StackNavigatorParamList>();
  const [route, setRoute] = React.useState<string>();

  return (
    <NavigationContext.Provider value={{ route }}>
      <NavigationContainer 
        ref={navigationRef}
        theme={theme}
        linking={linking}
        documentTitle={{
            formatter: (options, route) => `Copilot - ${options?.['title'] ?? route?.name}`,
        }}
        fallback={<SplashScreen />}
        onStateChange={(state) => {

          const menuState = state?.routes[state.index].state;
          const routeName = menuState?.routes[menuState.index ?? 0].name;

          setRoute(routeName);
        }}
      >
        <StackNavigator />
      </NavigationContainer>
    </NavigationContext.Provider>
  );
}

function SplashScreen() {
  return <View><Text>Splash...</Text></View>;
}

export default NavigationProvider;