// // import '../App.scss';
// import React from 'react';
// import {Box,List,ListItem,ListItemAvatar,Avatar,ListItemText,TextField,Typography} from  '@mui/material';
// import axios from 'axios';
// import {getCookie} from '../../utility_functions/cookie'

// class SearchForm extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       items:[]
//     }
//     this.search = this.search.bind(this)

//   }

//    search(e){
//     var val = e.target.value;
//      axios.get('/searchProducts',
// {params:{query:val,userId:getCookie('userId')},headers:{token:"Bearer "+ getCookie('userId')} }).then(response=>{
//       console.log(response.data)
//       this.setState({items:response.data.data})
//      })
//    }

//    render(){

//     return (<Box  className="foundRelated" sx={{
//       width: "100%",
//       height: "auto",
//       backgroundColor: 'white',
//       maxHeight: "800px",overflow: "scroll"
//     }} >
//     <div className="wrapper" style={{"display":"block","width":"100%"}}>
//     <TextField onChange={this.search} id="outlined-basic"  label="SEARCHBAR" variant="outlined" /></div>
//       {this.state.items.map((item,index)=>{
//         return (  <ListItem key={index}
// style={{borderBottom:"1px solid white",maxHeight: "140px"}}
// alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="productimage" src={item.image} />
//         </ListItemAvatar>
//       <ListItemText
//     primary={item.brand + " " + item.model}
//     secondary={
//       <React.Fragment>
//         <Typography
//           sx={{ display: 'block',  margin: '10px 10px' }}
//           component="span"
//           variant="body2"
//           color="text.primary"
//         >
//           upc: {item.upc}
//         </Typography>
//         <Typography
//           sx={{ display: 'block',  margin: '10px 10px' }}
//           component="span"
//           variant="body2"
//           color="text.primary"
//         >
//           {item.title}  quantity: {item.quantity}
//         </Typography>
//       </React.Fragment>
//     }
//   />
//   </ListItem>);
//       })}
//      <List component="nav" aria-label="main mailbox folders">

//      </List>

//     </Box>)

//    }

// }
// export default SearchForm;
