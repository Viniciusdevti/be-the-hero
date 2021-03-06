const express = require ('express');
const  { celebrate, Segments, Joi} = require ('celebrate');



 const routes = express.Router();
 const OngController = require('./controllers/OngController');
 const IncidentsController = require('./controllers/IncidentsController');
 const ProfileController = require('./controllers/ProfileControoler');
 const SessionController = require('./controllers/SessionController');

 routes.get('/ongs', OngController.index);

 routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(12).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),

    })

}),OngController.create);

 routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(), 
    }).unknown(),



 }), ProfileController.index);

 routes.post('/session', SessionController.create);

 
 
 routes.get('/incidents', celebrate ({
     [Segments.QUERY]: Joi.object().keys({
         page: Joi.number()
     })
 }),IncidentsController.index);



 routes.post('/incidents', celebrate({

    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(), 
    }).unknown(),
   
    
 }), IncidentsController.create);



 routes.delete('/incidents/:id', celebrate({
   [Segments.PARAMS]: Joi.object().keys({
   id: Joi.number().required(),
})
 }), IncidentsController.delete);
 
 module.exports = routes;