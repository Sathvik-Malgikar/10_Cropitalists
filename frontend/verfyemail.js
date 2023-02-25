function verfyemail(email){
    let url = `http://172.16.174.76:3000//register/${email}`;
    fetch(url).then((resp=>{
       console.log("response recieved!");
    })).catch(err=>{
        console.error(err);
    })
    
}


export default verfyemail;
