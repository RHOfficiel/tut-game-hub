import bullsEye from "../../assets/bulls-eye.webp";
import thumbsUp from "../../assets/thumbs-up.webp";
import meh from "../../assets/meh.webp";
import { AspectRatio } from "@mui/joy";
import { useColorScheme, useTheme } from "@mui/joy/styles";

interface Props {
  rating: number;
}

interface ImageProps {
  src: string;
  alt: string;
  size: number;
}

const Emoji = ({ rating }: Props) => {
  const { palette } = useTheme();
  const { mode } = useColorScheme();

  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", size: 24 },
    4: { src: thumbsUp, alt: "recommended", size: 24 },
    5: { src: bullsEye, alt: "exceptional", size: 26 },
  };

  return (
    <AspectRatio
      ratio="1"
      sx={{
        width: emojiMap[rating].size + "px",
        height: emojiMap[rating].size + "px",
        marginTop: 1,
      }}
    >
      <img
        src={emojiMap[rating].src}
        loading="lazy"
        alt={emojiMap[rating].alt}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor:
            mode === "dark"
              ? palette.background.surface
              : palette.background.surface, // Adjust background color based on mode
        }}
      />
    </AspectRatio>
  );
};

export default Emoji;
