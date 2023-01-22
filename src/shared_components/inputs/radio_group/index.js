
import React from 'react';
import {FormControl, InputLabel, Radio,RadioGroup, FormControlLabel } from '@mui/material'

class RadioGroupField extends React.Component {

  constructor(props) {
    super(props);

    if (!this.props.fieldName){
      throw new ReferenceError("'fieldName' is missing from props!")
    }
    this.picked = this.picked.bind(this);
  }

picked(e){
  const value = e.target._wrapperState.initialValue === 'true'? true:false;
  this.props.setValue(value)
}
  render() {
    return (

      <div style={{margin:'16px 0px'}} id={this.props.fieldName}>
        <label style={{display:'block'}}>{this.props.label}</label>
        <FormControl>
        <RadioGroup
        onChange={this.picked}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="false"
          name="radio-buttons-group"
        >
          <FormControlLabel value="false" control={<Radio />} label="false" />

          <FormControlLabel value="true" control={<Radio />} label="true" />
        </RadioGroup>
      </FormControl>
      </div>
    );
  }

}
export default RadioGroupField;
