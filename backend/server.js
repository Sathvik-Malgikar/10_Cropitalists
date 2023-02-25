const express = require('express')
const os = require('os')

const { exit } = require('process')

const app = express()
const port = 3000

const sendKeyTo = require("./emailer.js")
const makeid = require("./keygen.js")
let tmt;

let regkey = makeid()




const netint = os.networkInterfaces()
if(!netint["Wi-Fi"])
{
    console.log("Wi-Fi is not connected,exiting..");
    exit(1)
}
const ip = netint["Wi-Fi"].slice(-1)[0].address

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/register/:email', (req, res) => {
  console.log("request for email ", req.params.email);
    clearTimeout(tmt)
    regkey = makeid()
    // tmt = setTimeout(()=>{
    //     regkey = makeid()

    // },300000)

    setTimeout(()=>{
        // console.log("before sending: ", regkey);
        let keyurl = `http://${ip}:${port}/verify/${regkey}`
    sendKeyTo(req.params.email || "sathvik.malgikar@gmail.com",keyurl)
    
      res.send('Mail sent')

    },250)

})

app.get('/verify/:key', (req, res) => {
//   console.log("in verif" , req.params.key);
//   console.log("in verif reg" , regkey);
if(regkey == req.params.key)  res.send('You are successfully registered, check the app!')
else  res.send('Authentication failed! Key might have expired? try again.')


})
app.get('/loc2ip', (req, res) => {

  console.log("loc2ip req",'\n');
res.send(`http://${ip}:${port}`)

})

app.listen(port, ip)
app.listen(port)
console.log(` server up and running, listening at http://${ip}:${port}/`);





