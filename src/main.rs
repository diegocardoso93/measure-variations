extern crate bio;

use bio::io::fasta;
use std::str;
use strsim::{levenshtein, sorensen_dice};

fn main() {
    let mut sequences = Vec::new();
    let reader = fasta::Reader::from_file("sequences.fasta").unwrap();

    for result in reader.records() {
        let record = result.unwrap();
        let seq = record.seq();
        sequences.push(seq.to_owned());
    }

    println!("{:?}", levenshtein(str::from_utf8(&sequences[0]).unwrap(), str::from_utf8(&sequences[1]).unwrap()));
    println!("{:?}", sorensen_dice(str::from_utf8(&sequences[0]).unwrap(), str::from_utf8(&sequences[1]).unwrap()));
}
