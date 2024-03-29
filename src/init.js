var hbs = require('hbs');
var moment = require('moment');
var compression = require('compression');
var bodyParser = require('body-parser');
const path = require('path');

module.exports = function(app, express) {

    hbs.registerHelper('indianCaseTime', function (date) {
        return moment.unix(parseInt(moment(date, "YYYY-MM-DDTHH:mm:ss+05:30").format("X"))).fromNow();
    });

    hbs.registerHelper('formatTop10NewsTime', function (date, format) {
        return moment.unix(parseInt(moment(date, format).format("X"))).fromNow();
    });
    
    hbs.registerHelper('getTime', function (timestamp) {
        return moment.unix(timestamp).fromNow();
    });
    
    hbs.registerHelper('check', function (timestamp) {
        if(moment.unix(timestamp).format('D') === moment().format('D')) {
            return true;
        }
        return false;
    });
    
    hbs.registerHelper('getDayMonth', function (timestamp, format) {
        return moment.unix((parseInt(timestamp))).format(format);
    });
    
    hbs.registerHelper('calculate', function (confirm, deceased, recover) {
        let z = confirm - deceased - recover
        if(z >= 0) {
            return '+' + z;
        }
        return z;
    });

    hbs.registerHelper('checkSign', (value, sign) => {
        if(value>0 && sign=='+') return true
        else if(value<0 && sign=='-') return true
        return false
    })

    hbs.registerHelper('filterZero', (value) => {
        let str_to_int = parseInt(value)
        if(str_to_int == 0) {
            return ''
        }
        else if(value > 0) {
            return '↑ ' + value
        }
        else return '↓ ' + value*(-1)
    });

    hbs.registerHelper('isNew', (index) => {
        return index==0;
    });

    app.set('view engine', 'hbs');
    app.use(compression());
    app.use(express.static("public", {
        etag: true,
        lastModified: true,
        setHeaders: (res, path) => {

            if (path.match(/\.(css|png|jpg|jpeg|gif|ico|svg)$/)) {
                const date = new Date();
                date.setFullYear(date.getFullYear() + 1);
                res.setHeader("Expires", date.toUTCString());
                res.setHeader("Cache-Control", "public, max-age=345600, immutable");
            }
            if (path.match(/\.(js)$/)) {
                const date = new Date();
                date.setFullYear(date.getFullYear() + 1);
                res.setHeader("Expires", date.toUTCString());
                res.setHeader("Cache-Control", "public, max-age=172800, immutable");
            }
        }
    }));
    // compress all responses
    app.use('/', express.static("views", {
        etag: true,
        lastModified: true,
        setHeaders: (res, path) => {

            if (path.match(/\.(css|png|jpg|jpeg|gif|ico|svg|woff)$/)) {
                const date = new Date();
                date.setFullYear(date.getFullYear() + 1);
                res.setHeader("Expires", date.toUTCString());
                res.setHeader("Cache-Control", "public, max-age=345600, immutable");
            }
            if (path.match(/\.(js)$/)) {
                const date = new Date();
                date.setFullYear(date.getFullYear() + 1);
                res.setHeader("Expires", date.toUTCString());
                res.setHeader("Cache-Control", "public, max-age=172800, immutable");
            }
        }
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json({ type: 'application/*+json' }));
}