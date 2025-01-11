import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type Props = {
    navigation: FrameNavigationProp<MainStackParamList, "Questionnaire">;
};

export function Questionnaire({ navigation }: Props) {
    const [age, setAge] = React.useState("");
    const [income, setIncome] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [occupation, setOccupation] = React.useState("");

    const handleSubmit = () => {
        navigation.navigate("Home");
    };

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl mb-8 font-bold">Tell Us About Yourself</label>
                <textField
                    hint="Age"
                    keyboardType="number"
                    style={styles.input}
                    text={age}
                    onTextChange={(e) => setAge(e.value)}
                />
                <textField
                    hint="Annual Income"
                    keyboardType="number"
                    style={styles.input}
                    text={income}
                    onTextChange={(e) => setIncome(e.value)}
                />
                <textField
                    hint="Category (SC/ST/OBC/General)"
                    style={styles.input}
                    text={category}
                    onTextChange={(e) => setCategory(e.value)}
                />
                <textField
                    hint="Occupation"
                    style={styles.input}
                    text={occupation}
                    onTextChange={(e) => setOccupation(e.value)}
                />
                <button 
                    className="btn btn-primary" 
                    onTap={handleSubmit}
                >
                    Submit
                </button>
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "column",
        alignItems: "center"
    },
    input: {
        width: "80%",
        marginBottom: 16,
        padding: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4
    }
});