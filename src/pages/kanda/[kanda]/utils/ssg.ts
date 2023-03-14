import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { DIR_KANDAS } from "constant/directory";

import { IParams, IParsedMarkdownContent } from "../interface";

export const getParsedMarkdownContent = ({ kanda, sarga }: IParams): IParsedMarkdownContent  => {
    const pathToSarga = path.join(DIR_KANDAS, kanda, `${sarga}.mdx`);

    const processedFile = fs.readFileSync(pathToSarga);

    const { content, data } = matter(processedFile);

    return {
        id: data.id,
        content,
        frontMatter: {
            id: data.id,
            slug: sarga,
            sarga: data.sarga,
            kanda: data.kanda,
            title: data.title,
        }
    }
}