import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const SearchBar = () => {
    const [text, onChangeText] = React.useState('');
    return (
        <SafeAreaView>
            <TextInput
             style={styles.input}
             onChangeText = {onChangeText}
             placeholder={'Search Events'}
             value={text}
            />
        </SafeAreaView>
        
    );

};
const styles = StyleSheet.create({
    input: {
        height: 40,
        marginLeft: 50,
        marginRight: 50,
        borderWidth: 1,
        marginTop:10,
        borderRadius: 14,
        padding: 10,
        backgroundColor: '#ffffff',
    },
});

export default SearchBar;