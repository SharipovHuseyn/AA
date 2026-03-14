import React from 'react'

export default function BannerTitle({ 
  children, 
  className = '',
  ...props 
}) {
  return (
    <span 
      className={`
        text-xs 
        xs:text-sm 
        sm:text-sm 
        md:text-base 
        lg:text-lg 
        xl:text-xl 
        2xl:text-xl 
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  )
}