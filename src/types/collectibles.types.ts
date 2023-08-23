export type CollectibleDisplayType =
  | "number"
  | "boost_percentage"
  | "boost_number"
  | "date";

export type CollectibleTraitType = string;
export type CollectibleValue = string | number;

// Define how the NFT traits will be displayed in the UI
// value -> number
// - number, boost_percentage, boost_number, date (unix timestamp in seconds)
// - max_value: can set it, otherwise display what opensea has seen in the smc
// value -> string
// - doesn't apply
export interface CollectibleAttributes {
  display_type: CollectibleDisplayType;
  trait_type: CollectibleTraitType;
  value: CollectibleValue;
}

export interface CollectibleState {
  data: Collectible;
}

// Interface taken from OpenSea at https://docs.opensea.io/docs/metadata-standards
export interface Collectible {
  name: string;
  image: string;
  attributes: CollectibleAttributes[];
  description?: string;
  external_url?: string;
  backgroundColor?: string;
  animation_url?: string;
  youtube_url?: string;
}
