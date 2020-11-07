
  function narrowDataScope (data) {
      const objectList = data.map(restaurant => ${data.name} ${data.address_line1} ${data.city} ${data.state} ${data.zip});
      console.log(objectList)
      return objectList;
  } 
  
  
  function getResults(jsonFromServer) {
    console.log('jsonFromServer', jsonFromServer);
    
    const narrowData = narrowDataScope(jsonFromServer);
    const matchedResults = matchText(input_text, narrowData);
    const options = makeYourOptionsObject(reorganizedData);
    const chart = new CanvasJS.Chart('chartContainer', options);
    chart.render();
  }
  function matchText(input_text, restaurants) {
      return restaurants.filter(venue => {
          const regex = new RegExp(wordToMatch, 'gi');
          return venue.
      })
  }
  
  /// Leave lines 52-67 alone; do your work in the functions above
  document.body.addEventListener('submit', async (e) => {
    e.preventDefault(); // this stops whatever the browser wanted to do itself.
    const form = $(e.target).serializeArray();
    const restaurants = [];
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((fromServer) => fromServer.json())
      .then((jsonFromServer) => getResults(jsonFromServer))   
        console.log(err);
      });

  );}