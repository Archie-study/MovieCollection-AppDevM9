import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailMovieScreen from "../screens/DetailMovieScreen";
import MostViewedScreen from "../screens/MostViewedScreen";
import RecommendedScreen from "../screens/RecommendedScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Movie Collection',
                        headerStyle: {
                            backgroundColor: '#65c3ba'
                        },
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 24
                        },
                        headerTitleAlign: 'center',
                        headerLeft: null
                    }}
                />
                <Stack.Screen 
                    name="DetailMovie"
                    component={DetailMovieScreen}
                    options={{
                        title: 'Details',
                        headerStyle: {
                            backgroundColor: '#65c3ba'
                        },
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 24
                        },
                        headerTitleAlign: 'left',
                        headerLeft: null
                    }}
                />
                <Stack.Screen 
                    name="MostViewedlMovie"
                    component={MostViewedScreen}
                    options={{
                        title: 'Most Viewed',
                        headerStyle: {
                            backgroundColor: '#65c3ba'
                        },
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 24
                        },
                        headerTitleAlign: 'left',
                        headerLeft: null
                    }}
                />
                <Stack.Screen 
                    name="Recommended"
                    component={RecommendedScreen}
                    options={{
                        title: 'Recommended',
                        headerStyle: {
                            backgroundColor: '#65c3ba'
                        },
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 24
                        },
                        headerTitleAlign: 'left',
                        headerLeft: null
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;