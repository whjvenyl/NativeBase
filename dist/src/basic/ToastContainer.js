Object.defineProperty(exports,"__esModule",{value:true});exports.ToastContainer=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/ToastContainer.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require("react-native");
var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");
var _Text=require("./Text");
var _Button=require("./Button");
var _View=require("./View");
var _Toast=require("./Toast");
var _mapPropsToStyleNames=require("../Utils/mapPropsToStyleNames");var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ToastContainer=function(_Component){_inherits(ToastContainer,_Component);
function ToastContainer(props){_classCallCheck(this,ToastContainer);var _this=_possibleConstructorReturn(this,(ToastContainer.__proto__||Object.getPrototypeOf(ToastContainer)).call(this,
props));
_this.state={
modalVisible:false,
fadeAnim:new _reactNative.Animated.Value(0)};return _this;

}_createClass(ToastContainer,[{key:"getToastStyle",value:function getToastStyle()




{
return{
position:"absolute",
opacity:this.state.fadeAnim,
width:"100%",
elevation:9,
paddingHorizontal:_reactNative.Platform.OS==="ios"?20:0,
top:this.state.position==="top"?this.getTop():undefined,
bottom:this.state.position==="bottom"?this.getTop():undefined};

}},{key:"getTop",value:function getTop()
{
if(_reactNative.Platform.OS==="ios"){
return 30;
}else{
return 0;
}
}},{key:"getButtonText",value:function getButtonText(
buttonText){
if(buttonText){
if(buttonText.trim().length===0){
return undefined;
}else return buttonText;
}
return undefined;
}},{key:"showToast",value:function showToast(_ref)
{var _this2=this;var config=_ref.config;
this.setState({
modalVisible:true,
text:config.text,
buttonText:this.getButtonText(config.buttonText),
type:config.type,
position:config.position?config.position:"bottom",
supportedOrientations:config.supportedOrientations,
style:config.style,
buttonTextStyle:config.buttonTextStyle,
buttonStyle:config.buttonStyle,
textStyle:config.textStyle,
onClose:config.onClose});

if(config.duration>0){
setTimeout(function(){
_reactNative.Animated.timing(_this2.state.fadeAnim,{
toValue:0,
duration:200}).
start();
setTimeout(function(){
_this2.setState({
modalVisible:false});

},500);
},config.duration);
}else{
setTimeout(function(){
_reactNative.Animated.timing(_this2.state.fadeAnim,{
toValue:0,
duration:200}).
start();
setTimeout(function(){
_this2.setState({
modalVisible:false});

},500);
},1500);
}
_reactNative.Animated.timing(this.state.fadeAnim,{
toValue:1,
duration:200}).
start();
}},{key:"closeToast",value:function closeToast()
{var _this3=this;var
onClose=this.state.onClose;

if(onClose&&typeof onClose==="function"){
onClose();
}
_reactNative.Animated.timing(this.state.fadeAnim,{
toValue:0,
duration:200}).
start();
setTimeout(function(){
_this3.setState({
modalVisible:false});

},500);
}},{key:"render",value:function render()
{var _this4=this;
if(this.state.modalVisible){
return(
_react2.default.createElement(_reactNative.Animated.View,{style:this.getToastStyle(),__source:{fileName:_jsxFileName,lineNumber:112}},
_react2.default.createElement(_Toast.Toast,{
style:this.state.style,
danger:this.state.type=="danger"?true:false,
success:this.state.type=="success"?true:false,
warning:this.state.type=="warning"?true:false,__source:{fileName:_jsxFileName,lineNumber:113}},

_react2.default.createElement(_Text.Text,{style:this.state.textStyle,__source:{fileName:_jsxFileName,lineNumber:119}},this.state.text),
this.state.buttonText&&
_react2.default.createElement(_Button.Button,{
style:this.state.buttonStyle,
onPress:function onPress(){return _this4.closeToast();},__source:{fileName:_jsxFileName,lineNumber:121}},

_react2.default.createElement(_Text.Text,{style:this.state.buttonTextStyle,__source:{fileName:_jsxFileName,lineNumber:125}},
this.state.buttonText)))));






}else return null;
}}],[{key:"show",value:function show(_ref2){var config=_objectWithoutProperties(_ref2,[]);this.toastInstance._root.showToast({config:config});}}]);return ToastContainer;}(_react.Component);


ToastContainer.propTypes=_extends({},_reactNative.ViewPropTypes,{

style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.number,
_propTypes2.default.array])});



var StyledToastContainer=(0,_nativeBaseShoutemTheme.connectStyle)(
"NativeBase.ToastContainer",
{},_mapPropsToStyleNames2.default)(

ToastContainer);exports.

ToastContainer=StyledToastContainer;
//# sourceMappingURL=ToastContainer.js.map