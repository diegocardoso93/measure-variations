import {Comparison} from "sequences-comparer";

const comparison = Comparison.new();

console.log(comparison.diffs(), comparison.distance());
let divComparison = document.createElement('div');
divComparison.style.width = '736px';
divComparison.style.overflow = 'auto';
divComparison.style.height = '700px';
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
document.querySelector('#content').append(distance);
document.querySelector('#content').append(divComparison);
