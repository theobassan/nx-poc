import React from 'react';
import { useRoute, useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { View, Text } from '@copilot/components';
import { HeaderBackButton, useHeaderHeight } from '@react-navigation/elements';
type BottomTabNavigatorParamList = {
  Home: undefined;
  Profile: undefined;
};

const BottomTabs = createBottomTabNavigator<BottomTabNavigatorParamList>();

function BottomTabsNavigator() {
  const route = useRoute();
  const navigation = useNavigation();
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Article';

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      title: routeName,
    });
  }, [navigation, routeName]);

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerLeft: (props) => (
          <HeaderBackButton {...props} onPress={navigation.goBack} />
        ),
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          //tabBarIcon: getTabBarIcon('message-reply'),
          //tabBarBadge: 2,
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          //tabBarIcon: getTabBarIcon('message-reply'),
          //tabBarBadge: 2,
        }}
      />
    </BottomTabs.Navigator>
  );
}

function Home() {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  console.log("Home headerHeight", headerHeight)
  console.log("Home tabBarHeight", tabBarHeight)

  return (
    <View
    >
      <Text>Hello there,</Text>
      <Text>
        Welcome Copilot
      </Text>
    </View>
  );
};

function Profile() {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  console.log("Profile headerHeight", headerHeight)
  console.log("Profile tabBarHeight", tabBarHeight)

  return (
    <View
    >
      <Text>Hello Profile</Text>
    </View>
  );
};

export default BottomTabsNavigator;