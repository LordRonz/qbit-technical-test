import { Injectable } from '@nestjs/common';

const reviews = [
  {
    name: 'Alan',
    content:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    name: 'Turing',
    content:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    name: 'Giorno',
    content:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    name: 'Giovanna',
    content:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getReviews() {
    return reviews;
  }
}
