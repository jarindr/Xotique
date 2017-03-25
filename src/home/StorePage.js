import React from 'react'
import ShowCaseSection from './ShowCaseSection'
import styles from './StorePage.styl'

const HomePage = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <h1>OUR STORE LOCATION</h1>
        <div className={styles.locationContainer}>
          <div className={styles.contentContainer}>
            <h2>
              Zen Department Store
            </h2>
            <p>2nd Floor, 4, 4/5 Rajdamri Road, Pathumwan, Bangkok 10330</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15502.200895303651!2d100.5395365!3d13.745659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb88393bcdde9c20e!2sZen+Department+store!5e0!3m2!1sth!2sth!4v1490415576544" width="100%" height="300" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className={styles.contentContainer} style={{maxWidth: '45%'}}>
            <img src='https://instagram.fbkk2-3.fna.fbcdn.net/t51.2885-15/e35/16906280_1827561564162462_7848970119744061440_n.jpg' />
          </div>
        </div>
        <div className={styles.locationContainer}>
          <div className={styles.contentContainer}>
            <img src='https://instagram.fbkk2-3.fna.fbcdn.net/t51.2885-15/e35/15803495_1214699041945943_5758646589463724032_n.jpg' />
          </div>
          <div className={styles.contentContainer}>
            <h2>Siam Paragon Department Store</h2>
            <p>M Floor, 991 Rama 1 Road, Pathumwan, Bangkok10330</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15502.124124177277!2d100.5349244!3d13.7468189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f43939a2caf2963!2zUyZQIOC4quC4ouC4suC4oeC4nuC4suC4o-C4suC4geC4reC4mQ!5e0!3m2!1sth!2sth!4v1490416997347" width="100%" height="300" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
        <div className={styles.locationContainer}>
          <div className={styles.contentContainer}>
            <h2>Central Chidlom Department Store</h2>
            <p>2nd Floor, 1027 Ploenchit Road, Pathumwan, Bangkok 10330</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15502.29530336251!2d100.5444097!3d13.7442325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcdd629d17e53a917!2z4LmA4LiL4LmH4LiZ4LiX4Lij4Lix4Lil4LiK4Li04LiU4Lil4Lih!5e0!3m2!1sth!2sth!4v1490417075157" width="100%" height="300" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className={styles.contentContainer}>
            <img src='https://instagram.fbkk2-3.fna.fbcdn.net/t51.2885-15/e35/15624897_381799428835421_1689827433475211264_n.jpg' />
          </div>
        </div>
        <div className={styles.locationContainer}>
          <div className={styles.contentContainer}>
            <img src='https://instagram.fbkk2-3.fna.fbcdn.net/t51.2885-15/e35/15535376_1129393713797066_8637305877956657152_n.jpg' />
          </div>
          <div className={styles.contentContainer}>
            <h2>Emporium Department Store</h2>
            <p>1st Floor, 622, Soi 24, Sukhumvit Road, Khlong Toei Nuea, Watthana, Bangkok 10110</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503.191221318413!2d100.5689206!3d13.730688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0100b33d0c04c0!2sThe+Emporium!5e0!3m2!1sth!2sth!4v1490417111221" width="100%" height="300" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>

      </div>
    )
  }
})

export default HomePage
