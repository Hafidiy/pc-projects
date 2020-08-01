import React from 'react'

import styles from './index.module.scss'

export const Announcements = () => {
  const announcements = [
    {id: '1', title: 'Yakuniy imtihonlar', body: 'Yakuniy imtihon vaqtlari'},
    {id: '2', title: 'Yakuniy nazorat', body: 'Yakuniy nazorat ishlarini o\'tkazish vaqtlari o\'zgartirildi'},
    {id: '3', title: 'Topshiriq muddatlarida o\'zgarishlar', body: 'Topshiriq muddatlari kunlari o\'zgartirildi'},
    {id: '4', title: 'Oraliq nazorat haftasi', body: 'Oraliq nazorat kunlari va yo\'riqnomasi'},
    {id: '5', title: 'Shartnoma to\'lovi', body: 'Shartnoma to\'lovini amalga oshirmagan 1-bosqich talabalari'},
    {id: '6', title: '1-2 bosqich talaba qizlari', body: '"AKT sohasida iqtisod va menejment" fakulteti'},
    {id: '7', title: 'CTitle7', body: 'CBody7'},
    {id: '8', title: 'CTitle8', body: 'CBody8'},
    {id: '9', title: 'CTitle9', body: 'CBody9'},
  ]

  return(
    <div className={styles.cont}>
      {announcements.length ? (
        announcements.map(item => (
          <div className={styles.announcement} key={item.id}>
            <span>27-03-2020  16-43-40</span>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <button>Batafsil</button>
          </div>
        ))
      ) : null}
    </div>
  )
}