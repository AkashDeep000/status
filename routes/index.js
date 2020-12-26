const express = require('express')
const router = express.Router()
const Status = require('../models/status')

router.get('/', (req, res) => {
     res.render('../views/index')
})


//all status without catagory
router.get('/status', async (req, res) => {
    
  try {
    status = await Status.find().sort({ createdAt: 'desc' }).limit(510).exec()
    res.render('../views/status/statusIndex', {status: status})
  
  } catch {
    res.redirect('/')
  }
     
    
})

router.get('/status/add', (req, res) => {
    res.render('../views/status/statusAdd',{status : new Status() })
})

//add status
router.post('/status', async (req, res) => {
  const status = new Status({
    content: req.body.content,
    image: req.body.image
  })
  try {
    const newStatus = await status.save()
    // res.redirect(`authors/${newAuthor.id}`)
    res.redirect(`status/add`)
  } catch {
    res.render('../views/status/statusAdd', {
      status: status,
      errorMessage: 'Error adding Status'
    })
  }
})


//catagorized status
router.get('/status/a', (req, res) => {
    res.render('../views/status/statusCat')
})



module.exports = router