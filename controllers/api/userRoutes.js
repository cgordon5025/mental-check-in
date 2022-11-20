const router = require('express').Router();

const { User, Grandparents, Parents, Siblings, DiaryEntry } = require('../../models');

//lets get all of our users
//our URL at this point is localhost:3001/api/users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{ model: Grandparents }, { model: Parents }, { model: Siblings }, { model: DiaryEntry }]
        });
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
})
//get a single user
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{ model: Grandparents }, { model: Parents }, { model: Siblings }, { model: DiaryEntry }]
        })

        if (!userData) {
            res.status(400).json({ message: "no user found with this id" })
        } else {
            res.status(200).json(userData)
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

//lets add a new user
router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        console.log(userData)
        const newFam = await Family.create({
            name: userData.username,
            user_id: userData.id
        })
        const newDiary = await Diary.create({
            name: userData.username,
            user_id: userData.id
        })
        //these are cookies that will acknowledge you're actually logged in and allow you to see certain parts of the site
        if (!userData) {
            res.status(500).json({ message: "Error cannot create a new user" })
        } else {
            req.session.save(() => {
                req.session.loggedIN = true;
                req.session.userID = userData.id;
                // res.status(200).json(userData)

                res.status(200).json(userData, newFam, newDiary)
            })
            console.log(req.session.loggedIN)
        }

    } catch (err) {
        res.status(500).json(err)
    }
})

//lets try and log in
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } })
        if (!userData) {
            res.status(404).json({ message: "login failed please try again" })
        }
        const validPass = await userData.checkPassword(req.body.password)
        if (!validPass) {
            res.status(404).json({ message: "incorrect password, please try again" })
            return
        }
        //readd inn username once this are up and running, why doesn't it work?
        req.session.save(() => {
            req.session.loggedIN = true;
            req.session.userID = userData.id;
            res.status(200).json({ message: "yay you are now logged in!" })
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//and lets logout now to end the session 
router.post('/logout', async (req, res) => {
    try {
        console.log("logging out")
        if (req.session.loggedIN) {
            req.session.destroy(() => {
                res.status(204).end()
            });
        } else {
            res.status(404).end()
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router