
var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

var answerChoices = [
                        {label:"a", text:"answer choice 1", isCorrect: false, isSelected: false},
                        {label:"b", text:"answer choice 2", isCorrect: true, isSelected: false},
                        {label:"c", text:"answer choice 3", isCorrect: false, isSelected: false},
                        {label:"d", text:"answer choice 4", isCorrect: false, isSelected: false},
                    ];

var contentItems = [
                    {id: 8675309, type: "question", interactionType: "samc", 
                     stimulus: "This is the stimulus", questionStem: "This is the question stem", 
                     answerChoices: answerChoices, explanation: "This is the explanation"}
                   ];

// GET http://localhost:4000/api/content-item/:id
app.get('/api/content-item/:id', function (req, res) {
     var id = req.param('id');
     var selectedContentItems = contentItems.filter(t => t.id == id);
     res.send(selectedContentItems[0]);
});

app.listen(4000, function () {
    console.log('Todos app listening on port 4000!');
});