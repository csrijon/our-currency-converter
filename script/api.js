
async function getdata() {
        let url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_dpAYApwr4e7bU3rwktgP4RLxXNASR44VoYGEkJ5R";
const options = {
    method: "GET",
}
try {
    let response= await fetch(url, options)
    let data =  await response.json()
    if (data.data) {
        // console.log(data.data)
        displaydata(data.data)
    }
    else{
        console.log("data not found")
    }
} catch (error) {
    console.error("bhai code me kya huya")
}
}
getdata()
