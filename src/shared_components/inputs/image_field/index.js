import React from 'react';
import { FormControl, InputLabel, Input,TextField, FormHelperText } from '@mui/material'
import axios from 'axios';
class ImageField extends React.Component {

  constructor(props) {
    super(props)
    if (!this.props.fieldName){
      throw new ReferenceError("'fieldName' is missing from props!")
    }
    this.state = {
      file:this.props.value? this.props.value:null
    }
  }

  loadImage(file){
      const formData = new FormData()
      formData.append("image", file, file.name);
      axios.post('/upload',formData,{params:{folderName:"productInventory"}}).then(response=>{
        this.props.setValue("/"+response.data.image.path);
      })
      this.setState({file:URL.createObjectURL(file)});
  }

  render() {
    return (
      <div style={{margin:'16px 0px',height: '60px', display:'flex',alignItems:"center"}} id={this.props.fieldName}>
       <FormControl
       sx={{border:'1px solid black',padding:'20px',orderRadius:'6px',background:"rgba(178, 123, 60, 0.2901960784)"}}>
        <span style={{position:'absolute',top:"-2px"}}>{this.props.label}</span>
        <input
         type="file"
         onClick={(event) => {this.setState({file:null})}}
         onChange={(event) => {
          if (event){ this.loadImage(event.target.files[0]);}
        }}
        />
        </FormControl>
        {this.state.file? <div className="image" style={{display:'block',position:"relative",right:"100px",background:'orange',width:"50px",height:"50px"}}>
          <img width="100%" height="100%" src={this.state.file}></img>
        </div>: null}

      </div>
    );
  }

}
export default ImageField;