import React from 'react'
import {
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  ToastAndroid
} from 'react-native'
import styles from './styles'
import { Text, Input, Button } from '@components'

import { connect } from 'react-redux'
import { ActionCreators } from '@actions'
import { bindActionCreators } from 'redux'
import * as ActionTypes from '@actions/ActionTypes'

import { Icons, Constants } from '@common'
import ToggleSwitch from 'toggle-switch-react-native'
import { Icon } from 'native-base';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
    toggle: true
  }

  render() {
    let { signUp, goBack, type } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={Icons.background} style={styles.container}>
          <View style={{ alignContent: 'center' }}>
            <ImageBackground source={Icons.EtraLargeCircle} style={styles.ExtraLageImage}>
              <ImageBackground source={Icons.LargeCircle} style={styles.LargeImage}>
                <ImageBackground source={Icons.MediumCircle} style={styles.MediumImage}>
                  <ImageBackground source={Icons.SmallCircle} style={styles.SmallImage}>
                    <Image source={Icons.logo} style={styles.Logo} />
                  </ImageBackground>
                </ImageBackground>

                <Input
                  placeholder={'Your Username'}
                  value={this.state.email}
                  onChangeText={(email) => this.setState({ email })}
                  style={styles.Input}
                  placeholderTextColor="#fff"
                />
                <Image source={Icons.underline} style={{ width: 336, height: 20, alignSelf: 'center', marginTop: '-7%' }} />

              </ImageBackground>

              <Input
                placeholder={'Your Password'}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                style={[styles.Input, styles.InputPassword]}
                placeholderTextColor="#fff"
              />
              <Image source={Icons.underline} style={{ width: 336, height: 20, alignSelf: 'center', marginTop: '-5%' }} />

            </ImageBackground>
          </View>
          <View style={{ margin: '5%', flexDirection: 'row' }}>

            <ToggleSwitch
              isOn={this.state.toggle}
              onColor='#f7740f'
              offColor="#000"
              size='small'
              onToggle={(isOn) => this.setState({ toggle: !this.state.toggle })}
            />
            <Text style={styles.text}>Remember me</Text>
            <Text style={[styles.text, styles.textRight]}>Forgot Password</Text>
          </View>
          <Button title={'Log In'} style={styles.btnSignIn} loading={type == ActionTypes.BeginPostFetch} onPress={this.signIn} />
          <Text style={[styles.text, { color: '#919191' }]}>Don't have an account ?<Text style={[styles.text, { marginLeft: '10%', fontSize: 18 }]}>  Sign up</Text></Text>
        </ImageBackground>


      </SafeAreaView>
    )
  }

  signIn = () => {
    let { email, password } = this.state
    if (email.trim().length > 0 && password.trim().length > 0) {
      this.props.getPosts()
    } else {
      alert("Fill all the fields");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.type === ActionTypes.SuccessPostFetch) {
      ToastAndroid.showWithGravity("Login Successful", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
    }

  }

}

function mapStateToProps({ PostsReducers }) {
  return {
    type: PostsReducers.type,
    message: PostsReducers.message,
    posts: PostsReducers.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
