import React from 'react'
import InstagramIcon from '../custom components/InstagramComponent'
import YoutubeIcon from '../custom components/YoutubeIcon'
import { SocialMediaLinks } from '@/app/interfaces'




export default function SocialMediaList({
  twitter,
  instagram,
  linkedin,
  facebook,
  youtube,
}: SocialMediaLinks ) {
  return (
    <div className="flex justify-start">
      {' '}
      {twitter && (
        <a className="" href={twitter.url} aria-label="Twitter">
          
        </a>
      )}
      {instagram && (
        <a className="mr-3" href={instagram.url} aria-label="Instagram">
          <InstagramIcon />
        </a>
      )}
      {youtube && (
        <a className="mr-3" href={youtube.url} aria-label="YouTube">
        <YoutubeIcon />
        </a>
      )}
      {facebook && (
        <a className="mr-3" href={facebook.url} aria-label="Facebook">
          <InstagramIcon />
        </a>
      )}
      {linkedin && (
        <a className="mr-3" href={linkedin.url} aria-label="LinkedIn">
          <InstagramIcon />
        </a>
      )}
    </div>
  )
}
