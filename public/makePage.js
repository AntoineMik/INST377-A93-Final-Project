

function makeCoursePage(course)
{
    return function ()
    {
    var newhttp = window.open("");
    console.log(course);
    
    const content = `
    <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <title>Group A93 Final Project ${course.department}${course.course_number} </title>
        </head>
        <body>
            <div class= "de">
            <li>
                <h4>${course.department}${course.course_number}</h4>
                <p class="category">Title: ${course.title}</p>
                <p class="category">Credit: ${course.credits}</p>
                <p class="category">Department: ${course.department}</p>
                <p class="category">Professors: ${course.professors}</p>
            </li>
            </div>
        </body>
    </html>
    ` ;
    
    newhttp.document.write(content);
    newhttp.document.close();
    }
}


function makeProfessorPage(prof)
{
    return function ()
    {
    var newhttp = window.open("");
    
    var content = `
    <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <title>Group A93 Final Project</title>
        </head>
        <body>
            <div class= "de">
            <li>
                <h4>${prof.name}</h4>
                <p class="category">Other name: ${prof.slug}</p>
                <p class="category">Courses: ${prof.courses}</p>
            </li>
            </div>
        </body>
    </html>
    `;
    
    
    newhttp.document.write(content);
    newhttp.document.close();
    }
}