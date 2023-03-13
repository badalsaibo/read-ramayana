import { TKanda } from "pages/kanda/interface"
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { IParams } from "../interface";
import { DIR_KANDAS } from "constant/directory";

export const getProcessedMarkdownContent = ({ kanda, sarga }: IParams) => {
    const pathToSarga = path.join(DIR_KANDAS, kanda, `${sarga}.mdx`);

    const processedFile = fs.readFileSync(pathToSarga);

    const { content, data } = matter(processedFile);



    console.log({ content, data })

    return {

    }
}