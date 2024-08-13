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
import { ReactNode } from "react";

interface Props {
  platforms: Platform[];
  children?: ReactNode;
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
            key={platform.id}
            sx={{
              paddingRight: 1,
              paddingBottom: 1,
              fontSize: 26,
              color: "grey",
            }}
            component={iconMap[platform.slug]}
            inheritViewBox
          />
        ))}
      </Stack>
    </>
  );
};

export default PlatFormIconList;
