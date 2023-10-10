let app = require("../index");
let supertest = require("supertest");
let request = supertest(app);

test("A aplicação deveria responder",() => {

    return request.get("/").then(res => {
        let status = res.statusCode
        expect(status).toEqual(200);
    }).catch(err => {
        fail(err)
    });
})

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

test("Teste DAST",async () => {
    await sleep(2000);
    const comando = 'nikto -h http://localhost:8882';

    exec(comando, (error, stdout, stderr) => {
        if (error) {
          console.error(`Erro: ${error.message}`);
          return;
        }
        
        if (stderr) {
          console.error(`Erro padrão: ${stderr}`);
          return;
        }
      
        console.log(`Saída padrão: ${stdout}`);
      });
})




