/* eslint-disable max-len */
// import React from 'react';
// import './inventory_page.scss';
// import List from '@mui/material/List';
// import Button from '@mui/material/Button';
// import {
//   FormControl,
//   FormGroup
// } from '@kuberspace/kuberform';

// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';

// class InventoryPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.productForm = React.createRef();
//     this.openDialog = this.openDialog.bind(this);
//     this.addUnit = this.addUnit.bind(this);
//     this.submit = this.submit.bind(this);
//     this.openEditDialog = this.openEditDialog.bind(this);
//     this.editUnit = this.editUnit.bind(this);
//     this.state = {
//       productId: null,
//       units: [],
//       openDialog: false,
//       openEditDialog: []
//     };
//   }

//   // onload if productId exists load productId. set form value to product
//   // when submit form if productId exists then patch edit
//   // or if productId exists delete

//   addUnit(unit) {
//     if (unit) {
//       this.state.units.push(unit);
//       // eslint-disable-next-line react/no-access-state-in-setstate
//       this.setState({ units: this.state.units, openDialog: false });
//     } else {
//       this.setState({ openDialog: false });
//     }
//   }

//   openDialog() {
//     this.setState({ openDialog: true });
//     // set value broken in kuberform
//     // control should not take a component should just take the children instead
//   }

//   submit() {
//     const FORM = this.productForm.current;
//     console.log('form', form);
//     return;
//     if (form.invalid === false) {
//       var valueToSubmit = Object.assign(form.getRawValue(), { units: this.state.units });
//       console.log(valueToSubmit);
//     } else {
//       // send error please add units to the product
//     }
//   }

//   openEditDialog(index) {
//     this.state.openEditDialog[index] = true;
//     this.setState({ openEditDialog: this.state.openEditDialog });
//   }

//   editUnit(unit, index) {
//     this.state.openEditDialog[index] = false;
//     if (unit) {
//       this.state.units[index] = unit;
//     }
//     this.setState({ openEditDialog: this.state.openEditDialog, units: this.state.units });
//   }

//   deleteUnit(index) {
//     this.state.units.splice(index, 1);
//     this.setState({ units: this.state.units });
//   }

//   render() {
//     var errorMessages = {
//       productName: {
//         invalidCharacterCount: 'must have 3 or more characters',
//         required: 'this field is required'
//       },
//       title: {
//         invalidCharacterCount: 'must have 3 or more characters',
//         required: 'field is required'
//       }
//     };
//     var Container = function (props) {
//       console.log('container props', props);
//       return (
//         <div className="mycontainer">
//           {props.children}
//         </div>
//       );
//     };
//     var Input = (props)=> (
//       <input className="box" />
//     );

//     return (
//       <div className="dashboard-body">

//         <FormGroup ref={this.productForm} groupName="productForm">
//           <Container container>

//             <FormControl sx={{ display: 'inline-block' }} validators={[lengthValidator(3), requiredValidator()]} fieldName="productName">
//               <InputField errorMessages={errorMessages.productName} label="Product Name" />
//             </FormControl>

//             <FormControl sx={{ display: 'inline-block' }} validators={[requiredValidator()]} fieldName="quantity">
//               <InputField width="100px" type="number" />
//             </FormControl>

//             <FormControl sx={{ display: 'inline-block' }} validators={[requiredValidator()]} fieldName="test">
//               {function control(props) {
//                 return (
//                   <div>
//                     <label style={{ display: 'block' }} id="form-status"> Status: </label>
//                     <label style={{ display: 'block' }}>test</label>
//                     <input className="test-input" />
//                     {props.errors ? <span>theres errors</span> : null}
//                   </div>
//                 );
//               }}
//             </FormControl>

//             <FormControl sx={{ display: 'inline-block' }} validators={[lengthValidator(12, true), typeValidator('int')]} fieldName="upc">
//               <InputField width="100px" label="UPC" />
//             </FormControl>

//             <FormControl sx={{ display: 'inline-block' }} fieldName="model">
//               <InputField width="100px" label="Model" />
//             </FormControl>

//             <FormControl sx={{ display: 'inline-block' }} validators={[lengthValidator(8)]} fieldName="sku">
//               <InputField width="100px" label="Sku" />
//             </FormControl>

//             <FormControl sx={{ display: 'inline-block' }} fieldName="unique_id">
//               <InputField width="100px" label="Unique Id" />
//             </FormControl>

//             <FormControl sx={{ display: 'inline-block' }} fieldName="bin">
//               <InputField width="100px" label="bin" />
//             </FormControl>
//           </Container>
//         </FormGroup>
//         Units
//         {this.state.openDialog ? <UnitDialog header="Add Unit" open={this.state.openDialog} closeDialog={this.addUnit} /> : null}
//         <div className="varient-list-ct">
//           <List sx={{ height: '85%', width: '100%', border: '2px solid black' }}>
//             {this.state.units.map((item, index)=> (
//               <React.Fragment key={index}>
//                 {this.state.openEditDialog[index] ? <UnitDialog header="Edit Unit" open={this.state.openEditDialog[index]} closeDialog={this.editUnit} data={item} index={index} /> : null}
//                 <ListItem alignItems="flex-start">
//                   <ListItemAvatar>
//                     <Avatar alt="Remy Sharp" src={item.value.image} />
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary={item.value.unitName}
//                     secondary={(
//                       <>
//                         <Typography
//                           sx={{ display: 'inline', margin: '0 10px' }}
//                           component="span"
//                           variant="body2"
//                           color="text.primary"
//                         >
//                       upc:
//                           {' '}
//                           {item.value.upc}
//                         </Typography>
//                         <Typography
//                           sx={{ display: 'inline', margin: '0 10px' }}
//                           component="span"
//                           variant="body2"
//                           color="text.primary"
//                         >
//                       model:
//                           {' '}
//                           {item.value.model}
//                         </Typography>
//                         <Typography
//                           sx={{ display: 'inline', margin: '0 10px' }}
//                           component="span"
//                           variant="body2"
//                           color="text.primary"
//                         >
//                       sku:
//                           {' '}
//                           {item.value.sku}
//                         </Typography>
//                         <Typography
//                           sx={{ display: 'inline', margin: '0 10px' }}
//                           component="span"
//                           variant="body2"
//                           color="text.primary"
//                         >
//                       uniqueid
//                           {' '}
//                           {item.value.unique_id}
//                         </Typography>

//                       </>
//                 )}
//                   />
//                   <Button onClick={(e)=> { this.openEditDialog(index); }} sx={{ position: 'relative', bottom: '0' }}> Edit </Button>
//                   <Button sx={{ position: 'relative', bottom: '0' }} onClick={(e)=> { this.deleteUnit(index); }}> Delete </Button>
//                 </ListItem>
//                 <Divider variant="inset" component="li" />
//               </React.Fragment>
//             ))}
//           </List>
//           <Button sx={{ position: 'absolute', right: '0', bottom: '0' }} onClick={this.openDialog} variant="contained">Add Unit</Button>

//         </div>
//         <Button variant="contained" style={{ position: 'absolute', bottom: '0px', right: '50px' }} onClick={this.submit}>Submit</Button>
//       </div>

//     );
//   }
// }
// export default InventoryPage;
