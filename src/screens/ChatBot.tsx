import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type Props = {
    navigation: FrameNavigationProp<MainStackParamList, "ChatBot">;
};

type Message = {
    id: string;
    text: string;
    isBot: boolean;
};

export function ChatBot({ navigation }: Props) {
    const [messages, setMessages] = React.useState<Message[]>([
        {
            id: "1",
            text: "Hello! I'm your scheme assistant. How can I help you today?",
            isBot: true
        }
    ]);
    const [input, setInput] = React.useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            isBot: false
        };

        setMessages(prev => [...prev, userMessage]);
        setInput("");

        // Simulate bot response
        setTimeout(() => {
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "I'm analyzing your query. Based on your profile, you might be eligible for PM Kisan Samman Nidhi. Would you like to know more about it?",
                isBot: true
            };
            setMessages(prev => [...prev, botMessage]);
        }, 1000);
    };

    return (
        <gridLayout rows="*, auto" style={styles.container}>
            <scrollView row={0}>
                <stackLayout style={styles.messagesContainer}>
                    {messages.map(message => (
                        <label
                            key={message.id}
                            className={`p-2 rounded-lg mb-2 ${
                                message.isBot ? 'bg-blue-100' : 'bg-green-100 text-right'
                            }`}
                        >
                            {message.text}
                        </label>
                    ))}
                </stackLayout>
            </scrollView>
            <gridLayout row={1} columns="*, auto" style={styles.inputContainer}>
                <textField
                    col={0}
                    hint="Type your message..."
                    text={input}
                    onTextChange={(e) => setInput(e.value)}
                    style={styles.input}
                />
                <button
                    col={1}
                    className="btn btn-primary"
                    onTap={handleSend}
                >
                    Send
                </button>
            </gridLayout>
        </gridLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    messagesContainer: {
        padding: 16
    },
    inputContainer: {
        padding: 16,
        backgroundColor: "#f5f5f5"
    },
    input: {
        marginRight: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4
    }
});