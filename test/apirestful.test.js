const app = require('../server')
const request = require('supertest')(`http://localhost:8080/api/productos`)
const expect = require('chai').expect;
const { describe } = require('mocha')

const testAuth = {
    username: `${process.env.TEST_USERNAME}`,
    password: `${process.env.TEST_PASSWORD}`
}

describe('Testing API RESTful', () => {
    // describe('LOGIN', () => {
    //     it('Debería iniciar sesión', async(done) => {
    //         await request.post('/login').send(testAuth).expect(200);
    //         done();
    //     })
    // })
    describe('GET', () => {
        it('Debería retornar status 200', async() => {
            const response = await request.get('/');
            expect(response.status).to.equal(200);
        });
    })
    describe('POST', () => {
        it('Debería retornar status 201', async() => {
            const obj = {
                name: 'Prueba',
                price: 0,
                thumbnail: 'urlPrueba'
            }
            const response = await request.post('/').send(obj);
            expect(response.status).to.equal(201);
        });
    })
    describe('PUT', () => {
        it('Debería retornar status 204', async() => {
            let allProducts = await request.get('/');
            allProducts = JSON.parse(allProducts.text).result;
            const lastProd = allProducts[allProducts.length - 1]
            const obj = {
                name: 'Prueba11',
                price: -1,
                thumbnail: 'urlPrueba1'
            }
            const response = await request.put(`/${lastProd.id}`).send(obj);
            expect(response.status).to.equal(204);
        });
    })
    describe('DELETE', () => {
            it('Debería retornar status 204', async() => {
                let allProducts = await request.get('/');
                allProducts = JSON.parse(allProducts.text).result;
                const lastProd = allProducts[allProducts.length - 1]
                const response = await request.delete(`/${lastProd.id}`)
                expect(response.status).to.equal(204);
            });
        })
        // describe('LOGOUT', () => {
        //     it('Debería cerrar sesión', async() => {
        //         await request.get('/logout');
        //     })
        // })
})