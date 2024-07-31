
const url = 'https://juseipel43.github.io/TTRPG/test.JSO';
export function getData() {
  
fetch(url)
 .then((resp)=>{
 //console.log(resp);
   //error checking
   //checking to ensure 200-299
   if (!resp.ok) throw new Error('was not a valid response');
 })
  .then()
  .catch(err=> {
  console.warn(err.message);
  });
  
}

