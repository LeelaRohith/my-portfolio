import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Margin } from "@mui/icons-material";
import { Link } from "react-scroll";

const options = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Coding Profiles",
  "Contact",
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuRoundedIcon sx={{ color: "white" }}></MenuRoundedIcon>
      </IconButton>

      <Menu
        sx={{ mt: 2, displayPrint: { xs: "none" } }}
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option, index) => (
          <Link
            spy={true}
            to={option}
            smooth={true}
            activeClass="activeClass"
            key={option}
          >
            <MenuItem
              selected={option === "Home"}
              href={option}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
