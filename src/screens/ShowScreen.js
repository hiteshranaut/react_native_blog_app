

import React , {useContext} from 'react';
import { View , Text , StyleSheet } from 'react-native';

import { Context } from '../context/BlogContext';

const ShowScreen = ({navigation}) => {
    const { state } = useContext(Context);

    const id = navigation.getParam('id');

    const blogPost = state.find((blogPost) => blogPost.id === id );

    // console.log( blogPost );

    // console.log( id );
    
    return (
        <View>
            <Text>Blog Title: </Text>
            <Text>{blogPost.title} - {blogPost.id} </Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;