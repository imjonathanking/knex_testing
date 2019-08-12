const axios = require("axios");

const Test = {
    get: function(route, params){
        return axios.get("http://localhost:4000/" + route + params)
    },
    post: function(route, params){
        return axios.post("http://localhost:4000/" + route, params)
    }
}

module.exports = Test;