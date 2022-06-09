import { useContext } from 'react';

import { NavigationContext, NavigationContextType } from '../NavigationProvider';

type MenuParamList = {
    Home: undefined;
    Profile: undefined;
  };

type HookType = {
    navigationRoute: keyof MenuParamList;
};

function useNavigationRoute(): HookType {
    const { route } = useContext<NavigationContextType>(NavigationContext);
    return { navigationRoute: route as keyof MenuParamList };
}

export default useNavigationRoute;
