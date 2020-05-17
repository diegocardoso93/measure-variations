import {Comparison} from "sequences-comparer";

let references;
(async () => {
await fetch('/references.csv')
  .then(response => response.text())
  .then(text => references = text);
})();

function onOption(event) {
  const find = event.target.value;
  if (find.length > 2) {
    const filtered = references.split('\n').filter((ref) => {
      if (ref.toLowerCase().indexOf(find.toLowerCase()) > -1) {
        return ref;
      }
    });
    const dropdown = document.querySelector('#select-'+event.target.id);
    dropdown.innerHTML = "";
    filtered.map((item) => {
      const option = document.createElement('option');
      option.innerText = item;
      dropdown.append(option);
    });
  }
}

document.querySelector('#option1').onchange = onOption;
document.querySelector('#option2').onchange = onOption;

document.querySelector('#compare').onclick = async () => {
  const [file1, file2] = [
    document.querySelector('#select-option1').value.split(',')[0],
    document.querySelector('#select-option2').value.split(',')[0]
  ];
  const file1Content = await fetch('/files/' + file1)
    .then(response => response.text());
  const file2Content = await fetch('/files/' + file2)
    .then(response => response.text());

  const comparison = Comparison.new(file1Content, file2Content);

  let divComparison = document.createElement('div');
  divComparison.style.width = '736px';
  divComparison.style.maxWidth = '95vw';
  divComparison.style.overflow = 'auto';
  divComparison.style.height = '83vh';
  divComparison.style.lineBreak = 'anywhere';
  divComparison.style.fontFamily = 'monospace';
  divComparison.style.background = 'black';
  let part;

  for (let nucleotide of comparison.diffs()) {
    if (nucleotide == 0 || nucleotide == 1 || (nucleotide == 255)) {
      part = document.createElement('span');
      part.style.backgroundColor = nucleotide == 1 && 'green' || nucleotide == 255 && 'red';
      part.style.color = nucleotide == 0 && 'green';
      divComparison.append(part);
      continue;
    }

    part.append(String.fromCharCode(nucleotide));
  }

  divComparison.append(part);

  let distance = document.createElement('h3');
  distance.innerText = 'Distance: ' + comparison.distance();
  distance.style.fontFamily = 'monospace';
  document.querySelector('#distance').innerText = distance.innerText;
  document.querySelector('#content').innerHTML = "";
  document.querySelector('#content').append(divComparison);

}

