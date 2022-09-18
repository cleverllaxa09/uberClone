import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-blue h-full`}>
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={{
            url: './icon.png',
          }}
        ></Image>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
