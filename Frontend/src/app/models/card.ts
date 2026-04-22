import { Link } from './link';

export interface Card {
  title: string;
  description: string;
  dated: Date;
  links: Link[];
}
