import React from 'react';
import { Text, View, Image } from 'react-native'; 
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) =>{
    const {title, artist, thumbnail_image, image} = album;
    const {
        thumbmailStyle, 
        headerContentStyle,
        thumbmailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles; 

    return(
        
        <Card>
            <CardSection>
                <View style ={thumbmailContainerStyle} >
                    <Image 
                        style = {thumbmailStyle}
                        source = {{uri:thumbnail_image }} 
                    />
                </View>
                <View style = {headerContentStyle}>
                    <Text style = {headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text> 
                </View>
            </CardSection> 
            <CardSection>
                <Image 
                    style = {imageStyle} 
                    source = {{uri:image}} 
                />
            </CardSection>
        </Card>
    )
};

const styles = {
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    thumbmailStyle: {
        height: 50,
        width: 50
    },

    thumbmailContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    imageStyle:{
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail

// const {title, artist, thumbnail_image} = album;
// const {thumbmailStyle, headerContentStyle} = styles;
//deconstructuring:
//  <Card>
// <CardSection>
// <View>
//     <Image 
//     style = {styles.thumbmailStyle}
//     source = {{uri:thumbnail_image }} />
// </View>
// <View style = {styles.headerContentStyle}>
//     <Text>{title}</Text>
//     <Text>{artist}</Text> 
// </View>
// </CardSection> 
// </Card>