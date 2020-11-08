function getResults(data {
    console.log('jsonFromServer', jsonFromServer);
}

  
document.body.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    const form = $(e.target).serializeArray();
    const venues = [];
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((fromServer) => fromServer.json())
      .then((jsonFromServer) => venues.push(...jsonFromServer))   
      .then((venues) => getResults(venues))
    console.log(err);
});

