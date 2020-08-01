const express = require('express')
const mysql = require('mysql')

// Create connection
const db = mysql.createConnection({
  host      : 'localhost',
  user      : 'hafid',
  password  : '2000',
  database  : 'nodemysql'
})

// Connect
db.connect((err) => {
  if (err) throw err

  console.log('Mysql connected...')
})

const app = express()

// Create DB
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql'

  db.query(sql, (err, result) => {
    if (err) throw err

    console.log(result)
    res.send('database created...')
  })
})

// Create table
app.get('/createpoststable', (req, res) => {
  let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))'
  db.query(sql, (err, result) => {
    if (err) throw err
    console.log(result)
    res.send('Posts table created...')
  })
})

// Insert post 1
app.get('/addpost1', (req, res) => {
  let post = {title: 'Post One', body: 'This is Post number one'}
  let sql = 'INSERT INTO posts SET ?'
  let query = db.query(sql, post, (err, result) => {
    if(err) throw err
    console.log(result)
    res.send('Post 1 added...')
  })
})

// Insert post 2
app.get('/addpost2', (req, res) => {
  let post = {title: 'Post Two', body: 'This is Post number two'}
  let sql = 'INSERT INTO posts SET ?'
  let query = db.query(sql, post, (err, result) => {
    if(err) throw err
    console.log(result)
    res.send('Post 2 added...')
  })
})

// Select posts
app.get('/getposts', (req, res) => {
  let sql = 'SELECT * FROM posts'
  let query = db.query(sql, (err, result) => {
    if(err) throw err
    res.send(result)
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))