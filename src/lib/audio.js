import { Sampler, Sequence, Player, Transport } from "tone";

const { PUBLIC_URL } = process.env;

const __BMIN_SAMPLES = {
  "F#2": "PAN_02_Pan_Drum_Fs.mp3",
  A3: "PAN_03_Pan_Drum_A.mp3",
  "C#4": "PAN_04_Pan_Drum_Cs.mp3",
  E4: "PAN_05_Pan_Drum_E.mp3",
  "F#4": "PAN_07_Pan_Drum_Fs.mp3",
  // "D5": "PAN_06_Pan_Drum_D.mp3",

  B4: "PAN_09_Pan_Drum_B_Soft.mp3",
  D4: "PAN_08_Pan_Drum_D_Soft.mp3",
  F5: "PAN_01_Pan_Drum_F_Soft.mp3",
};

const DMIN_SAMPLES = {
  D3: "PAN_15_Pan_Drum_D.mp3",
  "A#4": "PAN_16_Pan_Drum_Bb.mp3",
  D4: "PAN_17_Pan_Drum_D.mp3",
  F4: "PAN_18_Pan_Drum_F.mp3",
  D5: "PAN_19_Pan_Drum_A.mp3",
};

const samples = DMIN_SAMPLES;

const sampler = new Sampler(
  samples,
  () => {
    console.log("sampler ready");
  },
  `${PUBLIC_URL}/samples-mp3/`
).toMaster();

sampler.volume.value = -6;

const drum = new Player(`${PUBLIC_URL}/samples-mp3/drum.mp3`).toMaster();
drum.volume.value = -12;

const letters = [
  "D3",
  "F3",
  "G3",
  "A4",
  "A#4",
  "C#4",
  "D4",
  "F4",
  "G4",
  "A#5",
  "D5",
];

let playing = false;

export function startBeat() {
  if (playing) {
    Transport.pause();
    playing = false;
  } else {
    drum.sync();
    Transport.start();
    playing = true;
  }
}

export function playSound(i) {
  const sampleCount = Object.keys(samples).length;
  let note = Object.keys(samples)[i % sampleCount];
  if (true) {
    note = letters[i % letters.length];
  }

  sampler.triggerAttack(note);
}

export const sequencePromise = new Promise((resolve) => {
  new Sequence(
    function (time, note) {
      drum.volume.value = -6 - note * 2;
      drum.start(0);
      resolve(note);
    },
    [1, 2, 3, 4]
  ).start(0);
});

Transport.bpm.value = 50;
