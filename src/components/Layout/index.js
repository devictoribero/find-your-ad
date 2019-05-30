import React from 'react'
import './index.css'

export function Layout({children}) {
  return (
    <div className="layout">
      <aside className="layout__complementary">{children[0]}</aside>
      <main className="layout__main">{children[1]}</main>
    </div>
  )
}