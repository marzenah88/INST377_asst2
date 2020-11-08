
const wesbosData = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const labData = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const cities = [];

fetch(labData)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordsToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordsToMatch, 'gi');
    if (wordsToMatch === '') {
      return null;
    }
    return place.name.match(regex)
    || place.state.match(regex)
    || place.city.match(regex)
    || place.inspection_results.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map((place) => {
    const regex = new RegExp(this.value, 'gi');
    const placeName = place.name.replace(regex, `<span class="highlightme">${this.value}</span>`);
    const cityName = place.city.replace(regex, `<span class="highlightme">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="highlightme">${this.value}</span>`);
    const inspectRes = place.inspection_results.replace(regex, `<span class="highlightme">${this.value}</span>`);
    return `
            <li>
                <span class="name">${placeName}</span>           
                <span class="location">${cityName}, ${stateName}</span>
                <span class="inspection">${place.inspection_results}</span>
            </li>
        `;
  }).join('');
  suggestions.innerHTML = html;
}
//end of script