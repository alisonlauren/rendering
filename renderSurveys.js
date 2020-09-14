//creating function to render info from the surveys
//calling parameter for surveys
function renderSurveys(surveys) {
    //creating variable and setting map function
    //that will go through each element and perform each function
    var surveysHTML = surveys.map(function(survey){
        //return this function under these conditions
        return `
        
            <form class="mx-auto my-5 w-50">
                <h1>${survey.title}</h1>
                <hr />
                ${renderFields(survey.fields)}
                <button class="btn btn-primary" type="submit">${survey.submitButtonText}</button>
            </form>
        `
        //line 10:all styling, used from bootstrap
        //linee 11: on heading one, print the survey's title..
        //line 12: creating a horizontal line
        //lines 13: now accessing the fields, assigning it to the survey fields.
        //line 14: creating button, to the text already assigned to submitButtonText
    });
    //line 25: return function map function
    //line 26: join the html map function
    return `
        <div class=" mt-5">
            ${surveysHTML.join('')}
        </div>
    `
}
//creating function that will pick from fields array
function renderFields(fields) {
// creating variable for fields, calling map function on parameters.
    var fieldsHTML = fields.map(function(field, index){
        //if my field type is exactly equal to the radio type (which I think, is relevant to the button)
        if (field.type === "radio") {
            //return the function under these conditions...
            return `
                <div class="form-group">
                    <label>${field.label}</label>
                    ${field.options.map(function(option) {
                        return `
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radio${index}" value="${option}"/>
                                <label class="form-check-label">${option}</label>
                            </div>
                        `
                    }).join('')}
                </div>
            `
            //line 39:creating a div class called form-group
            //line 40: creating a label, accessing the label group in field
            //line 41:  accessing the options within field array, and use the map function, with the parameter of option
            //line 42: return the function under these conditions....
            //line 43-46: adding clickable items for a quiz, using index, option and option..?
            //line 48: must use the join method when calling the map function

        } else if (field.type === "text") {
            return `
                <div class="form-group">
                    <label>${field.label}</label>
                    <textarea ></textarea>
                </div>
            `
        }
    });

    return fieldsHTML.join('');
}

//line 58: else if statement, if the type in field is exactly equal to text 
//line 59: then return....
//line 60: accessing for group, field.label accessesed.

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}