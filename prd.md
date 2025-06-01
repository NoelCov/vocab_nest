# Word Learner - Product Requirements Document
**Version**: 1.0.0  
**Date**: 06/01/2025    
**Status**: Draft

## 1. Introduction
This document outlines the requirements for developing a minimal website to support learning new English words. The website will allow doing this with two features: Words database with counter for adding new words and how many times it's been entered, the user can enter an example they thought of to use the word in an sentence. The other one would be to implement some sort of ANKI feature to study the words using the counter of the word, the higher this counter is, the more important the word is to be learned.

## 2. Goals
- **Simple usability**: The website should be very minimal and simple to use for anyone.
- **Maintenance Efficiency**: The website should be designed in a way that is easy to maintain and add more features in the future.

## 3. Core Features (MVP)
### 3.1 Essential Pages
- **Words page**: The main page where the user will be able to see a list of the words they have stored, the definition of each word, the counter, and will be able to add an example sentence for them to learn if they haven't done it, if they have, the example will be shown.
- **Study words page**: A page that will allow the user to study the words they have (only the words with an example will be shown here), in an anki type of style.

### 3.2 Content Management
- **Database**: To save the words, counter, description and example I think either localStorage in the browser could be user, or a file database such as SQLite for each user (the website will be public and anyone should be able to use it without an account).

### 3.3 User Experience
- **Responsive Design**: Mobile-first approach, ensuring functionality accross all device types most importantly the big ones such as phones, tablets, laptopts and big screens.
- **Fast loading**: The website will have only the minimal needed to function for its use and will load as fast as possible. Minimum JavaScript will be used, only when required.
- **Clean Navigation**: Minimalal, intuitive site structure with clear pathways to all content.
- **Professional Aesthetics**: Modern, clean deign that reflects technical sophistication.

### 3.4 Theme
- **Light/Dark theme**: The website will have a light and dark theme, regular light and dark, not overly complicated.

## 4. Technical Architecture
- **Frontend**: HTML 5 and CSS (Using Tailwind), use Astro framework.
- **Styling**: Tailwind css
- **Hosting**: GitHub pages if possible or Vercel/Netlify
- **Semantic HTML**: Proper markup structure for accessibility and SEO

## 5. Non-fuctional requirements
### 5.1 Performance
- **Page Load Speed**: Target extremely fast loading of pages.
- **Lighthouse Score**: Achieve 90+ scores across all Lighthouse categories.

### 5.2 Accessibility
- **WCAG Compliance**: Meet WCAG 2.1 AA standards for web accessibility.
- **Keyboard navigation**: Full functionality available via keyboard navigation.
- **Screen Reader Support**: Proper semantic markup and ARIA labels where needed.
- **Color Contrast**: Ensure sufficient contract ratios for all text and interactive elements.