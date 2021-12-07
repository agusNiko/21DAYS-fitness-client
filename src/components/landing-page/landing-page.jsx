import { Google } from "@mui/icons-material";
import Button from "@restart/ui/esm/Button";
import Image from "./img.svg";
import React from "react";

const landingPage = () => {
  return (
    <div className="landing-page__box">
      <div>
        <div></div>
        <div>
          <h2>Homeworkouts on your terms</h2>
        </div>
      </div>
      <div>
        <Image></Image>
      </div>
      <div>
        <Button variant="contained" type="submit" id="submit-button">
          Sign In
        </Button>
        <Button variant="contained" type="submit" id="submit-button">
          <Google /> sign in with google
        </Button>
      </div>
    </div>
  );
};

export default landingPage;
