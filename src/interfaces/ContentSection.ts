import { IContent } from "./Content";

export interface IContentSection {
    id: string;
    title: string;
    subtitle: string;
    color: string;
    content: IContent[];
}