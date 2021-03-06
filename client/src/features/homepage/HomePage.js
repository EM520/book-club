import SearchBar from '../search/SearchBar'
import GenresByUser from '../genre/GenresByUser'
import styles from './HomePage.module.css'
import sellbooksad from '../pic/midbanner-sell-books.jpg'
import diversereaders from '../pic/diversereaders.png'
import adspecsclubpage from '../pic/adspecsclubpage.jpg'
// import { GiBottomRight3DArrow } from 'react-icons/gi'

// import styles from './Homepage.css'
export default function HomePage() {

  clearTimeout()

  
  return (
    <div 
    className="container1">
      <div 
      >
        {/* <h2>Username's favorite genres!</h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        <SearchBar />
      </div>

      {/* <div className={styles.dumbArrow}>
        <GiBottomRight3DArrow size={40} />
      </div> */}
      
        <div className={styles.bookscroll}>
          <GenresByUser />
        </div>
      

      <div className={styles.horizontalad}>
        
        <img
          className={styles.adPic}
          src={sellbooksad}
          alt="Sell Us Your Books"
        />
        <img
          className={styles.readers}
          src={diversereaders}
          alt="Sell Us Your Books"
        />
      
        
        <img className={styles.adPic2}
          
          src={adspecsclubpage}
          alt="Your Ad Here"
        />
        
      </div>
    </div>
  )
}
