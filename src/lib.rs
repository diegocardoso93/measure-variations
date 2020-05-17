extern crate bio;
extern crate difference;

use bio::io::fasta;
use difference::{Changeset, Difference};
use std::str;

mod utils;

use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub struct Comparison {
    diffs: Vec<u8>,
    distance: i32,
}

#[wasm_bindgen]
impl Comparison {
    pub fn new(sequence1: String, sequence2: String) -> Comparison {
        let content = sequence1 + "\n" + &sequence2;

        let mut sequences = Vec::new();
        let mut output = Vec::new();
        let reader = fasta::Reader::new(content.as_bytes());

        for result in reader.records() {
            let record = result.unwrap();
            let seq = record.seq();
            sequences.push(seq.to_owned());
        }

        let Changeset {
            diffs, distance, ..
        } = Changeset::new(
            str::from_utf8(&sequences[0]).unwrap(),
            str::from_utf8(&sequences[1]).unwrap(),
            "",
        );

        for c in &diffs {
            match *c {
                Difference::Same(ref z) => {
                    output.push(0u8);
                    output.append(&mut z.as_bytes().to_vec());
                }
                Difference::Add(ref z) => {
                    output.push(1u8);
                    output.append(&mut z.as_bytes().to_vec());
                }
                Difference::Rem(ref z) => {
                    output.push(255u8);
                    output.append(&mut z.as_bytes().to_vec());
                }
                _ => (),
            }
        }

        println!("{:?}", output);
        println!("{:?}", distance);

        Comparison {
            diffs: output,
            distance: distance,
        }
    }

    pub fn diffs(&self) -> Vec<u8> {
        self.diffs.clone()
    }

    pub fn distance(&self) -> i32 {
        self.distance
    }
}
