import React from "react";
import { Switch, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { ChangeTheme, ChangeLanguage } from '../Redux/actions'
import Colors from '../Utils/Colors'
import { connect } from 'react-redux';
import { ScaleWidth } from '../Utils/scale-width'
const settings = (props) => {



    const styles = StyleSheet.create({


        Container: {
            flex: 1,
            backgroundColor: props.theme.background,
            justifyContent: 'center',
            alignItems: 'center'
        },
        SwitchView: {
            backgroundColor: props.theme.backgroundAlt,
            justifyContent: 'center',
            alignItems: 'center',
            padding: ScaleWidth(10),
            borderRadius: ScaleWidth(5),
            width: ScaleWidth(200),
            margin: ScaleWidth(10),
            flexDirection: 'row'
        },
        SwitchText: {
            color: props.theme.text,
            marginRight: ScaleWidth(5),
            fontWeight: 'bold'
        }

    });



    return (
        <SafeAreaView
            style={styles.Container}>

            <View style={styles.SwitchView}>
                <Text style={styles.SwitchText}>
                {props.theme.type=="dark" ?props.lang.light:props.lang.dark}

                </Text>
                <Switch
                    trackColor={{ false: props.theme.text, true: Colors.darkBlue }}
                    ios_backgroundColor="#3e3e3e"
                    value={props.theme.type == "dark"}

                    onValueChange={(value) => {
                        if (props.theme.type == "dark") {
                            props.ChangeTheme("light")
                        } else {
                            props.ChangeTheme("dark")

                        }

                    }}
                />
            </View>
            <View style={styles.SwitchView}>
                <Text style={styles.SwitchText}>
                {props.lang.language}
                </Text>
                <Switch
                    trackColor={{ false: props.theme.text, true: Colors.darkBlue }}
                    ios_backgroundColor="#3e3e3e"
                    value={props.lang.type == "fr"}

                    onValueChange={(value) => {
                        console.log(props.lang.type);
                        if (props.lang.type == "en") {
                            props.ChangeLanguage("fr")
                        } else {
                            props.ChangeLanguage("en")

                        }

                    }}
                />
            </View>
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
export default connect(mapStateToProps, { ChangeTheme, ChangeLanguage })(settings)
