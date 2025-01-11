import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type Props = {
    navigation: FrameNavigationProp<MainStackParamList, "Profile">;
};

export function Profile({ navigation }: Props) {
    const profile = {
        name: "John Doe",
        age: 35,
        income: "₹250,000",
        category: "General",
        address: "123 Rural Street, Village",
        ancestralHome: "456 Old Street, Village",
        religion: "Hindu",
        schemes: ["PM Kisan Samman Nidhi"]
    };

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <image 
                    src="~/assets/profile.jpg" 
                    style={styles.profileImage}
                />
                <label className="text-2xl mb-4 font-bold">{profile.name}</label>
                <gridLayout style={styles.infoCard}>
                    <label>Age: {profile.age}</label>
                    <label>Annual Income: {profile.income}</label>
                    <label>Category: {profile.category}</label>
                    <label>Address: {profile.address}</label>
                    <label>Ancestral Home: {profile.ancestralHome}</label>
                    <label>Religion: {profile.religion}</label>
                    <label className="font-bold mt-4">Applied Schemes:</label>
                    {profile.schemes.map(scheme => (
                        <label key={scheme}>{scheme}</label>
                    ))}
                </gridLayout>
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
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16
    },
    infoCard: {
        padding: 16,
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 2,
        width: "100%"
    }
});