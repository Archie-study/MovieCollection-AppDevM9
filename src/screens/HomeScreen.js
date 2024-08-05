import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import { movieData } from "../../data/MovieData";
import { ShowMovie } from "../components/MovieComponent";
import { useEffect, useState } from "react";

const HomeScreen = () => {

    // State to sort by rating
    const [recommended, setRecommended] = useState([]);
    
    // State to sort by Viewers
    const [ mostViewedMovie, setMostViewedMovie ] = useState([])

    // Sorting Data by rating
    const compareRating = (a, b) => {
        const ratingA = a.rating
        const ratingB = b.rating

        if(ratingA > ratingB){
            return -1;
        } else if (ratingA < ratingB){
            return 1;
        } else {
            return 0;
        }
    };

    // Sorting Data by viewers
    const compareViewers = (a, b) => {
        const viewersA = a.viewers
        const viewersB = b.viewers

        if(viewersA > viewersB){
            return -1;
        } else if (viewersA < viewersB){
            return 1;
        } else {
            return 0;
        }
    };

    useEffect(() => {
        const sortedRecommended = [...movieData].sort(compareRating)
        setRecommended(sortedRecommended)

        const sortedMoesViewed = [...movieData].sort(compareViewers)
        setMostViewedMovie(sortedMoesViewed)
    }, []);


    return (
        <View style={StyleSheet.mainContainer}>
            <FlatList 
                data={recommended}
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
                        <View style={styles.mainCategoryContainer}>
                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryText}>
                                    Most Viewed
                                </Text>
                            </View>
                        </View>
                    
                        <View>
                            <FlatList 
                                horizontal
                                data={mostViewedMovie}
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
                            <View style={styles.mainCategoryContainer}>
                                <View style={styles.categoryContainer}>
                                    <Text style={styles.categoryText}>
                                        Recommended
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                }

                // ListFooterComponent={
                //     <Text>
                //         An array of objects lets you store multiple values in a single variable. It storesa fixed-size sequential collection of elements of th same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type. 
                //     </Text>
                // }
            
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
    },
    mainCategoryContainer: {
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        flexDirection: 'row'
    },
    categoryContainer: {
        flex: 1
    },
    categoryText: {
        fontSize: 20,
        fontWeight: 'bold'
    }

})

export default HomeScreen;