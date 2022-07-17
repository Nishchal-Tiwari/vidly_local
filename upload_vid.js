const express = require('express');
const Router = express.Router();
const formidable = require('formidable')
const fs = require('fs');
const vid = require('./video_schema');
Router.route('/').post(
    async(req, res) => {

        var formData = new formidable.IncomingForm();
        formData.maxFileSize = 10000000000000000000000000 * 1024 * 1024;
        // console.log(formData)   

        formData.parse(req, async(err, fields, files) => {
            console.log(files)

            if (String((files.file1.mimetype)).includes("video")) {
                const x = Math.floor((Math.random() * 100000000) + 1)
                var op = files.file1.filepath;
                var np = __dirname + "/public/" + x.toString() + ".mp4";
                fs.copyFile(op, np, err => console.log(err))
                const data = {
                    path: np,
                    name: files.file1.originalFilename

                }
                const dd = new vid(data);
                await dd.save()



            } else {
                res.send("only video files allowed")
            }
        })




    }
)
module.exports = Router;