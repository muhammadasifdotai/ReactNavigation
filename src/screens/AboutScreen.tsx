import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

export default function AboutScreen(): JSX.Element {
    const {navigate} = useNavigation()

    return (
        <View>
            <Text>AboutScreen</Text>
            <Button title="Go to Contact Screen" onPress={() => navigate('ContactScreen')}/>
        </View>
    )
}