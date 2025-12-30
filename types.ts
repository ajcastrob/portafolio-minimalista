import React from 'react';

/**
 * Interface for theme control props
 */
export interface ThemeProps {
  isDark: boolean;
  toggleTheme: () => void;
}

/**
 * Interface for Navbar component props
 */
export interface NavbarProps extends ThemeProps {}

/**
 * Interface for Project data
 */
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

/**
 * Interface for Journalism Article data
 */
export interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  publication: string;
  date: string;
  link: string;
}

/**
 * Interface for Blog Post data
 */
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  content: React.ReactNode;
}
