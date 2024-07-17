import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Wrapper from "../Wrapper/Wrapper";
//IMPORTING SVG'S AND IMAGES
import photo_card from "../../assets/photo_card.png";
import plus from "../../assets/plus.svg";

import styles from "./styles";
import { Paper } from "@mui/material";

function FeaturedCard() {
  return (
    <Box>
      <Wrapper>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={3}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {[1, 2, 3, 4, 5, 6].map((_, index) => {
            return (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <Paper elevation={3}>
                  <Card sx={styles.card}>
                    <Box sx={styles.blockPhoto}>
                      <Box
                        component="img"
                        src={photo_card}
                        sx={{ width: "100%" }}
                      />
                    </Box>
                    <Box sx={styles.language}>Language</Box>
                    <Box sx={{ textAlign: "center", m: "24px 0" }}>
                      Language Writing
                    </Box>
                    <Divider sx={styles.divider} />
                    <Box sx={styles.footerCard}>
                      <Box sx={styles.price}>$100</Box>
                      <Link sx={styles.link}>
                        <Box component="span" sx={{ mr: "5px" }}>
                          enroll now
                        </Box>
                        <Box component="img" src={plus} />
                      </Link>
                    </Box>
                  </Card>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Wrapper>
    </Box>
  );
}

export default FeaturedCard;
