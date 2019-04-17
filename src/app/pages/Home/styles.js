import { StyleSheet } from 'react-native'
import { Colors, Constants } from '@common'

export default StyleSheet.create({
  container: {
    height: Constants.ScreenSize.height,
    flex: 1,
    alignContent: 'center',
    backgroundColor: Colors.placeHolderColor
  },

  backgroundImage: {
    flex: 1,
    width: Constants.ScreenSize.width,
    height: Constants.ScreenSize.height
  },


  ExtraLageImage: {
    width: 483,
    height: 483,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },

  LargeImage: {
    width: 349,
    height: 349,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },

  MediumImage: {
    width: 241,
    height: 241,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },

  SmallImage: {
    width: 155,
    height: 155,
    alignSelf: 'center',
    alignContent: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },

  Logo: {
    width: 115,
    height: 65,
    alignSelf: 'center',
    padding: '5%'
  },


  content: {
    backgroundColor: Colors.placeHolderColor,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },

  btnSignIn: {
    height: 50,
    width: 314,
    alignSelf: 'center',
    borderRadius: 40,
    backgroundColor: Colors.darkBlack,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.placeHolderColor,
    marginTop: 10,
    fontWeight: '400',
    marginBottom: '5%',
  },



  text: {
    fontSize: 14,
    alignSelf: 'center',
    justifyContent: 'center',
    color: "#fff",
    marginLeft: 7
  },

  textRight: {
    textAlign: 'right',
    color: "#eee",
    right: 0,
    marginLeft: '15%'
  },

  Input: {
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: '1.5%',
    fontSize: Constants.FontSize.big,
    width: Constants.ScreenSize.width,
    fontFamily: Constants.FontFamily.Roboto_Thin
  },

  InputPassword:{
    marginLeft:'15%'
  }
})
