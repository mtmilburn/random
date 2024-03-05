
/* Require modules
--------------------------------------------------------------- */
const jwt = require('jwt-simple')
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()


/* Require the db connection and models
--------------------------------------------------------------- */
const db = require('../models')


/* Require the JWT config
--------------------------------------------------------------- */
const config = require('../../jwt.config.js')


/* Middleware that checks if a JWT sent from the client is valid.
   Used for all routes that require authorization
--------------------------------------------------------------- */
const authMiddleware = (req, res, next) => {
    // Check if the 'Authorization' header is present and has the token
    const token = req.headers.authorization;
    if (token) {
        try {
            // Decode the token using the secret key and add the decoded payload to the request object
            const decodedToken = jwt.decode(token, config.jwtSecret);
            req.user = decodedToken;
            next();
        } catch (err) {
            // Return an error if the token is invalid
            res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        // Return an error if the 'Authorization' header is missing or has the wrong format
        res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }
};


/* Routes
--------------------------------------------------------------- */
router.get('/', authMiddleware, async (req, res) => {
    const favorites = await db.Favorite.find(
        {userId: req.user.id},
        {userId: 0}
        )
        res.json(favorites)
    })


// Create Route (POST/Create): This route receives a POST request and
// creates a new favorite document using the request body
router.post('/', authMiddleware, async (req, res) => {
    const favorite = await db.Favorite.create({
        ...req.body,
        // The auth middleware validated the JWT token
        // and added the decoded payload to the req.user object
        userId: req.user.id
    })
    console.log(favorite)
    res.json(favorite)
})

router.delete('/:id', authMiddleware, async (req, res)=> {
    const userFavorite= await db.Favorite.findOne({ factId: req.params.id, userId: req.user.id})
    if (userFavorite){
        const deletedFavorite = await db.Favorite.findOneAndDelete({ factId: req.params.id, userId: req.user.id })
        res.send('You deleted Favorite ' + deletedFavorite.id)

    } else {
        res.status(401).json({ message: 'Invalid user' })
    }
})
/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
