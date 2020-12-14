
async function getDatafromserver()
{

        return fetch('/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then((fromServer) => fromServer.json())
          .then((jsonFromServer) => jsonFromServer)
          .catch((err) => {
            console.log(err);
          });
}

async function mainThread()
{
  const rawdata = await getDatafromserver();
  // put all the courses in one array for searching. This is not efficient, using a map to map
  // departments to courses would be ideal.
  let classes = [];
  for(let i = 0; i < rawdata.length - 2; i++){classes = classes.concat(rawdata[i]);}

  // prof data is the last ement of the returned array.
  const teachers = rawdata[rawdata.length - 1];
  console.log("Rawdata from server, ", rawdata.length);
  console.log(rawdata);
  console.log("classes", classes);
  console.log("teachers", teachers);
  
  const textInput = document.querySelector("#textInput");
  // Add even listener to switch search type
  
  if (textInput !== null) {
    console.log("I am here");
    textInput.addEventListener("change", (evt) => {
    var typesearch = document.getElementById("textInput").getAttribute("placeholder");
    
    const value = evt.target.value;
    //const value = this.value;
    if(document.getElementById('course_search').checked)
    {
      let matchSearch = filterFunctionCourses(value, classes);
      displayCoursesMatches(matchSearch);
      console.log(typesearch);
      console.log("The value:"  + value);
      console.log("I am here 2");
    }
    
    if(document.getElementById('professor_search').checked)
    {
      let matchSearch = filterFunctionProfessors(value, teachers);
      displayProfessorsMatches(matchSearch); 
    }

  })
}
}

mainThread().catch(err => {console.error(err)});


async function displayCoursesMatches(matchSearch)
{
  console.log("I am here 3");
  //const value = evt.target.value;
  //console.log(value);
  const suggestions = document.querySelector(".suggestions");
  console.log(matchSearch);
  let html = "";
  //const matchProfessors = findMatches(value, teachers);

  if (matchSearch.length > 0) {
    let i;
    for(i = 0; i < matchSearch.length; i++)
    {
      
      let course = matchSearch[i];
      let courseName = course.department + course.course_number;
      html = `
      <li>
      <h4 class= "courses" id = "${courseName}">${courseName}</h4>
      <p class="category">Title: ${course.title}</p>
      <p class="category">Credits: ${course.credits}</p>
      </li>
      `;

      //suggestions.innerHTML = html;
      document.getElementById("suggestions").insertAdjacentHTML('beforeend', html);
      document.getElementById(courseName).addEventListener("click",makeCoursePage(course));
      
    }
  }
  else {
    html = `
      <li>
          <h4 class="name">No results found</h4>
          <p class="category">Check your search</p>
      </li>
      `;
      suggestions.innerHTML = html;
  }

  
}

function displayProfessorsMatches(matchSearch)
{
  console.log("I am here 3");
  //const value = evt.target.value;
  //console.log(value);
  //const matchSearch = filterFunctionProfessors(value, data_to_search);
  const suggestions = document.querySelector(".suggestions");
  console.log(matchSearch);
  let html;
  //const matchProfessors = findMatches(value, teachers);

  if (matchSearch.length > 0) {
    html = matchSearch.map(prof => { 
     return `
      <li>
      <h4 class = "courses">${prof.name}</h4>
      <p class = "category">Other name: ${prof.slug}</p>
      </li>
      `;
    }).join("");
  }
  else {
    html = `
      <li>
          <h4 class="name">No results found</h4>
          <p class="category">Check your search</p>
      </li>
      `;
    }

  suggestions.innerHTML = html;
  
}



function filterFunctionProfessors(string, teachers)
{
  return teachers.filter(f => {
    const regex = new RegExp(string, "gi"); // g means global and i means insensitive
    
    return f.name.match(regex)
    
  })
}

function filterFunctionCourses(string, courses)
{
  return courses.filter(f => {
    const regex = new RegExp(string, "gi"); // g means global and i means insensitive
    
    const tomatch = f.department + f.course_number;
    console.log(tomatch);
    return tomatch.match(regex)
  })
}
