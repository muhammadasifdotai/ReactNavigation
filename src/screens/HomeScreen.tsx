import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen(): JSX.Element {
    const {navigate} = useNavigation();
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title="Go to About Screen" onPress={() => navigate('AboutScreen')}/>
        </View>
    )
}