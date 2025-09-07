        "neutral": {
          DEFAULT: "hsl(var(--neutral))",
          foreground: "hsl(var(--neutral-foreground))",
        },
        "success": {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        "warning": {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        "info": {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
      },
      boxShadow: {
        "neumorphic-light":
          "9px 9px 16px rgb(163,177,198,.6), -9px -9px 16px rgba(255,255,255, 0.5)",
        "neumorphic-dark":
          "9px 9px 16px rgba(0,0,0,.6), -9px -9px 16px rgba(255,255,255, 0.1)",
        "neumorphic-inset-light":
          "inset 5px 5px 10px rgb(163,177,198,.6), inset -5px -5px 10px rgba(255,255,255, 0.5)",
        "neumorphic-inset-dark":
          "inset 5px 5px 10px rgba(0,0,0,.6), inset -5px -5px 10px rgba(255,255,255, 0.1)",
      },
    }, // Closing extend
  }, // Closing theme
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
