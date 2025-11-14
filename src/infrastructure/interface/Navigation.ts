import type { NavigationProp, ParamListBase, RouteProp, Theme } from "@react-navigation/native";
import type { NativeStackNavigationOptions, NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface NavProps {
   route: RouteProp<ParamListBase, string>;
   navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
   theme: Theme;
}

export type RootStackParam = {
   Home:     undefined;
   Loading:  undefined;
   Login:    undefined;
   Register: undefined;
   Product: { productId: string }
}


export type NavHook = NavigationProp<RootStackParam>

export type SettingsNavigation = NativeStackNavigationOptions | ((props: NavProps ) => NativeStackNavigationOptions) | undefined;