const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {

container : {
  backgroundColor: Platform.OS === 'ios' ? '#EFEFEF' : '#E5E5E5',
},

title : {
  color: Platform.OS === 'ios' ? '#000' : '#FFF',
},

content : {
  backgroundColor: '#fff',
},

layout_p : {
  flex : 1,
  flexDirection : 'column',
  justifyContent : 'space-between',
  padding: 10,
},

};
