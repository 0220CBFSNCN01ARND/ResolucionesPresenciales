const fs = require('fs')
const path = require('path')

module.exports = {
    index: async (req, res) => {

        const filePath = "dashboard/index.html"
        if (fs.existsSync(filePath)) { // or fs.existsSync
            res.sendfile(filePath);
        }


    },
};
