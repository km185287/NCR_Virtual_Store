import React, { Component } from "react";
import { View, Text, FlatList, Button,TouchableOpacity } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
 
import AsyncStorage from '@react-native-async-storage/async-storage';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

class SearchHandle extends Component {
 
  constructor(props,navigation,route) {
    super(props); 
  
    this.state = { 
      loading: false,   
      data : [
      ],
      temp : [
         {key:'Watches',page:'SearchWatchesMen',uid:1},
         {key:'Watches for Men',page:'SearchWatchesMen',uid:2},
         {key:'Watches for Women',page:'SearchWatchesMen',uid:3}, 
      ],
      error: null,
      search: ''
,    };
  }
  
  renderHeader = () => {
      return <SearchBar placeholder="Search for Products"
          round editable={true}
          value={this.state.search}
          onChangeText={this.updateSearch} />; 
  }; 
 
  updateSearch = search => {
        this.setState({ search }, () => {
            if ('' == search) {
                this.setState({
                   
                    data:[]
                });
                return;
            }
             
            console.log("search not working",search);
            this.state.data = this.state.temp.filter(function(item){
                const dataTxt=item.key.toLowerCase();
                const searchTxt=search.toLowerCase();
                return dataTxt.includes(searchTxt);
              }).map(function({key,page}) {
                return {key,page};
            }); 
        });
  };
 
  setRecentSearchCity = ({item}) => {
     
     console.log("now in ",`${item.key}`);
      try {
          //await AsyncStorage.setItem("RecentSearchCity",`${item.key}`);
          console.log("now in ",`${item.key}`);
      }catch(e) {
          console.log(e);
      }
      this.props.navigation.navigate(`${item.page}`);
  }


  renderItem = ({ item }) => (
    <TouchableOpacity style={{justifyContent:'center'}} onPress={() => {

            try {
                AsyncStorage.setItem("RecentSearchCity",`${item.key}`)
                .then(data => {
                    console.log("now in city :",`${item.key}`)
                })
                .catch(error => {
                  console.log(error);
                })
            }catch(e) {
                console.log(e);
            }
            this.props.navigation.navigate(`${item.page}`);
    }}>
        <ListItem bottomDivider >
          {/* <Avatar title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }}/> */}
          <ListItem.Content>
            <ListItem.Title>{item.key}</ListItem.Title>
            {/* <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle> */}
          </ListItem.Content>
          {/* <ListItem.Chevron /> */}
          {/* <Ionicons name="star" size={20} /> */}

        </ListItem>
    </TouchableOpacity>
  );

  render() {

    //const filterValue = route.params.filterValue;
    console.log(this.props);
    return (
      this.state.error != null ?
        (<View style={{ flex: 1, flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}>
            <Text>{this.state.error}</Text>
        </View>) : 

          (
          <>
          <FlatList
              ListHeaderComponent={this.renderHeader}
              data={this.state.data}
              keyExtractor={ item => item.uid }
              // renderItem={({item}) => {
              //     return (
              //       <TouchableOpacity style={{margin:10,justifyContent:'center'}} onPress={() => this.props.navigation.navigate(`${item.page}`)}>
              //         <ListItem.Title>{item.key}</ListItem.Title>
              //       </TouchableOpacity>
              //     )
              // }}
              renderItem = {this.renderItem}
            />
            </>)
    );
  }
}
 
export default SearchHandle;

