import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

export default function ContactScreen(): JSX.Element {
    const {navigate} = useNavigation()
    return (
        <View>
            <Text>ContactScreen</Text>
            <Button title="Go to Home Screen" onPress={() => navigate('HomeScreen')}/>
        </View>
    )
}