import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type Props = {
    navigation: FrameNavigationProp<MainStackParamList, "Signup">;
};

export function Signup({ navigation }: Props) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [ancestralHome, setAncestralHome] = React.useState("");
    const [religion, setReligion] = React.useState("");

    const handleSignup = () => {
        navigation.navigate("Questionnaire");
    };

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl mb-8 font-bold">Create Account</label>
                <textField
                    hint="Full Name"
                    style={styles.input}
                    text={name}
                    onTextChange={(e) => setName(e.value)}
                />
                <textField
                    hint="Email"
                    keyboardType="email"
                    style={styles.input}
                    text={email}
                    onTextChange={(e) => setEmail(e.value)}
                />
                <textField
                    hint="Password"
                    secure={true}
                    style={styles.input}
                    text={password}
                    onTextChange={(e) => setPassword(e.value)}
                />
                <textField
                    hint="Address"
                    style={styles.input}
                    text={address}
                    onTextChange={(e) => setAddress(e.value)}
                />
                <textField
                    hint="Ancestral Home"
                    style={styles.input}
                    text={ancestralHome}
                    onTextChange={(e) => setAncestralHome(e.value)}
                />
                <textField
                    hint="Religion"
                    style={styles.input}
                    text={religion}
                    onTextChange={(e) => setReligion(e.value)}
                />
                <button 
                    className="btn btn-primary" 
                    onTap={handleSignup}
                >
                    Sign Up
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