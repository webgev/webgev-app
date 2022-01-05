import { StackScreenProps } from '@react-navigation/stack'
import {
  StackHeaderOptions,
  StackNavigationOptions,
} from '@react-navigation/stack/lib/typescript/src/types'
import React from 'react'

export type Routes = string
export type ScreensProps = Record<string, object | undefined>

export type Screen<S extends ScreensProps, RouteName extends keyof S> = React.FC<
  StackScreenProps<S, RouteName>
> & {
  options?: (props?: StackScreenProps<S, RouteName>) => StackHeaderOptions & StackNavigationOptions
}
