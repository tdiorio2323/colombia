import { describe, expect, it } from 'vitest';

describe('global.css', () => {
  it('should define CSS variables for dark mode', () => {
    // Check for the existence of CSS variables in the :root selector
    const rootStyle = getComputedStyle(document.documentElement);
    expect(rootStyle.getPropertyValue('--background')).toBeDefined();
    expect(rootStyle.getPropertyValue('--foreground')).toBeDefined();
    expect(rootStyle.getPropertyValue('--card')).toBeDefined();
    expect(rootStyle.getPropertyValue('--card-foreground')).toBeDefined();
    expect(rootStyle.getPropertyValue('--popover')).toBeDefined();
    expect(rootStyle.getPropertyValue('--popover-foreground')).toBeDefined();
    expect(rootStyle.getPropertyValue('--purple')).toBeDefined();
    expect(rootStyle.getPropertyValue('--purple-foreground')).toBeDefined();
    expect(rootStyle.getPropertyValue('--secondary')).toBeDefined();
    expect(rootStyle.getPropertyValue('--secondary-foreground')).toBeDefined();
    expect(rootStyle.getPropertyValue('--muted')).toBeDefined();
    expect(rootStyle.getPropertyValue('--muted-foreground')).toBeDefined();
    expect(rootStyle.getPropertyValue('--accent')).toBeDefined();
    expect(rootStyle.getPropertyValue('--accent-foreground')).toBeDefined();
    expect(rootStyle.getPropertyValue('--pink')).toBeDefined();
    expect(rootStyle.getPropertyValue('--pink-foreground')).toBeDefined();
    expect(rootStyle.getPropertyValue('--blue')).toBeDefined();
    expect(rootStyle.getPropertyValue('--blue-foreground')).toBeDefined();
    expect(rootStyle.getPropertyValue('--crystal')).toBeDefined();
    expect(rootStyle.getPropertyValue('--crystal-dark')).toBeDefined();
    expect(rootStyle.getPropertyValue('--destructive')).toBeDefined();
    expect(rootStyle.getPropertyValue('--destructive-foreground')).toBeDefined();
    expect(rootStyle.getPropertyValue('--border')).toBeDefined();
    expect(rootStyle.getPropertyValue('--input')).toBeDefined();
    expect(rootStyle.getPropertyValue('--ring')).toBeDefined();
    expect(rootStyle.getPropertyValue('--radius')).toBeDefined();
    expect(rootStyle.getPropertyValue('--glass-bg')).toBeDefined();
    expect(rootStyle.getPropertyValue('--glass-border')).toBeDefined();
    expect(rootStyle.getPropertyValue('--glass-shadow')).toBeDefined();
    expect(rootStyle.getPropertyValue('--glass-backdrop')).toBeDefined();
  });

  it('should define CSS variables for light mode', () => {
    // Add a class to the document element to simulate light mode
    document.documentElement.classList.add('light');

    const lightStyle = getComputedStyle(document.documentElement);
    expect(lightStyle.getPropertyValue('--background')).toBeDefined();
    expect(lightStyle.getPropertyValue('--foreground')).toBeDefined();
    expect(lightStyle.getPropertyValue('--card')).toBeDefined();
    expect(lightStyle.getPropertyValue('--card-foreground')).toBeDefined();
    expect(lightStyle.getPropertyValue('--popover')).toBeDefined();
    expect(lightStyle.getPropertyValue('--popover-foreground')).toBeDefined();
    expect(lightStyle.getPropertyValue('--purple')).toBeDefined();
    expect(lightStyle.getPropertyValue('--purple-foreground')).toBeDefined();
    expect(lightStyle.getPropertyValue('--secondary')).toBeDefined();
    expect(lightStyle.getPropertyValue('--secondary-foreground')).toBeDefined();
    expect(lightStyle.getPropertyValue('--muted')).toBeDefined();
    expect(lightStyle.getPropertyValue('--muted-foreground')).toBeDefined();
    expect(lightStyle.getPropertyValue('--accent')).toBeDefined();
    expect(lightStyle.getPropertyValue('--accent-foreground')).toBeDefined();
    expect(lightStyle.getPropertyValue('--pink')).toBeDefined();
    expect(lightStyle.getPropertyValue('--pink-foreground')).toBeDefined();
    expect(lightStyle.getPropertyValue('--blue')).toBeDefined();
    expect(lightStyle.getPropertyValue('--blue-foreground')).toBeDefined();
    expect(lightStyle.getPropertyValue('--destructive')).toBeDefined();
    expect(lightStyle.getPropertyValue('--destructive-foreground')).toBeDefined();
    expect(lightStyle.getPropertyValue('--border')).toBeDefined();
    expect(lightStyle.getPropertyValue('--input')).toBeDefined();
    expect(lightStyle.getPropertyValue('--ring')).toBeDefined();
    expect(lightStyle.getPropertyValue('--glass-bg')).toBeDefined();
    expect(lightStyle.getPropertyValue('--glass-border')).toBeDefined();
    expect(lightStyle.getPropertyValue('--glass-shadow')).toBeDefined();

    // Clean up: Remove the class after testing
    document.documentElement.classList.remove('light');
  });

  it('should apply background gradient to body', () => {
    const bodyStyle = getComputedStyle(document.body);
    expect(bodyStyle.backgroundImage).toContain('radial-gradient');
    expect(document.body.style.fontFamily).toEqual('"Inter", sans-serif');
  });

  it('should apply Bebas Neue font to h1-h6', () => {
    const h1 = document.createElement('h1');
    document.body.appendChild(h1);
    const h1Style = getComputedStyle(h1);
    expect(h1Style.fontFamily).toEqual('"Bebas Neue", sans-serif');
    document.body.removeChild(h1);

    const h2 = document.createElement('h2');
    document.body.appendChild(h2);
    const h2Style = getComputedStyle(h2);
    expect(h2Style.fontFamily).toEqual('"Bebas Neue", sans-serif');
    document.body.removeChild(h2);
  });

  it('should define text gradient utility classes', () => {
    const element = document.createElement('div');
    element.className = 'text-gradient';
    document.body.appendChild(element);
    const style = getComputedStyle(element);
    expect(style.backgroundImage).toContain('linear-gradient');
    document.body.removeChild(element);
  });

  it('should define glass card utility classes', () => {
    const element = document.createElement('div');
    element.className = 'glass-card';
    document.body.appendChild(element);
    const style = getComputedStyle(element);
    expect(style.backgroundColor).toEqual('rgba(255, 255, 255, 0.08)');
    document.body.removeChild(element);
  });

  it('should define colombia gradient utility classes', () => {
    const element = document.createElement('div');
    element.className = 'colombia-gradient';
    document.body.appendChild(element);
    const style = getComputedStyle(element);
    expect(style.backgroundImage).toContain('linear-gradient');
    document.body.removeChild(element);
  });

  it('should define custom scrollbar styles', () => {
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet?.insertRule('::-webkit-scrollbar { width: 8px; }', 0);
    const scrollbarStyle = style.sheet?.cssRules[0] as CSSStyleRule;
    expect(scrollbarStyle.selectorText).toEqual('::-webkit-scrollbar');
    document.head.removeChild(style);
  });
});
