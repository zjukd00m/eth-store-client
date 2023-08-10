import GlobalLayout from "@/app/layout";
import ProfileLayout from "@/app/profile/layout";
import ProfileView from "@/views/Profile";

const collectibles = [
  {
    id: 1,
    name: "The Toxic Moon",
    description: "A mysterious and mysterious moon",
    image: "https://i.seadn.io/gae/fA6hl1hxG82KNTl61Jc_DYTM_0bV4cqyv3wvyi-4_Rib7W_AFuUKiig3IDrDbLE30-GvHUHxz09FpAKmn-nue2UyTM3PE3xVSBSm?auto=format&dpr=1&w=1000",
    sold: false,
  },
  {
    id: 2,
    name: "The Toxic Sun",
    description: "A mysterious and mysterious sun",
    image: "https://i.seadn.io/gae/POlvFHsvyyYoQ2tOLKurE8dkzT2MhJL3A5P6CYIifCRawMaUamLfiBIgPtxDMPpuKQtCJMCF1oSybELilZc3xotiaosGvL7SobZW?auto=format&dpr=1&w=1000",
    sold: true,
  },
  {
    id: 3,
    name: "The Toxic Moon",
    description: "A mysterious and mysterious moon",
    image: "https://i.seadn.io/gae/fA6hl1hxG82KNTl61Jc_DYTM_0bV4cqyv3wvyi-4_Rib7W_AFuUKiig3IDrDbLE30-GvHUHxz09FpAKmn-nue2UyTM3PE3xVSBSm?auto=format&dpr=1&w=1000",
    sold: false,
  },
  {
    id: 4,
    name: "The Toxic Sun",
    description: "A mysterious and mysterious sun",
    image: "https://i.seadn.io/gae/POlvFHsvyyYoQ2tOLKurE8dkzT2MhJL3A5P6CYIifCRawMaUamLfiBIgPtxDMPpuKQtCJMCF1oSybELilZc3xotiaosGvL7SobZW?auto=format&dpr=1&w=1000",
    sold: true,
  },
  {
    id: 5,
    name: "The Toxic Moon",
    description: "A mysterious and mysterious moon",
    image: "https://i.seadn.io/gae/fA6hl1hxG82KNTl61Jc_DYTM_0bV4cqyv3wvyi-4_Rib7W_AFuUKiig3IDrDbLE30-GvHUHxz09FpAKmn-nue2UyTM3PE3xVSBSm?auto=format&dpr=1&w=1000",
    sold: false,
  },
  {
    id: 6,
    name: "The Toxic Sun",
    description: "A mysterious and mysterious sun",
    image: "https://i.seadn.io/gae/POlvFHsvyyYoQ2tOLKurE8dkzT2MhJL3A5P6CYIifCRawMaUamLfiBIgPtxDMPpuKQtCJMCF1oSybELilZc3xotiaosGvL7SobZW?auto=format&dpr=1&w=1000",
    sold: true,
  },
  {
    id: 7,
    name: "The Toxic Sun",
    description: "A mysterious and mysterious sun",
    image: "https://i.seadn.io/gae/POlvFHsvyyYoQ2tOLKurE8dkzT2MhJL3A5P6CYIifCRawMaUamLfiBIgPtxDMPpuKQtCJMCF1oSybELilZc3xotiaosGvL7SobZW?auto=format&dpr=1&w=1000",
    sold: true,
  },
  {
    id: 8,
    name: "The Toxic Sun",
    description: "A mysterious and mysterious sun",
    image: "https://i.seadn.io/gae/POlvFHsvyyYoQ2tOLKurE8dkzT2MhJL3A5P6CYIifCRawMaUamLfiBIgPtxDMPpuKQtCJMCF1oSybELilZc3xotiaosGvL7SobZW?auto=format&dpr=1&w=1000",
    sold: true,
  },
  {
    id: 9,
    name: "The Toxic Sun XYZ ABC ABC ABC ABC ABC ABC ABC ABC",
    description: "A mysterious and mysterious sun",
    image: "https://i.seadn.io/gae/POlvFHsvyyYoQ2tOLKurE8dkzT2MhJL3A5P6CYIifCRawMaUamLfiBIgPtxDMPpuKQtCJMCF1oSybELilZc3xotiaosGvL7SobZW?auto=format&dpr=1&w=1000",
    sold: true,
  },
];

export default function Profile() {
  return (
    <GlobalLayout>
      <ProfileLayout>
        <ProfileView collectibles={collectibles} isConfimed={false} />
      </ProfileLayout>
    </GlobalLayout>
  );
}
