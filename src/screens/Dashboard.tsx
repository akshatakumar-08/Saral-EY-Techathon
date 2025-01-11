import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type Props = {
    navigation: FrameNavigationProp<MainStackParamList, "Dashboard">;
};

export function Dashboard({ navigation }: Props) {
    const applications = [
        {
            id: "1",
            scheme: "PM Kisan Samman Nidhi",
            status: "Documents Verification",
            progress: 2,
            totalSteps: 4
        }
    ];

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl mb-4 font-bold">My Applications</label>
                {applications.map(app => (
                    <gridLayout 
                        key={app.id}
                        style={styles.applicationCard}
                        onTap={() => navigation.navigate("SchemeDetails", { schemeId: app.id })}
                    >
                        <label className="font-bold">{app.scheme}</label>
                        <label className="text-sm text-gray-600">Status: {app.status}</label>
                        <progressBar 
                            value={app.progress} 
                            maxValue={app.totalSteps}
                            style={styles.progress}
                        />
                    </gridLayout>
                ))}
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "column"
    },
    applicationCard: {
        padding: 16,
        marginBottom: 16,
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 2
    },
    progress: {
        marginTop: 8
    }
});