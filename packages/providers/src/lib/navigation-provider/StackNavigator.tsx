import React, { useEffect, useState } from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import {
  Text,
} from '@copilot/components';
import DrawerNavigator from './DrawerNavigator';
import BottomTabsNavigator from './BottonNavigator';
import { Dimensions, ScaledSize } from 'react-native';

type MenuParamList = {
  Home: undefined;
  Profile: undefined;
};

type StackNavigatorParamList = {
  Menu: NavigatorScreenParams<MenuParamList>;
  Unauthorized: undefined;
};

const Stack = createStackNavigator<StackNavigatorParamList>();

function StackNavigator() {

  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
      const onDimensionsChange = ({ window }: { window: ScaledSize }) => {
          setDimensions(window);
      };

      Dimensions.addEventListener('change', onDimensionsChange);

      return () => Dimensions.removeEventListener('change', onDimensionsChange);
  }, []);

  const isLargeScreen = dimensions.width >= 1024;

  return (
    <Stack.Navigator
      screenOptions={{
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
      }}
    >
      <Stack.Screen name="Menu" component={isLargeScreen ? DrawerNavigator : BottomTabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Unauthorized" component={Unauthorized} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function Unauthorized() {
  return <Text>Splash...</Text>
}

export default StackNavigator;