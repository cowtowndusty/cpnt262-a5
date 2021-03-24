
// define container variable in order to import objects via HTML
const container = document.querySelector('.container');

// define empty variable to enable HTML to be dynamically added via forEach loop
let containerHTML = '';

// fetch json array and send error if not
fetch('/api/v0/gallery')
  .then(response =>  {
    if(!response.ok) {
      throw new Error('Unable to locate json file');
    }else{
      return response.json();
    }
  })
  .then((responseJson) =>{
    const imgArray = responseJson;
    console.log(imgArray);
    // add a forEach loop utilizing imgArray to create a function called pic
    imgArray.forEach((pic) => {
      // populate containerHTML via the pic function
      containerHTML += 
       `<figure>
          <h2>${pic.title}</h2>
          <a href="${pic.linkURL}" target="_blank"><img src="${pic.pathURL}" alt="${pic.description}" height="${pic.height}" width="${pic.width}"></a>
          <figcaption>
            <p>${pic.description}</p>
            <p>Photo by: <a href="${pic.creditURL}" class="link" target="_blank">${pic.credit}</a></p>
          </figcaption>
        </figure>`;
      });
      
      // output the populated values from the pic function
      container.innerHTML = containerHTML; 
  
  });