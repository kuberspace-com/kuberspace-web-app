import React from 'react';
import { FormControl, InputLabel, TextField, FormHelperText } from '@mui/material'

class InputField extends React.Component {

  constructor(props) {
    super(props)
  }
  getErrorMessage(){
    if (this.props.errors === null){return null};
    if (this.props.errorMessages && this.props.touched && this.props.invalid){
      return Object.keys(this.props.errorMessages).map(key=>{
        if (this.props.errors[key]){
          return (<FormHelperText key={key} error={true}> {this.props.errorMessages[key]}</FormHelperText>)
        }
      })
    }
  }

  render() {
    return (
      <div style={{margin:'16px 0px',marginRight:"20px"}} >
        <FormControl sx={{width: this.props.width? this.props.width: "150px" }}  >
         <TextField
          variant="filled"
          type={this.props.type}
          error={ this.props.touched && this.props.invalid ? true:false}
          multiline={this.props.type === "number" ? false:true}
          maxRows={3}
          id="outlined-error outlined-number"
          label={this.props.label}
          defaultValue={this.props.value}
        />
        {this.getErrorMessage()}
        </FormControl>

      </div>
    );
  }

}
export default InputField;