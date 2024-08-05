import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import { movieData } from "../../data/MovieData";
import { ShowMovie } from "../components/MovieComponent";

const HomeScreen = () => {
    return (
        <View style={StyleSheet.mainContainer}>
            <FlatList 
                data={movieData}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
                // Display the movie Vertically
                renderItem={({item}) => {
                    return (
                        <View style={styles.dataContainer}>
                            <Image 
                                style={styles.movieImage}
                                source={{ uri: item.imageLink }}
                            />
                            <View style={styles.movieDescriptionContainer}>
                                <Text style={styles.title}>{item.title}</Text>
                                <View style={styles.yearContainer}>
                                    <Text>{item.year}</Text>
                                </View>
                                <Text>{item.rating}</Text>
                            </View>
                        </View>
                    )
                }}

                // Display the movie horizontally
                ListHeaderComponent={
                    <View>
                        <FlatList 
                            horizontal
                            data={movieData}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) => {
                                return (
                                    <ShowMovie 
                                        image={{uri: item.imageLink}}
                                        title={item.title}
                                        viewers={item.viewers}
                                    />
                                )
                            }}       
                        />
                    </View>
                }
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    flatListContainer: {
        padding: 8
    },
    movieImage:{
        width: 130,
        height: 200,
        borderRadius: 10
    },
    dataContainer:{
        margin: 8,
        borderColor: '#96ceb4',
        borderWidth: 2, 
        borderRadius: 10,
        padding: 16,
        flexDirection: 'row'
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    movieDescriptionContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 8
    },
    yearContainer: {
        marginTop: 8,
        marginBottom: 8
    }

})

export default HomeScreen;