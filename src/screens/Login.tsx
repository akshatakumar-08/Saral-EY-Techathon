import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type Props = {
    navigation: FrameNavigationProp<MainStackParamList, "Login">;
};

export function Login({ navigation }: Props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = () => {
        // In a real app, implement authentication
        navigation.navigate("Home");
    };

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl mb-8 font-bold">Welcome Back</label>
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
                <button 
                    className="btn btn-primary" 
                    onTap={handleLogin}
                >
                    Login
                </button>
                <button 
                    className="btn btn-secondary mt-4" 
                    onTap={() => navigation.navigate("Signup")}
                >
                    New User? Sign Up
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