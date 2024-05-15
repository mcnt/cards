export interface CardSet {
  code: string;
  name: string;
  type: string;
  booster?: string[][];
  releaseDate: string;
  block: string;
  onlineOnly: boolean;
}