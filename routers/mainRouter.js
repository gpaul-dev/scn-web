const express=require('express');
const router=express.Router();
const auth=require('express-basic-auth');
const mainController=require('../controllers/mainController');
const authOptions={
    users:{
        admin:'Moron_pp_2022'
    },
    challenge:true,
    realm:'Moron_pp',
    unauthorizedResponse: getUnauthorizedResponse
}

function getUnauthorizedResponse(req) {
    return req.auth ? ('Usuario o contraseña incorrecta'): 'Debe escribir un usuario y contraseña valido'
}
const protect=auth(authOptions);

router.get('/',mainController.index);


module.exports=router;