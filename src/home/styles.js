const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

//=============HOME SCREEN==================
export default {

    container : {
        backgroundColor: Platform.OS === 'ios' ? '#EFEFEF' : '#E5E5E5',
    },

    title : {
        color: Platform.OS === 'ios' ? '#000' : '#FFF',
    },

    gridView : {
        paddingTop: 15,
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
    
    itemContainer : {
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor : '#FFF',
        padding: 10,
        height : 95,
        borderRadius : 5,
        backgroundColor: '#FFF',
      },
    
    itemName : {
        paddingTop : 2,
        fontSize: 12,
        color: '#000',
        alignSelf: 'center',
      },
    
    itemIcon : {
        flexGrow:1,
        fontSize: 35,
      },
    
    
    itemContainerhm : {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor : '#FFF',
        height : 105,
        width : 105
      },
    
    itemNamehm : {
        paddingTop : 3,
        paddingBottom : 3,
        fontSize: 12,
        color: '#000',
        textAlign: 'center',
      },
    
    itemImagehm : {
        flexGrow:1,
        height:null,
        width:null,
        alignItems: 'center',
      justifyContent : 'center',
      },
    
    logo : {
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'center'
      },
    
    slideImage : {
        flex: 1,
        height: 200,
        width: null,
    },
}
