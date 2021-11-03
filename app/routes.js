const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Run this code when a form is submitted to 'conflict-answer'
router.post('/conflicty', function (req, res) {

    // Make a variable and give it the value from 'conflict' question page
    var varconflict = req.session.data['interestsyesno']
  
    // Check whether the user has selected Y to having a conflict
    if (varconflict == "Yes"){
      // Send user to next page to record conflict details
      res.redirect('/conflicty')
    } else {
      // Send user to check answers page
      res.redirect('/check-your-answers')
    }
  })
 
module.exports = router
