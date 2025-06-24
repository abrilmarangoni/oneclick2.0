interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background square in teal color */}
        <rect width="100" height="100" fill="#B3F2EF" rx="8" />

        {/* The geometric angular shape - recreating the black angular form */}
        <path
          d="M25 25 L25 45 L35 45 L35 35 L45 35 L65 15 L75 15 L75 35 L85 35 L85 45 L75 45 L75 55 L65 55 L45 75 L35 75 L35 65 L25 65 L25 85 L75 85 L75 75 L85 75 L85 85 L15 85 L15 25 L25 25 Z"
          fill="#1F2937"
        />
      </svg>
    </div>
  )
}
