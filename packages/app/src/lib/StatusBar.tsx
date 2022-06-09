import React from 'react';
import {
  StatusBar as NativeStatusBar,
} from 'react-native';
import { useTheme } from '@copilot/providers';

function StatusBar() {
  const { theme } = useTheme();

  return (
    <NativeStatusBar translucent barStyle={theme.dark ? 'light-content' : 'dark-content'} backgroundColor="rgba(0, 0, 0, 0.24)" />
  );
}

export default StatusBar;