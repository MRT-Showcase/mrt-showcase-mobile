import { ImageSourcePropType } from "react-native";
import MenuItem from "../components/MenuItem";

export interface IMenuItem {
  id: number;
  title: string;
  image: ImageSourcePropType;
}

export const menuItems: IMenuItem[] = [
  {
    id: 0,
    title: "Tiket",
    image: require("../../assets/menu-mrt/tiket.png"),
  },
  {
    id: 1,
    title: "Jadwal",
    image: require("../../assets/menu-mrt/jadwal.png"),
  },
  {
    id: 2,
    title: "Stasiun",
    image: require("../../assets/menu-mrt/stasiun.png"),
  },
  {
    id: 3,
    title: "Tenant",
    image: require("../../assets/menu-mrt/tenant.png"),
  },
  {
    id: 4,
    title: "Event",
    image: require("../../assets/menu-mrt/event.png"),
  },
  {
    id: 5,
    title: "Diskon Voucher",
    image: require("../../assets/menu-mrt/diskon.png"),
  },
  {
    id: 6,
    title: "Podcast",
    image: require("../../assets/menu-mrt/podcast.png"),
  },
  {
    id: 7,
    title: "Berita",
    image: require("../../assets/menu-mrt/berita.png"),
  },
  {
    id: 8,
    title: "TV & Film",
    image: require("../../assets/menu-mrt/tv.png"),
  },
  {
    id: 9,
    title: "Sekitar",
    image: require("../../assets/menu-mrt/sekitar.png"),
  },
];
