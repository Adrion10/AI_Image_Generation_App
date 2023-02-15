import FileSaver from "file.sarver";
import { surpriseMePrompts } from "../constants";
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt;
}
export async function downloadImage(id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
