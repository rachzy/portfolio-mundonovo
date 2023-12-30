import { IContent } from "./Content";

export interface IContentSection {
    title: string;
    subtitle: string;
    color: string;
    content: IContent[];
}