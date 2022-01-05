/* eslint-disable @typescript-eslint/no-explicit-any */
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { DefaultNavigatorOptions, NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { StackNavigationConfig } from '@react-navigation/stack/lib/typescript/src/types'
import React, { useMemo } from 'react'

import { Tab, TabNavigator } from './TabNavigator'
import { Screen, Routes, ScreensProps } from './types'

interface Route<S extends ScreensProps, R extends Routes> {
  name: string
  screen: Screen<S, R>
}

interface NavigationProps<S extends ScreensProps, R extends Routes> {
  routes?: Route<S, R>[]
  tab?: {
    tabs: Tab[]
    name: string
    stackOptions?: NativeStackNavigationOptions
    screenOptions?: BottomTabNavigationOptions
  }

  navigatorProps?: Omit<DefaultNavigatorOptions<any, any, any, any>, 'children'> &
    StackNavigationConfig
}

export function Navigation<S extends ScreensProps, R extends Routes>({
  routes,
  tab,
  navigatorProps,
}: NavigationProps<S, R>) {
  const tabComp = useMemo(
    () => () => tab ? <TabNavigator screenOptions={tab.screenOptions} tabs={tab.tabs} /> : null,
    [tab],
  )

  return (
    <NavigationContainer>
      <Stack.Navigator {...navigatorProps}>
        {routes && navigator<S, R>({ routes })}
        {tab && (
          <Stack.Screen
            component={tabComp}
            name={tab.name}
            options={{
              headerShown: false,
              gestureEnabled: false,
              ...tab.stackOptions,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

interface NavigatorProps<S extends ScreensProps, R extends Routes> {
  routes: Route<S, R>[]
}

const Stack = createNativeStackNavigator()

const navigator = <S extends ScreensProps, R extends Routes>({ routes }: NavigatorProps<S, R>) => {
  return routes.map(({ screen, name }) => {
    return <Stack.Screen component={screen} key={name} name={name} options={screen?.options?.()} />
  })
}
