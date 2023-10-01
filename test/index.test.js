let app = require("../index");
let supertest = require("supertest");
let request = supertest(app);

test("A aplicação deveria responder na porta 8888",() => {

    return request.get("/").then(res => {
        let status = res.statusCode
        expect(status).toEqual(200);
    }).catch(err => {
        fail(err)
    });

})