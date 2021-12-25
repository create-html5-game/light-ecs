# LightECS

![NPM](https://img.shields.io/npm/v/light-ecs)
![Downloads](https://img.shields.io/npm/dw/light-ecs)
[![Coverage Status](https://coveralls.io/repos/github/create-html5-game/light-ecs/badge.svg?branch=main)](https://coveralls.io/github/create-html5-game/light-ecs?branch=main)
![License](https://img.shields.io/npm/l/light-ecs)
![PR Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

A performant Entity Component System library for Typescript and Javascript.

## What is ECS

> Entity–component–system (ECS) is an architectural pattern that is mostly used in game development. ECS follows the composition over inheritance principle that allows greater flexibility in defining entities where every object in a game's scene is an entity (e.g. enemies, bullets, vehicles, etc.). Every entity consists of one or more components which contains data or state.

_- [Wikipedia](https://en.wikipedia.org/wiki/Entity_component_system)_

## Key Features of LightECS

- Efficient serialization support for networked games/applications.
- Written in Typescript for a strong-typed workflow.

## Installation

```
npm i light-ecs
```

```
yarn add light-ecs
```

## Usage

First create an ECS instance:

```js
const ecs = new ECS();
```

The ECS constructor takes two arguments:

- `max: number = 1e4` which is the hard limit for the number of entities at a single time.
- `defer: boolean = false` which sets the value of `ecs.DEFAULT_DEFER`, which I'll get to later.

Use `ecs.bind()` to bind the value of `this` to the methods which allows omission of the `ecs.` prefix.

```js
const ecs = new ECS()
const {
  defineComponent,
  createQuery,
  createEntity,
  etc.
} = ecs.bind()
```

### Define components

Components are defined using `ecs.defineComponent`:

```js
const myComponent = ecs.defineComponent(types.u8);
const position = ecs.defineComponent({
  x: types.f64,
  y: types.f64,
});
```

The object passed defines the shape of the component. Types are declared using the `types` constant.
