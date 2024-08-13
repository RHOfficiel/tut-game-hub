import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../../hooks/useGames";
import { Stack, SvgIcon, Typography } from "@mui/joy";
import { IconType } from "react-icons";
import { padding } from "@mui/system";

interface Props {
  platforms: Platform[];
}

const PlatFormIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <>
      <Stack direction="row">
        {platforms.map((platform) => (
          <SvgIcon
            sx={{
              paddingRight: 1,
              paddingBottom: 1,
              fontSize: 26,
              color: "grey",
            }}
            component={iconMap[platform.slug]}
            inheritViewBox
          />
          // <Typography level="body-sm" startDecorator={iconMap[platform.slug]} >{platform.name}</Typography>
        ))}
      </Stack>
    </>
  );
};

export default PlatFormIconList;
