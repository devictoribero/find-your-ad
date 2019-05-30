import React from 'react'
import './index.css'

export default function InfluencerCard({
  id,
  name,
  lastName,
  img_src = 'http://brownmead.academy/wp-content/uploads/2017/01/avatar.jpg',
  location,
  socials
}) {
  return (
    <article className="influencer">
      <header className="influencer__header">
        <img className="influencer__avatar" src={img_src} alt="" />
        <h1 className="influencer__name">{`${name} ${lastName}`}</h1>
        <span className="influencer__location">{location}</span>
      </header>

      <ul className="influencer__socials">
        {socials.map(social=> (
          <li className="influencer__social" key={`${id}_${social.name}`}>
            {social.name === 'instagram' && <InstagramLogo/>}
            {social.name === 'twitter' && <TwitterLogo/>}
            <span className="influencer__social-followers">{social.followers}</span>
          </li>
        ))}
      </ul>

      <footer className="influencer__actions">
        <a className="influencer__cta influencer__cta--info" href="#">
          Ver más
        </a>
        <button className="influencer__cta influencer__cta--contact">
          Contactar
        </button>
      </footer>
    </article>
  )
}

function InstagramLogo() {
  return <img className="influencer__social-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png" alt="Instagram logo" />
}

function TwitterLogo() {
  return <img className="influencer__social-logo" src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/1259px-Twitter_Bird.svg.png" alt="Twitter logo" />
}