import React from 'react';
import { Text, View, Image } from 'react-native'; 
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) =>{
    return(
        
        <Card>
            <CardSection>
                <View>
                    <Image source = {{uri:props.album.thumbnail_image }} />
                </View>
                <View style = {headerContentStyle}>
                    <Text>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text> 
                </View>
            </CardSection> 
        </Card>
    )
};

const styles = {
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}


export default AlbumDetail