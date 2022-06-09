import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

//require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();
//import { setUpTests } from 'react-native-reanimated/src/reanimated2/jestUtils'

import { Theme } from '../providers/src/lib/theme-provider';
import * as useTheme from '../providers/src/lib/theme-provider/hooks/useTheme.wip';

//setUpTests();

jest.spyOn(useTheme, 'default').mockReturnValue({ theme: { colors: {}, fonts: { regular: {}, medium: {}, light: {}, thin: {} } } as Theme });


jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

//jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
  
  // Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
 // jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
  
  // As of react-native@0.64.X file has moved
  //jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');