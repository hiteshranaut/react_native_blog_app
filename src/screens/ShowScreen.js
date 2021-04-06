

import React , {useContext} from 'react';
import { View , Text , StyleSheet , TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const { state } = useContext(Context);

    const id = navigation.getParam('id');

    const blogPost = state.find((blogPost) => blogPost.id === id );

    // console.log( blogPost );

    // console.log( id );
    
    return (
        <View>
            <Text>Blog Title: </Text>
            <Text>{blogPost.title} - ID {blogPost.id}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};


ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit' , { id: navigation.getParam('id') } )}>
                <FontAwesome name="pencil" size={24} color="black" />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({});

export default ShowScreen;