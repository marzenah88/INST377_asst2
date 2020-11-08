function displayMatches() {
  const matchArray = findMatches(this.value, venues);
  const html = matchArray.map(venue => {
    const regex = new RegExp(this.value, 'gi');
    const venueName = venue.name.replace(regex, `<span class="hl"> ${this.value} </span>`);
    const venueCity = venue.city.replace(regex, `<span class="hl"> ${this.value} </span>`);
    return `
    <li>
      <span class="name"> ${venueName}</span>;
      <span class="location"> ${venueCity}, ${venue.zip}</span>;
      <span class="category"> ${venue.category}</span>;
    </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
  console.log(venues);
}

function getResults(data){
    const searchInput = document.querySelector('.searchbar');
    const suggestions = document.querySelector('.suggestions');
    displayMatches();
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

