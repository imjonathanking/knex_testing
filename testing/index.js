const Test = require("./Test");

route = "api/test/"
params = { id: "Jonathan King" };

const call = () => Test.post(route, params)
    .then(res => {
        console.log("inside call");
        console.log(res.data)
    })
    .catch(err => console.log(err.data));

call();