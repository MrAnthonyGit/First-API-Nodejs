import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.render('index', { title: 'Node Project' })
})

router.get('/about', (req, res) => {
  res.render('about', { title: 'About me!' })
})

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'contact me!' })
})

// router.use((req, res) => {
//   if (req.url != '/') {
//     res.statusCode = 404
//     res.render('404-page', { title: 'API - 404 Not found' })
//     // res.send("404 NOT FOUND");
//   }
// })

export default router
