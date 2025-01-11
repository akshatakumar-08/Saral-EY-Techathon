import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type Props = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">;
};

export function Home({ navigation }: Props) {
    const recommendedSchemes = [
        {
            id: "1",
            name: "PM Kisan Samman Nidhi",
            description: "Financial benefit of Rs.6000 per year for farmer families",
            icon: "🌾",
            category: "Agriculture"
        },
        {
            id: "2",
            name: "Pradhan Mantri Awas Yojana",
            description: "Housing assistance up to Rs.2.5 lakh for rural households",
            icon: "🏠",
            category: "Housing"
        }
    ];

    const allSchemes = [
        {
            id: "3",
            name: "PM Jan Dhan Yojana",
            description: "Financial inclusion with zero balance bank account",
            icon: "🏦",
            category: "Finance"
        },
        {
            id: "4",
            name: "Ayushman Bharat",
            description: "Health coverage up to Rs.5 lakh per family per year",
            icon: "⚕️",
            category: "Healthcare"
        },
        {
            id: "5",
            name: "PM Fasal Bima Yojana",
            description: "Crop insurance for farmers",
            icon: "🌿",
            category: "Agriculture"
        }
    ];

    return (
        <scrollView>
            <stackLayout style={styles.container}>
                <label className="text-2xl mb-4 font-bold">Recommended for You</label>
                <label className="text-sm mb-4 text-gray-600">Based on your profile</label>
                
                {recommendedSchemes.map(scheme => (
                    <gridLayout 
                        key={scheme.id}
                        style={styles.recommendedCard}
                        onTap={() => navigation.navigate("SchemeDetails", { schemeId: scheme.id })}
                        rows="auto, auto"
                        columns="auto, *"
                    >
                        <stackLayout row={0} col={0} style={styles.iconContainer}>
                            <label className="text-3xl">{scheme.icon}</label>
                        </stackLayout>
                        <stackLayout row={0} col={1}>
                            <label className="font-bold text-lg">{scheme.name}</label>
                            <label className="text-sm text-blue-600">{scheme.category}</label>
                            <label className="text-sm text-gray-600">{scheme.description}</label>
                        </stackLayout>
                    </gridLayout>
                ))}

                <label className="text-xl mt-6 mb-4 font-bold">Explore More Schemes</label>
                
                {allSchemes.map(scheme => (
                    <gridLayout 
                        key={scheme.id}
                        style={styles.schemeCard}
                        onTap={() => navigation.navigate("SchemeDetails", { schemeId: scheme.id })}
                        rows="auto"
                        columns="auto, *"
                    >
                        <stackLayout row={0} col={0} style={styles.iconContainer}>
                            <label className="text-2xl">{scheme.icon}</label>
                        </stackLayout>
                        <stackLayout row={0} col={1}>
                            <label className="font-bold">{scheme.name}</label>
                            <label className="text-xs text-blue-600">{scheme.category}</label>
                            <label className="text-sm text-gray-600">{scheme.description}</label>
                        </stackLayout>
                    </gridLayout>
                ))}
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    recommendedCard: {
        padding: 16,
        marginBottom: 16,
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#e5e7eb"
    },
    schemeCard: {
        padding: 12,
        marginBottom: 12,
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#e5e7eb"
    },
    iconContainer: {
        width: 48,
        height: 48,
        backgroundColor: "#f3f4f6",
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12
    }
});