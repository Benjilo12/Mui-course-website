import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const styles = {
  paper: {
    p: "2px 4px",
    alignItems: "center",
    width: "275px",
    display: { xs: "none", lg: "flex" },
  },
  InputBase: {
    ml: 1,
    flex: 1,
  },
};

function SearchInput() {
  return (
    <Paper component="form" sx={styles.paper}>
      <InputBase
        placeholder="Search"
        InputBase={{ "aria-label": "search" }}
        sx={styles.inputBase}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchInput;
