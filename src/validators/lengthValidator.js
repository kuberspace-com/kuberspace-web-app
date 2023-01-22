export default function lengthValidator(length,exact){
    return (control,obs)=>{
      if (control.state.value === null || control.state.value === ''){ obs.next(null); } else {
      if (exact){
        if (control.state.length == length){
          obs.next(null);
        } else {
          obs.next({invalidCharacterCount:true})
        }
      } else {
        if (control.state.value.length >= length){
          obs.next(null);
        } else {
          obs.next({invalidCharacterCount:true})
        }
    }
  }
}
}