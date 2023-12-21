const app = require('../../app');
const request = require('supertest');
const Course = require('../models/course.model');

jest.setTimeout(30000);

let id = '';

beforeAll(async () => {
    await Course.deleteMany(); //delete already exist categories
});

test('should insert a new Course', async () => {
    await request(app).post('/course/create').send({
        name: "dddd",
        code:"ttttt",
        passMark: 357,
        lectureInCharge: "Nimalvvv"
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})

