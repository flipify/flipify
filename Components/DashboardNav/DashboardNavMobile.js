import React, { useRef } from 'react';
import Link from 'next/link';
import DashLink from './DashLink';
import AvatarComp from './AvatarComp';
import styles from './dashNav.module.css';
import {
    PanelIco,
    DeployLogsIco,
    CreateProjectIco,
    DocsIco,
    LogoutIco,
} from '../SVG/Svgs';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function DashboardNavMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <>
            <div className={styles.dashMobNav__Parent}>
                <HamburgerIcon
                    className={styles.navOpenIcon}
                    ref={btnRef}
                    onClick={onOpen}
                />
                <AvatarComp className="mobAvatar" />
            </div>
            <Drawer
                id={styles.dashDrawer__chakraUi}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <div
                        className={`${styles.dashboardParent__Mobile} ${styles.dashboardParent}`}
                    >
                        <div className={styles.dashParent__Inner}>
                            <img
                                className={styles.logoDashNav}
                                src="/logo.png"
                                alt="logo"
                            />

                            <div className={styles.navLinks__Parent}>
                                <DashLink
                                    Svg={<PanelIco />}
                                    Name={'Panel'}
                                    to="/panel"
                                />
                                <DashLink
                                    Svg={<CreateProjectIco />}
                                    Name={'Create Project'}
                                    to="/createAProject"
                                />
                                <DashLink
                                    Svg={<DeployLogsIco />}
                                    Name={'Deploy Logs'}
                                    to="/"
                                />
                                <DashLink
                                    Svg={<DocsIco />}
                                    Name={'Documentation'}
                                    to="/"
                                />
                                <div className={styles.logoutBtn}>
                                    <LogoutIco /> <p>Log out</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default DashboardNavMobile;
