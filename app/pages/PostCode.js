import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	ListView,
	TouchableOpacity,
	TouchableHighlight,
	Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';

export default class PostCode extends Component{

	constructor(props){
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			text: '',
			dataSource: ds.cloneWithRows(countries),
			isModalVisible: 0,
			countryName : ''		
		}
		
   }

  GetListViewItem (cName) {
	  /* Alert.alert(cName) */
	this.setState({
		countryName : cName,
		isModalVisible : 0
	})
   }

   SearchFilterFunction(text){
		const newData = countries.filter(function(item){
			const itemData = item.name.toUpperCase()
			const textData = text
			if(item.id.indexOf(textData) > -1){
				return itemData;
			}
		})
		
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(newData),
			text: text,
			isModalVisible: (newData!='' && text!='') ? 1 : 0,
			countryName: (newData!='' && text!='') ? this.state.countryName : ''
		})
		
	}
	
	countryNameEdit(countryName){
		if(countryName){
			this.setState({
				countryName: countryName 
			})
		}
	}

	ListViewItemSeparator = () => {
		return (
		  <View
			style={{
			  height: .5,
			  width: "100%",
			  padding:10,	
			}}
		  />
		);
	  }
	  
	  
	static navigationOptions = {
		header: <Header title='i-Link Survey' backColor="transparent"/>	  
	}
	showTextInputBox(){
		return(
			<View>
				<Text style={styles.textBox}>Suburb</Text>
					<TextInput 
						style={styles.inputBox}                        
						underlineColorAndroid="rgba(0,0,0,0)" 
						value = {this.state.countryName}
						onChangeText={(countryName) => this.countryNameEdit(countryName)}
					/>
			</View>	
		)
	}

	render(){
		
		return(
			<View style={styles.container}>
				<View style={styles.subcontainer}>				  
					<Text style={styles.textBox}>Postcode</Text>
					<TextInput 
						style={styles.inputBox} 
						underlineColorAndroid='rgba(0,0,0,0)' 
						onChangeText={(text) => this.SearchFilterFunction(text)}
						keyboardType='numeric'
					/>
					{
						(this.state.isModalVisible == 0) ? this.showTextInputBox() : null
					}
					
				</View>	
				
				<View style={styles.containerListView}>
				 {
					this.state.isModalVisible ? 
					<ListView
					dataSource={this.state.dataSource}
					renderSeparator= {this.ListViewItemSeparator}
					renderRow={
						(rowData) => 
						<Text style={styles.rowViewContainer} 
						onPress = {this.GetListViewItem.bind(this,rowData.name)}>{rowData.name}</Text>
					}
					style={styles.listViewbox}
					/>
					:
					null
				} 
				
				</View>
				<View style={{flex:1}}>
					<TouchableOpacity onPress={()=>this.props.navigation.navigate('Thank')} style={styles.nextbut}>
						<Text style={styles.nexttext}>Next</Text>
					</TouchableOpacity>
				</View>
			</View>
			
		);
	}
	

}

const countries = [
					{"id":"2001","name":"Afghanistan"},
					{"id":"2013","name":"India"},
					{"id":"2000","name":"Sydney"},
					{"id":"2017","name":"Algeria"},
					{"id":"2016","name":"American Samoa"},
					{"id":"2012","name":"AndorrA"},
					{"id":"2014","name":"Angola"},
					{"id":"2015","name":"Anguilla"},
					{"id":"2000","name":"Antarctica"}
  				]

const styles = StyleSheet.create({
	container:{
		flex: 1, 
		backgroundColor: '#FFFFFF',
		flexDirection:'column', 
		position:"relative"
	},
	subcontainer: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		alignItems: 'center',
		justifyContent: 'center',
		position:"relative"
	},
	nextbut: {
		height: 80,
		backgroundColor: '#73328E',
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 1
	  },
	  nexttext: { 
		color: '#fff',
		fontSize:25
	 },
	inputBox: {
		width: 310,
		alignSelf: 'center',
		borderColor: '#73328E',
		color: '#73328E',
		fontSize: 18,
		borderWidth: .5,
		borderRadius: 25,
		textAlign: 'center',
		marginBottom: 15		
	},
	rowViewContainer: {
		fontSize: 20,
		width: 310,
		color:"#fff",
		justifyContent: "center",
		alignItems:"center",
		paddingHorizontal:27,
		textAlign:'center',
		fontWeight:"bold"
	},
	listViewbox: {
		marginTop: 5,
		width: 310,
		alignSelf: 'center',
	},
	textBox:{
		fontSize: 18, 
		color: '#73328E',
		alignSelf:"stretch",
		paddingLeft:10, 
		lineHeight:40,
		fontWeight:'bold'
	},
	containerListView:{
		borderRadius:20,
		top:120, 
		position:"absolute", 
		left:25, 
		height:200, 
		backgroundColor:"#000",
		opacity:0.8
	}
});	

