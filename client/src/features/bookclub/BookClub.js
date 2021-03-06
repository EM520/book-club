import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BookDetail from './BookDetail'
import Discussions from './Discussions'
import SearchBar from '../search/SearchBar'
import {getUserBookCollections, selectUserBookCollections} from './bookclubSlice'
import { useParams } from 'react-router-dom'

import styles from './BookClub.module.css'

export default function BookClub() {
  const userbookcollections = useSelector(selectUserBookCollections)
  const param = useParams()
  const bookId = param.id
  console.log(param.id, bookId, 'loc')

  const dispatch = useDispatch()
  const lengthComments = userbookcollections.length
  const isPartOfGroup = lengthComments > 0 ? true : false
  console.log(lengthComments, 'able')
  useEffect(() => {
    dispatch(getUserBookCollections(bookId))
  }, [])
  // console.log(userbookcollections[0],  'ubc')
  


  return (
    
      <div className="container1">
        <div>
        <SearchBar />
        </div>
        <div className={styles.clubmain}>
          <BookDetail bookId = {bookId}  isPartOfGroup = {isPartOfGroup}/>

          {lengthComments > 0 ? <Discussions id = {bookId} gId = {userbookcollections[0].group_id}/> : null }

        </div>
      </div>
    
  )
}