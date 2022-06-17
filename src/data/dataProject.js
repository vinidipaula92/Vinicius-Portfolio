import SolarSystem from '../projetos/SolarSystem.gif';
import Trybewallet from '../projetos/Trybewallet.gif';
import recipe from '../projetos/recipe.gif';

export const project = [
  {
    title: 'Receitas do Pedrin',
    description:
      `Este foi um projeto em grupo e o último projeto do módulo de Frontend.
      Composto pela equipe de desenvolvimento da Trybe, o projeto foi desenvolvido para ajudar o usuário a encontrar receitas para seu próprio uso.
      O projeto consiste em um site que permite ao usuário consultar receitas de comidas e bebidas.
      O site é construído utilizando o React e o Redux e apesar de ser um app de receitas, foi desenvolvido com um layout responsivo para web.
      Projeto feito pela equipe: Imar Mendes, Pedro Vieira, Rafael Barbosa e Vinícius de Paula.
      Realização de testes para o site, com 100% de cobertura para todas as páginas.
      `,
    link: 'https://recipe-app-vinidipaula.vercel.app/',
    github: 'https://github.com/vinidipaula92/Project-Recipe-app',
    image: recipe,
    technologies: ['React', 'React Hooks', 'Redux', 'Context API', 'CSS', 'Bootstrap', 'React Testing Library'],
  },
  {
    title: 'Trybe Wallet',
    description:
      'Carteira digital, onde podemos adicionar os gastos realizados diariamente e com conversor de moedas.',
    link: 'https://trybewallet-vinidipaula.vercel.app/',
    github: 'https://github.com/vinidipaula92/trybewallet',
    image: Trybewallet,
    technologies: ['React', 'Redux', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Solar System',
    description:
      'Visualiza todos os planetas do sistema solar e todas as informações sobre missões espaciais.',
    link: 'https://solarsystem-vinidipaula.vercel.app/',
    github: 'https://github.com/vinidipaula92/Project-Solar-System',
    image: SolarSystem,
    technologies: ['React JS', 'CSS', 'Bootstrap'],
  }
];
