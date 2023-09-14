import { CollectibleState } from "@/types/collectibles.types";

// Max file size is 100MB
export const initialCollectiblesContextState: CollectibleState = {
  data: {
    name: "",
    description: "",
    image: "",
    external_url: "",
    backgroundColor: "",
    animation_url: "",
    youtube_url: "",
    attributes: [],
  },
  errors: {},
};
