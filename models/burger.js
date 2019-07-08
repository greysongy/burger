//file path may not be correct
var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    }, 
    //maybe transition to more generic create as modeled in cat activity
    create: function(cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, function(res) {
            callback(res);
        })
    }, 
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;