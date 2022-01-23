const express  = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.redirect('/');
})


router.get('/:id', (req,res,next)=>{
    let {id} = req.params;
    let {projects} = res.locals;
    if(projects[id]){
        res.locals.project = projects.find( project => project.id === id);
        return res.render('project');
    }
    error = new Error('Project not found');
    error.status = 404;
    next(error);
})

module.exports = router;