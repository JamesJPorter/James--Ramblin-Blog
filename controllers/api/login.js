const router = require('express').Router();
const { User } = require('../../models');

router.post('/user', async (req, res)=>{
    try {
       const newUser = User.create();

       //session
    }catch{}
}
);

router.post('/login', async (req, res)=>{
    try {
       const newUser = User.findByPk();
       //compare password

       //session
    }catch{}
}
);


