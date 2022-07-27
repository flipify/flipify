import Image from 'next/image';
import React from 'react'
import styles from '../styles/creators.module.css'


const Creators = () => {
  return (
    <div className={styles.creators_page}>
        <div className={styles.creators_page_inner_container}>
        <div className={styles.navbar}>
        <Image 
        className={styles.logoNav}
        alt='logo'
        src='/logo.png' width={100} height={50}/>

        <div className={styles.nav_section2}>
            <p>The Team</p>
            <p>How it works</p>
            <p>Docs</p>
        </div>
        </div>

        <div className={styles.creators_main}>
            <div className={styles.creators_main_inner}>
                <div className={styles.creators_header}>
                <h1>Meet The Creators <Image 
                alt='wave'
                height={30}
                width={30}
                src='/wave.png'/></h1>
                <p>A perfect blend of creativity and technical wizardry</p>
                </div>
                <div className={styles.creatorsInner}>
                    <div className={styles.creators1}>
                        <div className={styles.image_container}>
                        <Image
                        className={styles.image_main}
                        alt='creator'
                        src='/dorcasojo.png' width={200} height={200}/>
                        <p>Dorcas Ojo</p>
                        <p>Cloud/DevOps</p>
                        <p><Image
                        alt='twitter'
                        width={12}
                        height={12}
                        style={{objectFit:'contain',width:'10px',height:'10px'}}
                        src='/twitter.png'/></p>
                        </div>
                        <div className={styles.image_container}>
                        <Image
                        className={styles.image_main}
                        alt='creator'
                        src='/saintmalik.png' width={200} height={200}/>
                        <p>AbdulMalik Salawu</p>
                        <p>Project Lead</p>
                        <p><Image
                        alt='twitter'
                        width={12}
                        height={12}
                        style={{objectFit:'contain',width:'10px',height:'10px'}}
                        src='/twitter.png'/></p>
                        </div>
                        <div className={styles.image_container}>
                        <Image
                        className={styles.image_main}
                        alt='creator'
                        src='/oluwaseunadefemi.png' width={200} height={200}/>
                        <p>Adefemi Oluwaseun</p>
                        <p>Cyber Sec</p>
                        <p><Image
                        alt='twitter'
                        width={12}
                        height={12}
                        style={{objectFit:'contain',width:'10px',height:'10px'}}
                        src='/linkedin.png'/></p>
                        </div>
                        <div className={styles.image_container}>
                        <Image 
                        className={styles.image_main}
                        alt='creator'
                        src='/davidfabiyi.png' width={200} height={200}/>
                        <p>David Fabiyi T.</p>
                        <p>Product Designer</p>
                        <div
                        style={{display:'flex',justifyContent:'center'}}><Image
                        alt='twitter'
                        width={12}
                        height={12}
                        style={{objectFit:'contain',width:'10px',height:'10px'}}
                        src='/twitter.png'/>
                        <Image
                        alt='linkedin'
                        width={12}
                        height={12}
                        style={{objectFit:'contain',marginLeft:'2px',width:'10px',height:'10px'}}
                        src='/linkedin.png'/>
                        </div>
                        </div>
                    </div>
                    <div className={styles.creators2}>
                        <div className={styles.image_container}>
                        <Image 
                        className={styles.image_main}
                        alt='creator'
                        src='/gbengaadeyi.png' width={200} height={200}/>
                        <p>Gbenga Adeyi</p>
                        <p>Backend Dev</p>
                        <p><Image
                        alt='twitter'
                        width={12}
                        height={12}
                        style={{objectFit:'contain',width:'10px',height:'10px'}}
                        src='/twitter.png'/></p>
                        </div>
                        <div className={styles.image_container}>
                        <Image 
                        className={styles.image_main}
                        alt='creator'
                        src='/enochfabiyi.png' width={200} height={200}/>
                        <p>Enoch Fabiyi</p>
                        <p>Frontend Dev</p>
                        <div><Image
                        alt='twitter'
                        width={12}
                        height={12}
                        style={{objectFit:'contain',marginRight:'2px',width:'10px',height:'10px'}}
                        src='/twitter.png'/>
                        <Image
                        alt='twitter'
                        width={12}
                        height={12}
                        style={{objectFit:'contain',width:'10px',height:'10px'}}
                        src='/linkedin.png'/>
                        </div>
                        </div>
                        <div className={styles.image_container}>
                        <Image
                        className={styles.image_main}
                        alt='creator'
                        src='/ebedavid.png' width={200} height={200}/>
                        <p>Ebe David</p>
                        <p>Frontend Dev</p>
                        <p><Image
                        alt='twitter'
                        width={12}
                        height={12}
                        style={{objectFit:'contain',width:'10px',height:'10px'}}
                        src='/twitter.png'/></p>
                        </div>
                        <div className={styles.image_container}>
                        <Image 
                        className={styles.image_main}
                        alt='creator'
                        src='/daramolaafeez.png' width={200} height={200}/>
                        <p>Daramola Afeez</p>
                        <p>FullStack Dev</p>
                        <p><Image
                        alt='twitter'
                        width={12}
                        height={12}
                        style={{objectFit:'contain',width:'10px',height:'10px'}}
                        src='/twitter.png'/></p>
                        </div>
                    </div>
                    <div className={styles.creators3}>
                        <div className={styles.image_container}>
                            <Image 
                            className={styles.image_main}
                            alt='creator'
                            src='/isaiaholaoye.png' width={200} height={200}/>
                            <p>Isaiah Olaoye</p>
                            <p>FullStack Dev</p>
                        </div>
                        <div className={styles.image_container}>
                            <Image
                            className={styles.image_main}
                            alt='creator'
                            src='/robertcoffie.png' width={200} height={200}/>
                            <p>Robert Coffie</p>
                            <p>Backend Dev</p>
                            <p><Image
                        alt='twitter'
                        width={12}
                        height={12}
                        style={{objectFit:'contain',width:'10px',height:'10px'}}
                        src='/twitter.png'/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
        
        

    </div>
  )
}

export default Creators;