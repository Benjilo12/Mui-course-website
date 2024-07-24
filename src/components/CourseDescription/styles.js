const styles = {
  wrapper: (theme) => ({
    MarginTop: "24px",
    [theme.breakpoints.up("md")]: {
      marginTop: "48px",
    },
  }),
  title: {
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "29px",
    color: "#0A033C",
  },
  text: {
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "24px",
    color: "#000",
  },
};

export default styles;
