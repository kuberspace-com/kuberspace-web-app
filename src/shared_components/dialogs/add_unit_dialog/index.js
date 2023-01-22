import {InputLabel, Typography,Input, FormHelperText,AccordionSummary,AccordionDetails,Accordion } from '@mui/material'
import * as React from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {FormArray,FormControl,FormGroup} from '@kuberspace/kuberform';
import InputField from '../../inputs/input_field/index';
import ImageField from '../../inputs/image_field/index';
// import VariantListItem from '../../shared_components/variant_list_item/index'
import Button from '@mui/material/Button';
import lengthValidator from '../../../validators/lengthValidator';
import typeValidator from '../../../validators/typeValidator';
import requiredValidator from '../../../validators/requiredValidator';

import './index.scss';
class UnitDialog extends React.Component {

  constructor(props){
    super(props);
    this.closeDialog = this.closeDialog.bind(this);
    this.cancelDialog = this.cancelDialog.bind(this);
    this.state = {units: [],error:null};
    this.ref = React.createRef();
  }

  cancelDialog(){
    console.log(this.props.index);
    this.props.closeDialog(null,this.props.index);
  }

  componentDidMount(){
    console.log('data',this.props.data)
    console.log('ref in componentDidMount',this.ref);
    if (this.props.data && this.ref.current){
      console.log('setvalue needs fix in formbuilder')
      this.ref.current.setValue(this.props.data.value);
      console.log(this.ref.current.getRawValue());
    }
  }

  closeDialog(){
    var upcEmpty = this.ref.current.getControl('upc').isEmptyValue;
    var uniqueIdEmpty = this.ref.current.getControl('unique_id').isEmptyValue;
    var modelEmpty = this.ref.current.getControl('model').isEmptyValue;
    var skuEmpty = this.ref.current.getControl('sku').isEmptyValue;
    if ([upcEmpty,uniqueIdEmpty,modelEmpty,skuEmpty].includes(false)){
      if (this.ref.current.getRawStatus() === "VALID"){
        if (this.props.data && this.props.index){
          this.props.closeDialog(this.ref.current.getRawValue(),this.props.index);
        } else {
        this.props.closeDialog(this.ref.current.getRawValue());
        }
      } else {
        this.setState({error:"please add fill all required fields out"});
      }
    } else {
      this.setState({error:"please add a product identifier"})
      return;
    }


  }

  render() {
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
      '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
      },
      '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
      },
    }));

   const BootstrapDialogTitle = (props)=> {
      const { children, onClose, ...other } = props;

      return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
          {children}
          {onClose ? (
            <IconButton
              aria-label="close"
              onClick={onClose}
              className='dialogClose'
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
      );
    }



    // TransitionProps={{ onEntering: this.handleEntering }}
    var errorMessages = {
      upc:{
        invalidInteger:"must be all integers",
        invalidCharacterCount:"length must be 12 digits"
      },
      quantity:{
        required: "this field is requried",
        invalidInteger:"this field must be an integer"
      },
      sku: {
        invalidCharacterCount:"must have 8 or more characters"
      }
    }

    return (
      <div>
        {this.props.open? <BootstrapDialog
        sx={{width: "100%"}}
        open={this.props.open}
        keepMounted={true}
        disablePortal={true}
        >
          <BootstrapDialogTitle sx={{background:"white"}} onClose={this.cancelDialog} id="customized-dialog-title">
            {this.props.header} <p style={{color:"red"}}>{this.state.error? this.state.error:null}</p>
          </BootstrapDialogTitle>
          <DialogContent dividers sx={{background:"white"}}>
          <div className="varient-form">
          <FormGroup ref={this.ref}  groupName="varient">
            <FormControl validators={[requiredValidator()]} errorMessages={{required:"this field is required"}}  element={ImageField} fieldName="image" label="Image" ></FormControl>
            <FormControl validators={[requiredValidator(),typeValidator("int")]} errorMessages={errorMessages.quantity} element={InputField} fieldName="quantity" label="Quantity" ></FormControl>
            <FormControl validators={[lengthValidator(12,true),typeValidator("int")]} errorMessages={errorMessages.upc} element={InputField} fieldName="upc" label="UPC" ></FormControl>
            <FormControl element={InputField} fieldName="model" label="Model" ></FormControl>
            <FormControl validators={[lengthValidator(8)]} errorMessages={errorMessages.sku} element={InputField} fieldName="sku" label="Sku" ></FormControl>
            <FormControl element={InputField} fieldName="unique_id" label="Unique Id" ></FormControl>
            <FormControl element={InputField} fieldName="bin" label="Bin" ></FormControl>
          </FormGroup>
          </div>
          </DialogContent>
          <DialogActions sx={{background:"white"}}>
            <Button autoFocus onClick={this.closeDialog}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>: null}
      </div>
    );
  }

}
export default UnitDialog;