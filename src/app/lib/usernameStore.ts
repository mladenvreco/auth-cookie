import { promises as fs } from "fs";
import path from "path";

const filePath = path.resolve(process.cwd(), "username.txt");

export async function getStoredUsername() {
  try {
    const username = await fs.readFile(filePath, "utf8");
    return username || "mladen";
  } catch {
    return "mladen";
  }
}

export async function setStoredUsername(username: string) {
  await fs.writeFile(filePath, username, "utf8");
}
