import React from "react";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { useHabitDetail } from "../../context/habitdetailsContext";
import ChooseIcon from "../ChooseIcon/ChooseIcon";

const ChooseHabitIcon = () => {
    const { color, icon } = useHabitDetail();
    return (
        <View className="my-2 mt-0">
            <Text className="text-lg font-medium my-3">Choose your icon</Text>
            <ChooseIcon defaultColor={color} defaultIcon={icon} />
        </View>
    );
};

export default ChooseHabitIcon;
