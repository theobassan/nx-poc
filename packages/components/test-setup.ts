import '@testing-library/jest-native/extend-expect';

import { Theme } from '../providers/src/lib/theme-provider';
import * as useTheme from '../providers/src/lib/theme-provider/hooks/useTheme.wip';

jest.spyOn(useTheme, 'default').mockReturnValue({ theme: { colors: {}, fonts: { regular: {}, medium: {}, light: {}, thin: {} } } as Theme });
