import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigation from "./src/routes/StackNavigation";

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <StackNavigation/>
  )
}