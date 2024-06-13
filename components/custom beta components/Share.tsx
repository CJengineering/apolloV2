'use client';


import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'next-share';
import { useEffect, useState } from 'react';
import { SocialButton } from './SocialButtons';

export function Share() {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  return (
    <div className="py-8 sm:py-10">
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium text-gray-900">Share</span>

        {/* Social Links */}
        <div className="flex items-center space-x-3">
          <TwitterShareButton url={url}>
            <SocialButton name="twitter" containerClassName="sm:w-12 sm:h-12" />
          </TwitterShareButton>
          <FacebookShareButton url={url}>
            <SocialButton
              name="facebook"
              containerClassName="sm:w-12 sm:h-12"
            />
          </FacebookShareButton>
          <LinkedinShareButton url={url}>
            <SocialButton
              name="linkedin"
              containerClassName="sm:w-12 sm:h-12"
            />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
}
