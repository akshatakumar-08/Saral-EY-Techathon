import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { Login } from "../screens/Login";
import { Signup } from "../screens/Signup";
import { Questionnaire } from "../screens/Questionnaire";
import { Home } from "../screens/Home";
import { Dashboard } from "../screens/Dashboard";
import { Profile } from "../screens/Profile";
import { SchemeDetails } from "../screens/SchemeDetails";
import { ChatBot } from "../screens/ChatBot";
import { LanguageSelect } from "../screens/LanguageSelect";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="LanguageSelect"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4A90E2",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="LanguageSelect"
                component={LanguageSelect}
                options={{ title: "Select Language" }}
            />
            <StackNavigator.Screen
                name="Login"
                component={Login}
                options={{ title: "Login" }}
            />
            <StackNavigator.Screen
                name="Signup"
                component={Signup}
                options={{ title: "Signup" }}
            />
            <StackNavigator.Screen
                name="Questionnaire"
                component={Questionnaire}
                options={{ title: "Tell Us About Yourself" }}
            />
            <StackNavigator.Screen
                name="Home"
                component={Home}
                options={{ title: "Home" }}
            />
            <StackNavigator.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ title: "My Applications" }}
            />
            <StackNavigator.Screen
                name="Profile"
                component={Profile}
                options={{ title: "Profile" }}
            />
            <StackNavigator.Screen
                name="SchemeDetails"
                component={SchemeDetails}
                options={{ title: "Scheme Details" }}
            />
            <StackNavigator.Screen
                name="ChatBot"
                component={ChatBot}
                options={{ title: "Help Assistant" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);