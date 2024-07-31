
const url = 'https://juseipel43.github.io/TTRPG/test.JSON';
export function getData() {
  
fetch(url)
 .then((resp)=>{
 //console.log(resp);
   //error checking
   console.log(resp.status);
 })
  .then()
  .catch(err=> {
  console.warn(err.message);
  });
  
}

