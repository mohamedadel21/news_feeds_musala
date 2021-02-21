import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, SafeAreaView, RefreshControl } from "react-native";
import NewsFeedItem from '../components/NewsFeedItem'
import Input from '../components/Input'
import { getNewFeed } from '../Redux/actions'
import { connect } from 'react-redux';

const News = (props) => {

    const onRefresh = () => {
        props.getNewFeed()
    }

    useEffect(() => {
        props.getNewFeed()
    }, [])

    const styles = StyleSheet.create({


        Container: {
            flex: 1,
            backgroundColor: props.theme.background
        },

    });

    const renderItem = ({ item }) => {


        return (
            <NewsFeedItem
                image={item.urlToImage}
                title={item.title}
                author={item.author}
                description={item.description}
                publishedAt={item.publishedAt}
                content={item.content}
                url={item.url}
                onPress={()=>{
                    props.navigation.navigate("details",{post:item})
                }}


            />


        );

    }

    const _keyExtractor = (item, index) => index;

    return (
        <SafeAreaView
            style={styles.Container}
        >

            <Input
                placeholder={props.lang.search}
                placeholderTextColor={props.theme.borderAlt}
                autoCorrect={false}
                textContentType='name'
                marginTop={30}
                width="95%"
                height={50}
                alignSelf='center'
                color={props.theme.text}
                backgroundColor={props.theme.backgroundAlt}
                secureTextEntry={false}
                borderRadius={5}
                elevation={1}
                shadowOpacity={.1}
                iconName='user'
                iconColor={props.theme.text}
                onChangeText={(query) => {
                    if (query) {
                        props.getNewFeed(query)
                    }else{
                        props.getNewFeed()

                    }
                }}


            />

            <FlatList
                data={props.newsfeed}
                renderItem={renderItem}
                keyExtractor={_keyExtractor}
                refreshControl={
                    <RefreshControl refreshing={props.loading} onRefresh={onRefresh} />
                }
            />



        </SafeAreaView>
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
export default connect(mapStateToProps, { getNewFeed })(News)
