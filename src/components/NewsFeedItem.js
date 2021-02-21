import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, Dimensions, View } from 'react-native';
import Colors from '../Utils/Colors';
import { ScaleWidth } from '../Utils/scale-width'
import { ScaleHeight } from '../Utils/scale-height'
import { connect } from 'react-redux';
const { width } = Dimensions.get('window')

const NewsItem = (props) => {

    const styles = StyleSheet.create({

        container: {
            padding: ScaleWidth(10),
            backgroundColor: props.theme.backgroundAlt,
            shadowColor: Colors.black,
            shadowOpacity: .1,
            shadowOffset: { width: 0, height: 2 },
            elevation: 1,
            width: width - ScaleWidth(20),
            alignSelf: 'center',
            margin: ScaleWidth(10),
            borderRadius: ScaleWidth(10)

        },
        image: {
            height: ScaleHeight(200),
            width: width - ScaleWidth(50),
            borderRadius: ScaleWidth(10),
            marginTop: ScaleHeight(15),

        },
        title: {
            color: props.theme.text,
            fontSize: ScaleWidth(13),
            fontWeight: 'bold',
            marginTop: ScaleHeight(15),
            marginLeft: ScaleHeight(5),
        },
        letter: {
            color: props.theme.text,
            fontSize: ScaleWidth(15),
            fontWeight: 'bold',

        },
        description: {
            fontSize: ScaleWidth(11),
            color: Colors.grey,
            margin: ScaleHeight(5),

        },
        author: {
            color: props.theme.text,
            fontSize: ScaleWidth(12),
            fontWeight: 'bold',
            marginLeft: ScaleHeight(5),
        },
        publishedAt: {
            fontSize: ScaleWidth(11),
            color: Colors.grey,
            marginLeft: ScaleHeight(5),

        },
        avatar: {
            height: ScaleHeight(40),
            width: ScaleWidth(40),
            backgroundColor: Colors.grey,
            borderRadius: ScaleWidth(20),
            justifyContent: 'center',
            alignItems: 'center'
        },
        authorView: {
            justifyContent: 'center',
            alignItems: 'flex-start'
        },
        avatarView: {
            flexDirection: 'row',
            width: width - ScaleWidth(50)
        }


    });

    return (

        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}>

            <View style={styles.avatarView}>
                <View style={styles.avatar}>
                    <Text style={styles.letter}>{String(props.author).substr(0, 1)}</Text>

                </View>
                <View style={styles.authorView}>
                    {props.author && <Text style={styles.author}>{props.author}</Text>}
                    <Text style={styles.publishedAt}>{props.publishedAt}</Text>
                </View>

            </View>
            <Image source={{ uri: props.image }} style={styles.image} />
            {props.title && <Text style={styles.title}>{props.title}</Text>}
            {props.description && <Text style={styles.description}>{props.description}</Text>}
        </TouchableOpacity>

    );



}



const mapStateToProps = ({ theme }) => {
    return {
        theme: theme.theme
    }
};
export default connect(mapStateToProps)(NewsItem)
