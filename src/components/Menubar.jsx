import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../components/css/Menubar.css";
import { useState } from "react";
import pdf from "./Parimal_Resume.pdf";
import { Link } from "react-router-dom";
export default function Menubar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="Menuparent">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Resume
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/* <a className='anchortag' target='_blank'  rel="noreferrer"> */}
        <Link
          className="anchortag"
          target="_blank"
          rel="noreferrer"
          to="/resume"
        >
          <MenuItem onClick={() => {}}>Preview</MenuItem>
        </Link>
        {/* </a> */}

        <a
          className="anchortag"
          href={pdf}
          download="Parimal_Resume"
          target="_blank"
          rel="noreferrer"
        >
          <MenuItem onClick={handleClose}>Download</MenuItem>
        </a>
      </Menu>
    </div>
  );
}
