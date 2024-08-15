import { Autocomplete, FormControl } from "@mui/joy";
import { SxProps } from "@mui/system"; // Update to use SxProps from @mui/system
import SearchIcon from "@mui/icons-material/Search";
import { SyntheticEvent, useState } from "react";

interface Props {
  sx?: SxProps;
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ sx, onSearch }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: SyntheticEvent, newInputValue: string) => {
    setInputValue(newInputValue);
    onSearch(newInputValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission if needed
      onSearch(inputValue);
    }
  };

  return (
    <FormControl size="lg" sx={{ width: "100%", ...sx }}>
      <Autocomplete
        startDecorator={<SearchIcon sx={{ fontSize: "32px" }} />}
        sx={{
          "--Input-radius": "20px",
          "--Input-gap": "10px",
        }}
        placeholder="Search games..."
        type="search"
        freeSolo
        disableClearable
        variant="soft"
        options={[]} // Empty options array since it's a free solo input
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        inputValue={inputValue} // Controlled input value
      />
    </FormControl>
  );
};

export default SearchInput;
