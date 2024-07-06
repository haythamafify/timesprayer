import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/material";
import PrayerCards from "./PrayerCards";

export default function MainContent() {
  return (
    <div>
      {/*Start Top Row */}
      <Grid container style={{ backgroundColor: "green" }}>
        <Grid xs={6}>
          <div>
            <h2>2024/6/7|3:37</h2>
            <h1>القاهرة</h1>
          </div>
        </Grid>
        <Grid>
          <Grid xs={6}>
            <div>
              <h2>المتبقى حتى صﻻة العصر</h2>
              <h1>1:10:55</h1>
            </div>
          </Grid>
        </Grid>
      </Grid>
      {/* End Top Row */}

      {/* Divider */}
      <Divider style={{ borderColor: "white", opacity: "0.1" }} />

      {/* Start Cards prayer */}
      <Stack>
        <PrayerCards />
      </Stack>
      {/* End Cards prayer */}
    </div>
  );
}
