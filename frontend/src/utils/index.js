import { surprisePrompts } from "../constants/index";
import FileSaver from "file-saver";

export function getRandomPrompts(prompt) {
  const randomIndex = Math.floor(Math.random() * surprisePrompts.length);
  const randomPrompt = surprisePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompts(prompt);
  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
