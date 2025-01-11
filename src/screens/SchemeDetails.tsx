import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type Props = {
    navigation: FrameNavigationProp<MainStackParamList, "SchemeDetails">;
    route: { params: { schemeId: string } };
};

export function SchemeDetails({ navigation, route }: Props) {
    const [selectedDocument, setSelectedDocument] = React.useState("");
    const [uploadedDocs, setUploadedDocs] = React.useState<string[]>([]);
    
    const scheme = {
        id: "1",
        name: "PM Kisan Samman Nidhi",
        description: "Financial benefit of Rs.6000 per year for farmer families",
        icon: "🌾",
        eligibility: [
            "Small and Marginal Farmers",
            "Land ownership in beneficiary's name",
            "Family income below poverty line"
        ],
        benefits: [
            "Rs. 6000 per year in three installments",
            "Direct bank transfer",
            "No intermediaries"
        ],
        steps: [
            { id: 1, name: "Application Submission", completed: true },
            { id: 2, name: "Document Upload", completed: false },
            { id: 3, name: "Verification", completed: false },
            { id: 4, name: "Approval", completed: false }
        ],
        documents: [
            { id: "aadhar", name: "Aadhar Card", required: true },
            { id: "land", name: "Land Records", required: true },
            { id: "bank", name: "Bank Passbook", required: true },
            { id: "income", name: "Income Certificate", required: true },
            { id: "photo", name: "Recent Photograph", required: false }
        ]
    };

    const handleDocumentUpload = () => {
        if (selectedDocument && !uploadedDocs.includes(selectedDocument)) {
            setUploadedDocs([...uploadedDocs, selectedDocument]);
        }
    };

    return (
        <scrollView>
            <stackLayout style={styles.container}>
                <gridLayout rows="auto, auto" columns="auto, *">
                    <label row={0} col={0} className="text-3xl mr-2">{scheme.icon}</label>
                    <label row={0} col={1} className="text-2xl font-bold">{scheme.name}</label>
                    <label row={1} col="0,1" className="mt-2">{scheme.description}</label>
                </gridLayout>

                <label className="text-xl mt-6 mb-2 font-bold">Eligibility Criteria</label>
                {scheme.eligibility.map((criteria, index) => (
                    <label key={index} className="mb-2">• {criteria}</label>
                ))}

                <label className="text-xl mt-6 mb-2 font-bold">Benefits</label>
                {scheme.benefits.map((benefit, index) => (
                    <label key={index} className="mb-2">• {benefit}</label>
                ))}

                <label className="text-xl mt-6 mb-2 font-bold">Application Progress</label>
                {scheme.steps.map(step => (
                    <label 
                        key={step.id}
                        className={`mb-2 ${step.completed ? 'text-green-600' : 'text-gray-400'}`}
                    >
                        {step.completed ? '✓' : '○'} {step.name}
                    </label>
                ))}

                <label className="text-xl mt-6 mb-2 font-bold">Required Documents</label>
                <stackLayout style={styles.uploadSection}>
                    <dropDown
                        items={scheme.documents.map(doc => `${doc.name}${doc.required ? ' *' : ''}`)}
                        selectedIndex={0}
                        style={styles.dropdown}
                        onSelectedIndexChanged={(e) => setSelectedDocument(scheme.documents[e.newIndex].id)}
                    />
                    <button 
                        className="btn btn-primary mt-2" 
                        onTap={handleDocumentUpload}
                    >
                        Upload Document
                    </button>
                </stackLayout>

                {uploadedDocs.length > 0 && (
                    <stackLayout style={styles.uploadedDocs}>
                        <label className="font-bold mb-2">Uploaded Documents:</label>
                        {uploadedDocs.map(docId => (
                            <label key={docId} className="text-green-600">
                                ✓ {scheme.documents.find(d => d.id === docId)?.name}
                            </label>
                        ))}
                    </stackLayout>
                )}
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    uploadSection: {
        marginTop: 8
    },
    dropdown: {
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4
    },
    uploadedDocs: {
        marginTop: 16,
        padding: 16,
        backgroundColor: "#f0f9ff",
        borderRadius: 8
    }
});