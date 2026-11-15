// Física de los logos que caen al hacer clic en la foto de perfil.
// Se importa bajo demanda desde ProfileSection.astro para no cargar matter-js
// (ni arrancar su bucle de animación) hasta que alguien interactúa.
import {
  Engine,
  Render,
  World,
  Bodies,
  Runner,
  Body,
  Mouse,
  MouseConstraint,
} from 'matter-js';

import astro from './logos/astro.png';
import astroDark from './logos/astro-dark.png';
import css from './logos/css.png';
import html5 from './logos/html5.webp';
import js from './logos/js.webp';
import tailwind from './logos/tailwind.png';
import claude from './logos/claude.svg';
import claudeCode from './logos/claudecode.svg';
import openai from './logos/openai.svg';
import codex from './logos/codex-color.svg';

export function createParty() {
  // Create an engine
  const engine = Engine.create({
    gravity: { x: 0, y: 1, scale: 0.001 },
  });

  // Create a renderer
  const render = Render.create({
    element: document.getElementById('party-container') as HTMLElement,
    engine: engine,
    canvas: document.getElementById('party') as HTMLCanvasElement,
    options: {
      wireframes: false,
      background: 'transparent',
      width: 1440,
      height: 340,
    },
  });

  // Add mouse control
  const mouse = Mouse.create(render.canvas);
  // Enable scroll back to normal
  mouse.element.removeEventListener('wheel', mouse.mousewheel);

  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

  World.add(engine.world, mouseConstraint);

  // The ground where the boxes will fall
  const ground = Bodies.rectangle(720, 345, 1440, 10, {
    isStatic: true,
    render: { fillStyle: 'transparent' },
    friction: 0.3,
    restitution: 0.2,
  });

  // Left wall
  const leftWall = Bodies.rectangle(0, 170, 10, 340, {
    isStatic: true,
    render: { fillStyle: 'transparent' },
  });

  // Right wall
  const rightWall = Bodies.rectangle(1440, 170, 10, 340, {
    isStatic: true,
    render: { fillStyle: 'transparent' },
  });

  // Add all of the bodies to the world
  World.add(engine.world, [ground, leftWall, rightWall]);

  // Run the engine
  const runner = Runner.create();
  Runner.run(runner, engine);

  // Run the renderer
  Render.run(render);

  function createImageBody(x: number, y: number) {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    // If dark mode, use the white logo
    const texture = isDarkMode ? [astro] : [astroDark];
    // Add the rest of the logos
    texture.push(css, html5, js, tailwind, claude, claudeCode, openai, codex);

    const randomTexture = texture[Math.floor(Math.random() * texture.length)];

    return Bodies.rectangle(x, y, 40, 40, {
      restitution: 0.2, // Moderate bounce
      render: {
        sprite: {
          texture: randomTexture.src,
          xScale: 1,
          yScale: 1,
        },
      },
    });
  }

  // Función para devolver aleatoriamente +1 o -1
  function randomSign() {
    return Math.random() < 0.5 ? -1 : 1;
  }

  // Drops one logo at the center of the profile box
  return function dropLogo() {
    const parent = document.getElementById('parent-parent') as HTMLDivElement;
    const x = parent.clientWidth / 2;
    const y = 0; // Fixed y position at the top

    const newImageBody = createImageBody(x, y);
    World.add(engine.world, newImageBody);

    // Add a force a la caja, randomizando la dirección en x
    const forceX = 0.005 * randomSign();
    const forceY = 0.005;
    Body.applyForce(newImageBody, { x: 0, y: 0 }, { x: forceX, y: forceY });
  };
}
