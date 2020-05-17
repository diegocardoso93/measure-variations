extern crate bio;

use bio::io::fasta;
use std::str;

use std::error::Error;
use std::fs::File;
use std::io::prelude::*;
use std::path::Path;

fn main() {
    let reader = fasta::Reader::from_file("sequences.fasta").unwrap();

    for result in reader.records() {
        let record = result.unwrap();
        let seq = record.seq();

        let filename = "files/".to_owned() + record.id();
        let path = Path::new(&filename);
        let display = path.display();

        let mut file = match File::create(&path) {
            Err(why) => panic!("couldn't create {}: {}", display, why.description()),
            Ok(file) => file,
        };

        match file.write_all((format!(">{} {}\n", record.id(), record.desc().unwrap()) + str::from_utf8(&seq).unwrap()).as_bytes()) {
            Err(why) => panic!("couldn't write to {}: {}", display, why.description()),
            Ok(_) => println!("successfully wrote to {}", display),
        }
    }
}
