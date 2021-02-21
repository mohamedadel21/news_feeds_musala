
import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import Colors from '../Utils/Colors';

const { height, width } = Dimensions.get('window');

const input = (props) => {

    const styles = StyleSheet.create({

        viewStyle: {
            backgroundColor: Colors.white,
            height: 32
            , width: 200,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#c2c2c2',
            shadowOpacity: .2,
            shadowOffset: { width: 0, height: 2 },
            elevation: 2,
            borderRadius: 50,
        },
        inputContainerStyle: {

            borderColor: Colors.lightGrey,
            borderBottomWidth: props.borderBottomWidth,
            borderWidth: 1,
            width:  props.width,
            backgroundColor: props.backgroundColor,
            borderRadius: props.borderRadius,
            height: props.height,
            marginTop: -5,
            alignSelf: 'flex-start',


        },
        inputStyle: {
            marginLeft: 10
            , alignSelf: 'flex-start',
            color: props.color,
            fontSize: props.fontSize,
            textAlign: 'left'
        }
    });

    return (

        <View style={{
            flexDirection: 'column',
            marginRight: props.marginRight, justifyContent: 'center',
            alignSelf: props.alignSelf, alignItems: 'flex-start',
            height: props.height, marginTop: props.marginTop
        }}  >

            <Input
                value={props.value}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                autoCorrect={false}
                autoCapitalize='none'
                inputContainerStyle={
                    styles.inputContainerStyle
                }
                inputStyle={styles.inputStyle}
                onChangeText={props.onChangeText}

            >

            </Input>

        </View>
    );
};



export default input;