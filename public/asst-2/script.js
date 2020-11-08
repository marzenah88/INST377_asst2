  
/* This is just me trying to follow along with wesbos, sorry if I forgot to take it out before pushing -chris  */
//const wesbos_data = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const lab_data = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const venues = [];

fetch(lab_data)
    .then(blob => blob.json())
    .then(data => venues.push(...data))
    ;

function findMatches(wordsToMatch, venues) {
    return venues.filter(place => {
        const regex = new RegExp(wordsToMatch, 'gi');
        if (wordsToMatch === "") {
            return null
        } else {
            return place.name.match(regex) || place.city.match(regex);
        }
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, venues);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const venueName = place.name.replace(regex, `<span class="highlightme">${this.value}</span>`);
        const venueCity = place.city.replace(regex, `<span class="highlightme">${this.value}</span>`);
        return `
            <li>
                <span class="name">${venueName}</span>
                <span class="name">${venueCity}, ${venue.zip}</span>
                <span class="population">${venue.category}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

/* wesbos' input had a class of 'search' but ours is textinput */
const searchInput = document.querySelector('.textinput');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('input', displayMatches);

