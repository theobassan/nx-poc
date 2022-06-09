import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from '@copilot/components';

type DrawerNavigatorParamList = {
  Home: undefined;
  Profile: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

function DrawerNavigator(): JSX.Element {
  return (
      <Drawer.Navigator
          screenOptions={{
              drawerType: 'front',
              drawerStyle: {
                //backgroundColor: "transparent",
                //display: "flex",
                height: "100%"
              },
              headerShown: true
          }}

      >
          <Drawer.Screen
              name="Home"
              component={Home}
              options={{
                  title: 'Home',
              }}
          />
          <Drawer.Screen
              name="Profile"
              component={Profile}
              options={{
                  title: 'Profile',
              }}
          />
      </Drawer.Navigator>
  );
}

function Home() {

  return (
    <View>
      <Text>Hello there,</Text>
      <Text>
        Welcome Copilot
      </Text>
    </View>
  );
};

function Profile() {

  return (
    <View>
      <Text>Hello Profile</Text>
    </View>
  );
};

export default DrawerNavigator;