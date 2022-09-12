import React, { Component } from 'react';
import { StyleSheet, Dimensions, ImageBackground, color } from 'react-native';

const style = StyleSheet.create({

    pView: {
        backgroundColor: '#7B68EE',
        alignContent: 'center',
        alignItems: 'center',
        height: 1000
    },

    titleView: {
        fontSize: 40,
        color: 'white',
        marginTop: 40
    },

    counterView: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 3,
        width: 300,
        marginTop: 30
    },

    counterText: {
        fontSize: 30,
        color: 'white'
    },

    buttonView: {
        margin: 30,
        marginTop: 80,
        flexDirection: 'row'
    },

    firstButton: {
        backgroundColor: 'lightgreen',
        width: 170,
        marginRight: 30,
        height: 40,
        borderRadius: 50
    },

    secondButton: {
        backgroundColor: 'lightgreen',
        width: 170,
        height: 40,
        borderRadius: 50
    },

    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        color: 'white'
    },

    registerView: {
        flexDirection: 'row'
    },

    registerTextView: {
        marginRight: 100
    },

    registerText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    },
})

export { style }