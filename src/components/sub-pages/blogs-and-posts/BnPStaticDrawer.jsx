import { Fragment } from "react";
import { Grid, Divider } from "@mui/material";
import { NormButton } from "../../common/Buttons";

const styledContainer = {
  display: "flex",
  flexDirection: "column", // this gives button the whole size of xs{3} grid
  backgroundColor: "#b0d6ff",
};

const highLight = {
  color: "#070066",
  margin: "5px",
  fontSize: "18px",
  textShadow: "2px 2px white",
};
const noHighLight = {
  color: "#070066",
  margin: "5px",
};

const BnPStaticDrawer = ({ blogButtonLabels, onKeyClick, activeKey }) => {
  return (
    <Grid item md={3} sx={styledContainer} xs={12}>
      {blogButtonLabels.map((button) => (
        <Fragment key={button.id}>
          <NormButton
            sx={activeKey === button.buttonKey ? highLight : noHighLight}
            onClick={() => {
              onKeyClick(button.buttonKey);
            }}
          >
            {button.buttonLabel}
          </NormButton>
          <Divider orientation='horizontal' variant='middle' flexItem />
        </Fragment>
      ))}
    </Grid>
  );
};

export default BnPStaticDrawer;
