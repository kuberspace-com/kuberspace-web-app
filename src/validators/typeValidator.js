export default function typeValidator(type){

  return (control,obs)=>{
    let value = control.state.value;
    type=type.toLowerCase();
    if (value === null || value === ''){
      obs.next(null);
    } else {
    if (type == "int" || type == "integer"){
      if ( Number.isInteger(parseFloat(value))){
        obs.next(null);
      } else {
        obs.next({invalidInteger:true})
      }
    }
    if (type == "float" || type == "decimal"){
      if ( Number.isInteger(parseFloat(value)) === false && parseFloat(value) !== NaN ){
        obs.next(null);
      } else{
        obs.next({invalidFloat:true})
      }
    }
    if (type == "boolean"){
      if (value === 'false' || value === 'true'){
         obs.next(null);
      } else {
        obs.next({invalidBoolean:true})
      }
    }

    if (type == "char" || type == "characters"){
      if (/\d/.test(value)){
        obs.next({stringContainsNumber:true})
      } else {
        obs.next(null);
      }
    }
  }
}

}