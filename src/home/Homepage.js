import React from 'react'
import ShowCaseSection from './ShowCaseSection'
import TopSectionSlider from './TopSectionSlider'
import styles from './Homepage.styl'

const HomePage = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <TopSectionSlider />
        <div className={styles.ContentSectionContainer}>
          <h1>THE XOTIQUE</h1>
          <h3 style={{marginBottom: '50px'}}>unique leather bag</h3>
          <div className={styles.sectionContainer}>
            <div className={styles.col50}>
              <div style={{backgroundImage: `url(${require('./assets/resize_bags/JPEG/S05-0217.jpg')})`, height: '600px', backgroundSize: 'cover', backgroundPosition: '0 5%'}} />
              <p>
                <b style={{fontSize: '30px'}}>Starting from year 1987</b>, Mrs. Nopharat Winyoopradist established Suvino Corporation Limited (Suvino),
                one of the best handbag factory in Thailand. Since then the factory have been exporting to Japan and
                Europe, the two most difficult market for handbags which are known for rigorous quality control, and
                distinguished designs. Suvino are known to be the best quality handbag manufacturer in Thailand.
                Production technique and attention to the details were passed on to the second generation, Mr. Ard-
                Ong and Ms. Chidchanok Winyoopradist.
              </p>
            </div>
            <div className={styles.col50}>
              <div style={{backgroundImage: `url(${require('./assets/resize_bags/JPEG/Pack-1218.jpg')})`, height: '400px', backgroundPosition: '0 30%', marginBottom: '30px'}}></div>
              <div style={{backgroundImage: `url(${require('./assets/resize_bags/JPEG/Pack-1175.jpg')})`, height: '400px', backgroundSize: 'cover'}}></div>
            </div>
          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.col100}>
              <div style={{backgroundImage: `url(${require('./assets/resize_bags/JPEG/S07-0277.jpg')})`, height: '700px', backgroundPosition: 'center'}} />
            </div>
          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.col50}>
              <div style={{backgroundImage: `url(${require('./assets/resize_bags/JPEG/Pack-1177.jpg')})`, height: '400px', backgroundPosition: '20% 0', backgroundSize: 'cover'}} />
            </div>
            <div className={styles.col50}>
              <p>
                From year 2015 until present, Mr. Ard-Ong and his wife, Mrs. Jiratchaya Winyoopradist started Xotique
                Brand together. Mrs. Jiratchaya although not graduated from a design school, but her passion in designs
                was second to none, and she has a dream of making a brand like none other. With expertise of high
                detailed production and craftsmanship and strong passion in design, Xotique was established focusing
                on the use of high quality materials, highly detailed craftsmanship, and distinguished designs which are
                practical can be used daily.
              </p>
            </div>
          </div>
          <ShowCaseSection />
        </div>
      </div>
    )
  }
})

export default HomePage
