import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.render('index', { title: 'Node Project', path: '/' })
})

router.get('/about', (req, res) => {
  res.render('about', { title: 'About me!', path: '/about' })
})

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'contact me!', path: '/contact' })
})

router.use((req, res) => {
  res.status(404).render('404-page', { 
    title: '404 Not Found',
    path: req.path 
  });
});

export default router
