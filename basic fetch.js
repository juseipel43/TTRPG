
const url = 'https://juseipel43.github.io/TTRPG/test.JSON';
export function getData() {
  
fetch(url)
 .then((resp)=>{
 //console.log(resp);
   //error checking
   //checking to ensure 200-299
   if (!resp.ok) throw new Error('was not a valid response');
   return resp.json(); //method to extract JSON string and conver it to an object
 })
  .then((dataobj)=> {
    console.log(dataobj.Strength);
  })
  .catch(err=> {
  console.warn(err.message);
  });
  
}

