/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		animation: {
  			'spin-cw': 'spin 4s linear infinite',
  			'spin-ccw': 'spin-ccw 4s linear infinite'
  		},
  		keyframes: {
  			'spin-ccw': {
  				to: {
  					transform: 'rotate(-360deg)'
  				},
  				from: {
  					transform: 'rotate(0deg)'
  				}
  			},
  			'spin': {
  				to: {
  					transform: 'rotate(360deg)'
  				},
  				from: {
  					transform: 'rotate(0deg)'
  				}
  			},
  			bounce: {
  				'50%': {
  					'transform': 'translateY(-15%)',
  					'animation-timing-function': 'cubic-bezier(0.8,0,1,1)'
  				},
  				'0%, 100%': {
  					'transform': 'none',
  					'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
  				}
  			}
  		},
  		borderRadius: {
  			'4xl': '2rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif',
                    ...defaultTheme.fontFamily.sans
                ],
  			serif: [
  				'Bitter',
  				'serif',
                    ...defaultTheme.fontFamily.serif
                ],
  			mono: [
  				'Roboto Mono',
  				'monospace',
                    ...defaultTheme.fontFamily.mono
                ]
  		},
  		maxWidth: {
  			'2xl': '40rem'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
      require("tailwindcss-animate")
]
};
