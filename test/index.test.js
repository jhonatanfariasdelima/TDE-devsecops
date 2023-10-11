let app = require("../index");
let supertest = require("supertest");
let request = supertest(app);


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

test("Teste no login de usuario cadastrado",async () => {
    await sleep(2000);
    let user = {username: "admin", password: "123"};

    return request.post("/login").send(user).then(res => {
        let status = res.statusCode
        expect(status).toEqual(302);
    }).catch(err => {
        console.log(err);
        fail(err)
    });
})

test("Teste no login de usuario NÃO cadastrado",async () => {
    await sleep(2000);
    let user = {username: "zé da manga", password: "123"};

    return request.post("/login").send(user).then(res => {
        let status = res.statusCode
        expect(status).toEqual(403);
    }).catch(err => {
        console.log(err);
        fail(err)
    });
})

