

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
                <p class="category1">Title: ${course.title}</p>
                <p class="category1">Credit: ${course.credits}</p>
                <p class="category1">Department: ${course.department}</p>
                <p class="category1">Professors: ${course.professors}</p>
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
                <h5>${prof.name}</h5>
                <p class="category2">Other name: ${prof.slug}</p>
                <p class="category2">Courses: ${prof.courses}</p>
            </li>
            </div>
        </body>
    </html>
    `;
    
    
    newhttp.document.write(content);
    newhttp.document.close();
    }
}