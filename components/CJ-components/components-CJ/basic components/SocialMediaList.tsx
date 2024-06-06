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
    <div className="flex gap-2">
      {' '}
      {twitter && (
        <a href={twitter.url} aria-label="Twitter">
          
        </a>
      )}
      {instagram && (
        <a href={instagram.url} aria-label="Instagram">
          <InstagramIcon />
        </a>
      )}
      {youtube && (
        <a href={youtube.url} aria-label="YouTube">
        <YoutubeIcon />
        </a>
      )}
      {facebook && (
        <a href={facebook.url} aria-label="Facebook">
          <InstagramIcon />
        </a>
      )}
      {linkedin && (
        <a href={linkedin.url} aria-label="LinkedIn">
          <InstagramIcon />
        </a>
      )}
    </div>
  )
}
