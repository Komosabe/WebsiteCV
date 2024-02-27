import csharp from './assets/c-logo-icon-28402.png';
import dotnet from './assets/Microsoft_.NET_logo.png';
import sql from './assets/sql.png';
import clogo from './assets/C_Logo.png';
import scrum from './assets/scrum.png';
import cplusplus from './assets/Cplsuplus.png';
import git from './assets/Git.png';
import jscript from './assets/JavaScript-logo.png';

export const CORE_CONCEPTS = [
  {
    image: csharp,
    title: 'C#',
  },
  {
    image: dotnet,
    title: '.NET',
  },
  {
    image: sql,
    title: 'SQL',
  },
  {
    image: clogo,
    title: 'C',
  },
  {
    image: scrum,
    title: 'SCRUM',
  },
  {
    image: cplusplus,
    title: 'C++',
  },
  {
    image: git,
    title: 'Git',
  },
  {
    image: jscript,
    title: 'Java Script',
  },
];

export const EXAMPLES = {
  experience: {
    title: 'Doświadczenie',
    companies: [
      {
        name: 'Ideo Sp. z o.o.',
        date: '06.2023 - 07.2023',
        tasks: ['Miesięczne praktyki absolwenckie.', 'Tworzenie aplikacji webowej z wykorzystaniem technologii .NET i Vue.js.']
      },
      {
        name: 'Studenckie Koło Naukowe Informatyków ”Kod”',
        date: '10.2020 - 01.2024',
        tasks: ['Koordynator ds. social mediów.',
         'Zarządzanie i moderowanie treści na platformie Facebook i Instagram.',
        'Koordynowanie nagrań filmu promocyjnego koła.',
        'Organizacja konferencji z okazji 25-lecia Koła Naukowego.',
        'Promocja wydarzenia.',
        'Wsparcie techniczne.',]
      },
      {
        name: 'Samorząd Studencki Politechniki Rzeszowskiej',
        date: '12.2022 - 12.2023',
        tasks: ['Członek Parlamentu Samorządu Studenckiego Politechniki Rzeszowskiej.',
         'Członek Komisji ds. Socjalnych i Dydaktyki.',
        'Pełnomocnik Przewodniczącego Samorządu Politechniki Rzeszowskiej ds. Organizacji Studenckich']
      },
    ]
  },
  test: {
    title: 'Projekty',
    projects: [
      {
        name: 'Koordynator projektu mentorskiego ”SKNI JUNIOR”',
        date: '01.2022 - 06.2022',
        tasks: ['Zarządzanie i organizacja pracy dla sześciu uczniów ze szkół średnich, których zadaniem było stworzenie gry wykorzystując silnik Unity.']
      },
      {
        name: 'Projekt gra ”Roguelike”',
        date: '09.2020 - 11.2021',
        tasks: ['Gra typu roguelike, która była tworzona przy użyciu silnika Godot Engine.',
         'Mój wkład w rozwój projektu obejmował tworzenie grafik w stylu pixel art oraz rekrutacje nowych członków spośród studentów.']
      },
      {
        name: 'Projekt ”Timehub”',
        date: '02.2020 - 07.2021',
        tasks: ['Aplikacja webowa wspomagająca zarządzanie czasem (kanban, kalendarz), tworzona w technologiach Vue3 oraz Django.',
         'Moje zaangażowanie w tworzenie projektu obejmowało stworzenie kalendarza po stronie front-endu, a następnie funkcjonalności obsługujących kalendarz po stronie back-endu.']
      },
    ]
  },
  abilities: {
    title: 'Umiejętności',
    skills: ['C#', '.NET', 'SQL', 'C', ' Razor Pages', 'SCRUM', 'C++', 'Clean Architecture', 'Git', 'Microsoft SQL Server', 'JavaScript']
  },
  lessons: {
    title: 'Szkolenia',
    trainings: ['Cykl wykładów: „Budowa współczesnych aplikacji web',
    'Kurs Udemy: „Kurs JavaScript od podstaw w Pigułce']
  },
  about: {
    title: 'O mnie',
    description: 'Jestem studentem pierwszego semestru studiów drugiego stopnia na Politechnice Rzeszowskiej, kierunek informatyka. Aktywnie uczestniczyłem w działalności Studenckiego Koła Naukowego Informatyków "Kod". Moje zainteresowania obejmują aplikacje webowe, kinematografię oraz szachy.'
  },
};