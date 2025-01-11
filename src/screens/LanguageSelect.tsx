import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type Props = {
    navigation: FrameNavigationProp<MainStackParamList, "LanguageSelect">;
};

export function LanguageSelect({ navigation }: Props) {
    const selectLanguage = (lang: string) => {
        // In a real app, save language preference
        navigation.navigate("Login");
    };

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-8 font-bold">Select Your Language</label>
            <button className="btn mb-4" onTap={() => selectLanguage('en')}>English</button>
            <button className="btn mb-4" onTap={() => selectLanguage('hi')}>हिंदी</button>
            <button className="btn mb-4" onTap={() => selectLanguage('mr')}>मराठी</button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5"
    }
});