export { default as ThemeContextProvider } from './ThemeContextProvider.wip';

export * from './hooks';
//export { Theme } from './domain';

//import { Theme as DomainTheme } from './domain'
import DomainTheme from './domain/theme';
export type Theme = DomainTheme;

//export { default as Theme } from './domain/theme';