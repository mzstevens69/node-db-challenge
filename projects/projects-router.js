
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

//POST create a resource
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
  router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
  
    Projects.getTask(id)
    .then(tsk => {
      if (tsk.length) {
        projects.tasks.map(bool => {
            if(bool.Completed == 1)bool.Completed = true; 

             else bool.Completed = false
        }) 

        res.json(tsk);
    } 
    })
    .catch(err => {
      res.status(500).json({ message: 'Could not get tasks' });
    });
  });

  // POST add a task

  router.post(':id/tasks', (req, res) => {
    const tks = req.body;
    const { id } = req.params; 
  
    Projects.findById(id)
    .then(prj => {
      if (prj) {
        Projectss.addTask(tks, id)
        .then(tk => {
          res.status(201).json(tk);
        })
      } else {
        res.status(404).json({ message: 'Could not find Projects with that id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Could not create a new task.' });
    });
  });


module.exports = router