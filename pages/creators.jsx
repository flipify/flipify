import Image from 'next/image';
import React from 'react';
import styles from '../styles/creators.module.css';
import Head from 'next/head';
import Link from 'next/link';

const Creators = () => {
    return (
        <div className="bgContainer">
            <Head>
                <title>The Team - Flipify</title>
                <meta name="description" content="Meet The Team" />
            </Head>

            <div className={styles.creators_page_inner_container}>
                <div className={styles.navbar}>
                    <Link href="/">
                        <Image
                            className={styles.logoNav}
                            alt="logo"
                            src="/logo.png"
                            width={100}
                            height={50}
                        />
                    </Link>

                    <div className={styles.nav_section2}>
                        <p className={styles.navitem1}>The Team</p>
                        <p>How it works</p>
                        <p>Docs</p>
                    </div>
                </div>

                <div className={styles.creators_main}>
                    <div className={styles.creators_main_inner}>
                        <div className={styles.creators_header}>
                            <h1>
                                Meet The Creators{' '}
                                <Image
                                    alt="wave"
                                    height={30}
                                    width={30}
                                    src="/wave.png"
                                />
                            </h1>
                            <p>
                                A perfect blend of creativity and technical
                                wizardry
                            </p>
                        </div>
                        <div className={styles.creatorsInner}>
                            <div className={styles.creators1}>
                                <div className={styles.image_container}>
                                    <img
                                        className={styles.image_main}
                                        alt="creator"
                                        src="/dorcasojo.png"
                                        width={200}
                                        height={290}
                                    />
                                    <p>Dorcas Ojo</p>
                                    <p className={styles.role}>Cloud/DevOps</p>
                                    <p>
                                        <a href="https://mobile.twitter.com/_iamdorcas_">
                                            <Image
                                                alt="twitter"
                                                width={25}
                                                height={18}
                                                style={{
                                                    objectFit: 'contain',
                                                    width: '10px',
                                                    height: '10px',
                                                }}
                                                src="/twitter.svg"
                                            />
                                        </a>
                                    </p>
                                </div>
                                <div className={styles.image_container}>
                                    <img
                                        className={styles.image_main}
                                        alt="creator"
                                        src="/saintmalik.png"
                                        width={200}
                                        height={290}
                                    />
                                    <p>AbdulMalik Salawu</p>
                                    <p className={styles.role}>Project Lead</p>
                                    <p>
                                        <a href="https://twitter.com/saintmalik_">
                                            <Image
                                                alt="twitter"
                                                width={25}
                                                height={18}
                                                style={{
                                                    objectFit: 'contain',
                                                    width: '10px',
                                                    height: '10px',
                                                }}
                                                src="/twitter.svg"
                                            />
                                        </a>
                                    </p>
                                </div>
                                <div
                                    className={`${styles.image_container} ${styles.adefemi}`}
                                >
                                    <img
                                        className={`${styles.image_main}`}
                                        alt="creator"
                                        src="/oluwaseunadefemi.png"
                                        width={200}
                                        height={290}
                                    />
                                    <p>Adefemi Oluwaseun</p>
                                    <p className={styles.role}>Cyber Sec</p>
                                    <p>
                                        <a href="https://www.linkedin.com/in/opeyemlastborn">
                                            <Image
                                                alt="linkedIn"
                                                width={25}
                                                height={18}
                                                style={{
                                                    objectFit: 'contain',
                                                    width: '10px',
                                                    height: '10px',
                                                }}
                                                src="/linked.svg"
                                            />
                                        </a>
                                    </p>
                                </div>
                                <div className={styles.image_container}>
                                    <img
                                        className={styles.image_main}
                                        alt="creator"
                                        src="/davidfabiyi.png"
                                        width={200}
                                        height={290}
                                    />
                                    <p>David Fabiyi T.</p>
                                    <p className={styles.role}>
                                        Product Designer
                                    </p>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Image
                                            alt="twitter"
                                            width={25}
                                            height={18}
                                            style={{
                                                objectFit: 'contain',
                                                width: '20px',
                                                height: '10px',
                                            }}
                                            src="/twitter.svg"
                                        />
                                        <Image
                                            alt="linkedin"
                                            width={25}
                                            height={18}
                                            style={{
                                                padding: '14px',
                                                objectFit: 'contain',
                                                marginLeft: '1px',
                                                width: '20px',
                                                height: '10px',
                                            }}
                                            src="/linked.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.creators2}>
                                <div className={styles.image_container}>
                                    <img
                                        className={styles.image_main}
                                        alt="creator"
                                        src="/gbengaadeyi.png"
                                        width={200}
                                        height={290}
                                    />
                                    <p>Gbenga Adeyi</p>
                                    <p className={styles.role}>
                                        Backend Developer
                                    </p>
                                    <p>
                                        <a href="https://twitter.com/jigani99">
                                            <Image
                                                alt="twitter"
                                                width={25}
                                                height={18}
                                                style={{
                                                    objectFit: 'contain',
                                                    width: '10px',
                                                    height: '10px',
                                                }}
                                                src="/twitter.svg"
                                            />
                                        </a>
                                    </p>
                                </div>
                                <div className={styles.image_container}>
                                    <img
                                        className={styles.image_main}
                                        alt="creator"
                                        src="/enochfabiyi.png"
                                        width={200}
                                        height={290}
                                    />
                                    <p>Enoch Fabiyi</p>
                                    <p className={styles.role}>
                                        Frontend Developer
                                    </p>
                                    <div>
                                        <a href="https://twitter.com/frontend_script">
                                            <Image
                                                alt="twitter"
                                                width={25}
                                                height={18}
                                                style={{
                                                    objectFit: 'contain',
                                                    marginRight: '2px',
                                                    width: '10px',
                                                    height: '10px',
                                                }}
                                                src="/twitter.svg"
                                            />
                                        </a>
                                        <a href="https://www.linkedin.com/in/enoch-fabiyi-bb04331a5">
                                            <Image
                                                alt="linkedin"
                                                width={25}
                                                height={18}
                                                style={{
                                                    objectFit: 'contain',
                                                    width: '10px',
                                                    height: '10px',
                                                }}
                                                src="/linked.svg"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.image_container}>
                                    <img
                                        className={styles.image_main}
                                        alt="creator"
                                        src="/ebedavid.png"
                                        width={200}
                                        height={290}
                                    />
                                    <p>Ebe David</p>
                                    <p className={styles.role}>
                                        Frontend Developer
                                    </p>
                                    <p>
                                        <Image
                                            alt="twitter"
                                            width={25}
                                            height={18}
                                            style={{
                                                objectFit: 'contain',
                                                width: '10px',
                                                height: '10px',
                                            }}
                                            src="/twitter.svg"
                                        />
                                    </p>
                                </div>
                                <div className={styles.image_container}>
                                    <img
                                        className={styles.image_main}
                                        alt="creator"
                                        src="/daramolaafeez.png"
                                        width={200}
                                        height={290}
                                    />
                                    <p>Daramola Afeez</p>
                                    <p className={styles.role}>
                                        FullStack Developer
                                    </p>
                                    <p>
                                        <a href="https://www.linkedin.com/in/daramola-afeez-92ba741b5">
                                            <Image
                                                alt="twitter"
                                                width={25}
                                                height={18}
                                                style={{
                                                    objectFit: 'contain',
                                                    width: '10px',
                                                    height: '10px',
                                                }}
                                                src="/linked.svg"
                                            />
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.creators3}>
                                <div className={styles.image_container}>
                                    <img
                                        className={styles.image_main}
                                        alt="creator"
                                        src="/isaiaholaoye.png"
                                        width={200}
                                        height={290}
                                    />
                                    <p>Isaiah Olaoye</p>
                                    <p className={styles.role}>
                                        FullStack Developer
                                    </p>
                                    <p>
                                        <a href="https://www.linkedin.com/in/isaiah-olaoye">
                                            <Image
                                                alt="twitter"
                                                width={25}
                                                height={18}
                                                style={{
                                                    objectFit: 'contain',
                                                    width: '10px',
                                                    height: '10px',
                                                }}
                                                src="/linked.svg"
                                            />
                                        </a>
                                    </p>
                                </div>
                                <div className={styles.image_container}>
                                    <img
                                        className={styles.image_main}
                                        alt="creator"
                                        src="/robertcoffie.png"
                                        width={200}
                                        height={290}
                                    />
                                    <p>Robert Coffie</p>
                                    <p className={styles.role}>
                                        Backend Developer
                                    </p>
                                    <p>
                                        <a href="https://twitter.com/local_Boi">
                                            <Image
                                                alt="twitter"
                                                width={25}
                                                height={18}
                                                style={{
                                                    objectFit: 'contain',
                                                    width: '10px',
                                                    height: '10px',
                                                }}
                                                src="/twitter.svg"
                                            />
                                        </a>
                                    </p>
                                </div>

                                <div className={styles.image_container}></div>
                                <div className={styles.image_container}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Creators;
