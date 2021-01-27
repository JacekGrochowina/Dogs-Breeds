import { Breed } from "./breed.interface";

export interface Breeds {
    // [id: number]: [string, string];
    // [id: number]: [string, string[]];

    // [id: string]: [string, string];
    // [id: string]: [string, string[]];

    [id: string]: Breed

    // [id: string]: (string|string[])[]
}
