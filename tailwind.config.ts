import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        "luxury-display": ["Crimson Text", "serif"],
        "luxury-body": ["Montserrat", "sans-serif"],
        "luxury-script": ["Libre Baskerville", "serif"],
        "luxury-sans": ["Avenir", "sans-serif"],
        display: ["Crimson Text", "serif"],
        body: ["Montserrat", "sans-serif"],
        script: ["Libre Baskerville", "serif"],
        serif: ["Crimson Text", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          foreground: "hsl(var(--gold-foreground))",
        },
        blue: {
          DEFAULT: "hsl(var(--blue))",
          foreground: "hsl(var(--blue-foreground))",
        },
        crystal: {
          DEFAULT: "hsl(var(--crystal))",
          dark: "hsl(var(--crystal-dark))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
      },
      backgroundImage: {
        "colombia-flag":
          "linear-gradient(135deg, #FFD700 0%, #CE1126 50%, #003893 100%)",
        "luxury-gold": "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
        "luxury-red": "linear-gradient(135deg, #CE1126 0%, #8B0000 100%)",
        "luxury-gradient":
          "linear-gradient(135deg, #FFD700 0%, #CE1126 50%, #003893 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
        "luxury-marina":
          "url(https://images.pexels.com/photos/42092/pexels-photo-42092.jpeg)",
        "luxury-resort":
          "url(https://images.pexels.com/photos/8085365/pexels-photo-8085365.jpeg)",
        "luxury-penthouse":
          "url(https://images.pexels.com/photos/8572163/pexels-photo-8572163.jpeg)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.37)",
        "glass-inset": "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        luxury:
          "0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "luxury-gold":
          "0 12px 40px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "luxury-red":
          "0 12px 40px rgba(206, 17, 38, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "3xl": "0 35px 60px -12px rgba(0, 0, 0, 0.25)",
      },
      backdropBlur: {
        luxury: "25px",
        glass: "20px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in": {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        "luxury-glow": {
          "0%, 100%": {
            boxShadow: "0 0 40px rgba(255, 215, 0, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 80px rgba(255, 215, 0, 0.6)",
          },
        },
        "luxury-shimmer": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        "luxury-float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "luxury-pulse": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.9",
            transform: "scale(1.05)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "luxury-glow": "luxury-glow 3s ease-in-out infinite",
        "luxury-shimmer": "luxury-shimmer 4s ease infinite",
        "luxury-float": "luxury-float 3s ease-in-out infinite",
        "luxury-pulse": "luxury-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
