import React from 'react';
import styles from './dashNav.module.css';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { Avatar, AvatarBadge } from '@chakra-ui/react';
import { ProjectsArrowDown } from '../SVG/Svgs';
import AvatarComp from './AvatarComp';

function DashContent({ children }) {
    return (
        <div className={styles.dashContent}>
            <AvatarComp className="DeskAvatar" />
            {children}
        </div>
    );
}

export default DashContent;
