import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { ProjectsArrowDown } from "../SVG/Svgs";
import styles from "./dashNav.module.css";

function AvatarComp(props) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ProjectsArrowDown className={styles.menuArrowDown} />}
        className={`${styles.dashboard__menuBtn} ${props.className}`}
      >
        Reno Online Store
        <Avatar
          className={styles.dashContent__Avatar}
          bg=""
          name="Reno Online Store"
          src="/r ico.png"
        />
      </MenuButton>
      <MenuList>
        <MenuItem className={styles.dashboard__menuBtnItem}>Project 2</MenuItem>
        <MenuItem className={styles.dashboard__menuBtnItem}>Project 3</MenuItem>
        <MenuItem className={styles.dashboard__menuBtnItem}>Project 4</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default AvatarComp;
