/* eslint-disable @typescript-eslint/no-explicit-any */
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

export interface Tab {
  name: string
  label: string
  screen: React.ComponentType<any>
  options?: BottomTabNavigationOptions
}

interface TabNavigatorProps {
  tabs: Tab[]
  screenOptions?: BottomTabNavigationOptions
}

const BottomTab = createBottomTabNavigator()

export const TabNavigator = ({ tabs, screenOptions }: TabNavigatorProps) => {
  return (
    <BottomTab.Navigator backBehavior="none" screenOptions={screenOptions}>
      {tabs.map(({ screen, name, label, options }) => {
        return (
          <BottomTab.Screen
            component={screen}
            key={name}
            name={name}
            options={{
              tabBarLabel: label,
              ...options,
            }}
          />
        )
      })}
    </BottomTab.Navigator>
  )
}
