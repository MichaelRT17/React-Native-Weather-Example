import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default class SearchInput extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            text:''
        }
    }

    handleChange = (text) => {
        this.setState({text: text})
    }

    submit = () => {
        if(!this.state.text) return;
        this.props.onSubmit(this.state.text); 
        this.setState({text:''})
    }

  render() {
      const {placeholder} = this.props
      const {text} = this.state
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect = {false}
          placeholder = {placeholder}
          placeholderTextColor = "white"
          underlineColorAndroid = "transparent"
          style = {styles.textInput}
          clearButtonMode = "always"
          onChangeText={this.handleChange}
          name = 'text'
          value = {text}
          onSubmitEditing = {this.submit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: "#666",
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  textInput: {
    flex: 1,
    color: "white"
  }
});
