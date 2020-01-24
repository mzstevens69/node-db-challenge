
const express = require('express');

const router = express.Router();

const Projects = require('./projects-model')
// get all projects
router.get('/', (req,res) => {
    Projects.getProject()
    .then(projects => {
        projects.map(bool => {
            if(bool.Completed == 1)bool.Completed = true; 

             else bool.Completed = false
        })
        res.json(projects)
    })
    .catch(err => {
        res.status(500).json({
            message: "Could not retrieve projects"
        })
    })
})

//POST create a project

router.post('/', (req, res) => {
    
    const proj = req.body;
  
    Projects.addProject(proj)
    .then(addP => {
      res.status(201).json(addP);
    })
    .catch (err => {
      res.status(500).json({ message: 'Could not create a new project' });
    });
  });

  // GET all Resources
  router.get('/resources', (req,res) => {
    Projects.getResource()
    .then(resource => {
        res.json(resource)
    })
    .catch(err => {
        res.status(500).json({
            message: "Could not retrieve resources"
        })
    })
})

//POST add  a resource
router.post('/resources', (req, res) => {
    const resc = req.body;
  
    Projects.addResource(resc)
    .then(addR => {
      res.status(201).json(addR);
    })
    .catch (err => {
      res.status(500).json({ message: 'Could not create a new resource' });
    });
  });

  //GET a list of Tasks
  router.get('/tasks', (req, res) => {
   
    Projects.getTask() 
        .then(tsks => {
//map through completed and make the logic changes returning the new value-text            
        tsks.map(bool => {

            if(bool.Completed == 1)bool.Completed = true; 

             else bool.Completed = false
        }) 

        res.json(tsks);
    }) 
    
    .catch(err => {
      res.status(500).json({ message: 'Could not get tasks' });
    });
  });

  // POST add a task

  router.post('/tasks', (req, res) => {

    const tks = req.body;
     
    Projects.addTask(tks)
    .then(tk => {

        res.status(201).json(tk);
    })
    
    .catch (err => {
      res.status(500).json({ message: 'Could not create a new task.' });
    });
  });


module.exports = router