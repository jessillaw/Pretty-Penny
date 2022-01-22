import React, { Component }from 'react';
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

class Login extends Component{
  constructor(props){
    super(props);
    this.state= {
      email: '',
      password: ''
      }
    }


    render() {
      return (
        <React.Fragment>
        <View>
          <TextInput
            placeholder='Email'
            onChangeText={(email) => this.setState(email)}
            value={this.state.email}>
          </TextInput>
        </View>

        <View>
          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={(password) => this.setState(password)}
            value={this.state.password}
          ></TextInput>
        </View>

        <TouchableOpacity>
        <Text> Forgot Password? </Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text> Sign-Up</Text>
        </TouchableOpacity>
        </React.Fragment>
      )
    }

}

export default Login;