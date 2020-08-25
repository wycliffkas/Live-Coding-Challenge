const axios = require("axios")
exports.getInvestors = (req, res, next) => {
    axios.get("http://0.0.0.0:9000/")
    .then(result => {
        console.log("result", result)
        res.send(result.data)
    }).catch(error => {
        console.log(error)
    })
}