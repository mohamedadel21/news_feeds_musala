import React from "react";
import {  StyleSheet, ScrollView, Text, View, Image, Dimensions } from "react-native";
import { ChangeTheme, ChangeLanguage } from '../Redux/actions'
import Colors from '../Utils/Colors'
import { connect } from 'react-redux';
import { ScaleHeight } from '../Utils/scale-height'
import { ScaleWidth } from '../Utils/scale-width'
const { width, height } = Dimensions.get('window')

const settings = (props) => {

    const post = props.route.params.post

    const styles = StyleSheet.create({


        Container: {
            flexGrow: 1,
            backgroundColor: props.theme.background,

        },
        image: {
            height: ScaleHeight(300),
            width: width,

        },
        title: {
            color: props.theme.text,
            fontSize: ScaleWidth(13),
            fontWeight: 'bold',
            margin: ScaleHeight(15),
        },
        letter: {
            color: props.theme.text,
            fontSize: ScaleWidth(15),
            fontWeight: 'bold',

        },
        description: {
            fontSize: ScaleWidth(11),
            color: Colors.grey,
            marginTop: ScaleHeight(10),
            marginLeft: ScaleHeight(15),
            marginRight: ScaleHeight(15),

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
            alignItems: 'flex-start',
        },
        avatarView: {
            flexDirection: 'row',
            width: width - ScaleWidth(50),
            margin: ScaleWidth(10),
        },


    });



    return (
        <ScrollView
            contentContainerStyle={styles.Container}>



            <Image source={{ uri: post.urlToImage }} style={styles.image} />
            <View style={styles.avatarView}>
                <View style={styles.avatar}>
                    <Text style={styles.letter}>{String(post.author).substr(0, 1)}</Text>

                </View>
                <View style={styles.authorView}>
                    {post.author && <Text style={styles.author}>{post.author}</Text>}
                    <Text style={styles.publishedAt}>{post.publishedAt}</Text>
                </View>

            </View>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.description}>{post.description}</Text>

        </ScrollView>
    );
}







const mapStateToProps = ({ news, theme, lang }) => {
    return {

        newsfeed: news.newsfeed,
        loading: news.loading,
        theme: theme.theme,
        lang: lang.lang


    }
};
export default connect(mapStateToProps, { ChangeTheme, ChangeLanguage })(settings)
