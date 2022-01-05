import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack/lib/typescript/src/types'
import React from 'react'

export type Routes = string
export type ScreensProps = Record<string, object | undefined>

export type Screen<S extends ScreensProps, RouteName extends keyof S> = React.FC<
  NativeStackScreenProps<S, RouteName>
> & {
  options?: (
    props?: NativeStackScreenProps<S, RouteName>,
  ) => NativeStackHeaderProps & NativeStackNavigationOptions
}
