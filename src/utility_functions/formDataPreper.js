
const formData = new FormData();
// formData.append('myFile', input.files[0]);


export default function formDataPreparer(json){
  const formData = new FormData();

  const recursion = (json,index)=>{
    if (typeof json === "object" && !Array.isArray(json)){
      Object.keys(json).forEach(key=>{
        recursion(json[key],key)
      })
    } else if (typeof json === "object" && Array.isArray(json)){
      json.forEach((item,index)=>{
        recursion(item,index);
      })
    } else {
      if (json instanceof File ){
        console.log(json,index);
      }
    }
  }
}