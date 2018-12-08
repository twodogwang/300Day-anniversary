/* eslint-disable */
var fs = require('fs')
var moment = require('moment')
var path = require('path')
let Arr = [],
    Json = ''
moment.locale('zh-cn');
fs.readdir('../public/image', function (err, file) {
    if (err) {
        console.error(err)
    } else {
        for (let i of file) {
            fs.readdir('../public/image/' + i, function (err, file) {
                if (err) {
                    console.error(err)
                } else {
                    for (let j of file) {
                        console.log(path.posix.relative(path.posix.resolve('../src/components/picPage.vue'), path.posix.resolve('..', 'src', 'assets', 'img', i, j)), path.posix.resolve('/image', i, j))
                        fs.stat(path.resolve('..', 'public', 'image', i, j), function (err, stats) {
                            if (err) {
                                console.error(err)
                                return
                            } else {
                                Arr.push({
                                    url: /* path.posix.relative(path.posix.resolve('../src/components/picPage.vue'), path.posix.resolve('..', 'src', 'assets', 'img', i, j)) */path.posix.resolve('/image', i, j),
                                    date: moment(stats.birthtime).format("YYYY MMM Do, dddd,a h:mm:ss"),
                                    desc: j.slice(0, j.indexOf('.'))
                                })
                            }
                        })
                    }
                    /* Json = JSON.stringify(Arr)
                    fs.write('picList.json', Json, function (err) {
                        if (err) {
                            console.error(err)
                        } else {
                            console.log('success')
                        }
                    }) */
                }
            })
        }
    }
})

setTimeout(() => {
    Json = JSON.stringify(Arr)
    fs.writeFile('picList.json', Json, function (err) {
        if (err) {
            console.error(err)
        } else {
            console.log('success')
        }
    })
}, 1000);