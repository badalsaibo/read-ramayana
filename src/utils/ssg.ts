import path from "path";
import { readFileSync } from "fs";
import { TKanda } from "interface/kanda";

export const pathToKanda = (kanda: TKanda) => {
	// __data/kanda/aranya/chapters.json
	return path.join(process.cwd(), '__data', 'kanda', kanda)
}

export const getChaptersOfKanda = (kanda: TKanda) => {
    const chapterFile = path.join(pathToKanda(kanda), 'chapters.json');
	let data = JSON.parse(readFileSync(chapterFile, "utf8"));

    console.log({data})

    return data;

}