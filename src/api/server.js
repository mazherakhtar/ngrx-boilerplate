
var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

var answerChoices = [
                        {label:"a", text:"APC", isCorrect: false, isSelected: false},
                        {label:"b", text:"BRAF", isCorrect: false, isSelected: false},
                        {label:"c", text:"CDKN2A", isCorrect: true, isSelected: false},
                        {label:"d", text:"PTCH1", isCorrect: false, isSelected: false},
                        {label:"e", text:"SMAD4", isCorrect: false, isSelected: false}
                    ];

var contentItems = [
                    {
                        id: 8675309, 
                        type: "question", 
                        interactionType: "samc", 
                        stimulus: "A 24-year-old woman comes to the physician because of a mole on her left forearm that seems to have increased in size over the past six months. She reports that it recently started to itch, and it bleeds when scratched. She has no family history of cancer. She works as a lifeguard during the summers and likes to surf since she was 12 years. Her temperature is 37°C (98.6°F), pulse is 72/min, respirations are 12/min, and blood pressure is 126/74 mm Hg. Physical examination shows an asymmetric mole measuring 10 mm in diameter with irregular borders and variegation.", 
                        questionStem: "A loss of function mutation has most likely occurred in which of the following genes?", 
                        answerChoices: answerChoices, 
                        explanation: "The correct answer is C. This patient/'s lesion has all of the clinical signs of melanoma, as assessed by the ABCDE rule. It is Asymmetrical, its Borders are irregular, there are variations in Color, its Diameter is greater than 6mm, and it is Evolving. Malignant melanoma can have various gene mutations: CDKN2A loss, BRAF mutation, NRAS mutation, c-Kit amplification (tyrosine kinase receptor activator), PTEN loss, BCL2 overexpression, p53 mutation, and CDK4 amplification. A loss of function mutation of CDKN2A can be found in melanoma. This locus encodes two very important tumor suppressors: p16Ink4a and p14ARF. The p16Ink4a protein is an inhibitor of cyclinD-Cdk4/6 complexes, causing the cell to arrest in the G1 phase of the cell cycle. The p14ARF protein allows for the accumulation of p53, another tumor suppressor, by inhibiting MDM2, which normally targets p53 for degradation. Mutation of CDKN2A results in the loss of these important tumor-suppressive activities, leading to uncontrolled proliferation of the cell."}
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