const { response } = require("express")


var PUBLIC = "C:/users/jkraft/apps/playground/public/"
module.exports.index = async (req, res) => {
    res.sendFile(PUBLIC+'index.html')
}
