const router = require('express').Router();
const authService = require('../services/authService')

router.get('/login', (req, res) => {
    res.render('auth/login');
})

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    try{
        const user = await authService.login(username, password);
        res.cookie('auth', token, {httpOnly: true})
    }catch(err){
        res.redirect('/')
    }
    
})

router.get('/register', (req,res) => {
    res.render('auth/register');
})

router.post('/register', async(req, res) => {
    const {username, password, repeatPassword} = req.body;
    if(password !== repeatPassword){
        return res.render('/404');
    }

    const existingUser = await authService.getUserByUsername(username);

    if(existingUser){
        return res.render('/404');
    }

    const user = await authService.register(username, password);

    res.redirect('/login')
})

module.exports = router