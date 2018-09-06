import React from "react";
import { Paper, Typography } from "@material-ui/core";
import propTypes from "prop-types";


const CookieStatus = ({
                        status: {totalCookies, playerLevel, cookiePerSecond},
                        statistics: {userClickToNextLevel}
                      }) => {
  return (
    <Paper
      id="Cookiestatus"
      square={true}
      style={{
        padding: "15px",
        position: "absolute",
        top: "25%",
        left: "25%",
        transform: "translate(-50%, -50%)"
      }}
      color="inherit"
    >
      <Typography align="center" color="inherit">
          Cookies:{" "}
        <span className="status__total">{totalCookies || 0}</span>

      </Typography>
      <Typography align="center" color="inherit">
        Level: <span className="status__level">{playerLevel || "1"}</span> | to next:{" "}
        <span className="status__userClick">{userClickToNextLevel || "0"}</span>
      </Typography>
      <Typography align="center" color="inherit">
        CPS:{" "}
        <span className="status__CPS">{(cookiePerSecond || 0).toFixed(1).toLocaleString("de-DE")}</span>

      </Typography>
    </Paper>
  );
};

CookieStatus.propTypes = {
  status: propTypes.object,
  statistics : propTypes.object
}
export {CookieStatus}
export default CookieStatus;

