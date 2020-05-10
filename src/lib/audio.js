import Tone from "tone";

const sampler = new Tone.Sampler(
  {
    G3: "G3_hard.mp3",
    D3: "D3_hard.mp3",
  },
  () => {
    console.log("sampler ready");
  },
  "/samples/"
).toMaster();

const letters = ["A", "B", "C", "D", "E", "F", "G"];

export function playSound(i) {
  const letter = letters[i % letters.length];
  sampler.triggerAttack(letter + "3");
}
