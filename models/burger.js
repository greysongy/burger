//file path may not be correct
var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    }, 
    //maybe transition to more generic create as modeled in cat activity
    create: function() {

    }, 
    update: function() {

    }
};

module.exports = burger;