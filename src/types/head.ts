import { type ImageMetadata } from 'astro';

export interface HeadProps {
  title: string;
  description: string;
  image?: ImageMetadata;
}
