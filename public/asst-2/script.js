
const lab_data = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const venues = [];

fetch(labs_data)
    .then(blob => blob.json())
    .then(data => cities.push(...data))
    ;

function findMatches(wordsToMatch, venues) {
    return venues.filter(venue => {
        const regex = new RegExp(wordsToMatch, 'gi');
        if (wordsToMatch === "") {
            return null
        } else {
            return venue.name.match(regex) || venue.city.match(regex);
        }
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, venues);
    const html = matchArray.map(venue => {
        const regex = new RegExp(this.value, 'gi');
        const venueName = venue.name.replace(regex, `<span class="highlightme">${this.value}</span>`);
        const venueCity = venue.city.replace(regex, `<span class="highlightme">${this.value}</span>`);
        return `
            <li>
                <span class="population">${venueName}</span>
                <span class="name">${venueCity}, ${venue.zip}</span>
                <span class="population">${venue.category}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

/*wesbos' input had a class of 'search' but ours is textinput */
const searchInput = document.querySelector('.textinput');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('input', displayMatches);








