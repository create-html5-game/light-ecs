# LightECS

![NPM](https://img.shields.io/npm/v/light-ecs)
![Build](https://github.com/create-html5-game/light-ecs/workflows/CI/badge.svg)
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
npm i light-ecs --save
```

```
yarn add light-ecs
```

## Usage

### Import the library

```typescript
import * as ECS from 'light-ecs';
```

or

```typescript
import { Component, ComponentField, Engine, System, World } from 'light-ecs';
```

### Define your component types

LightECS uses [protobufjs](https://github.com/protobufjs/protobuf.js/) for serialization under the hood. Component types just need to extend from ECS.Component class and then fields can be defined using any approach supported by protobufjs documented [here](https://github.com/protobufjs/protobuf.js/#examples). We recommend using [decorators through typescript](https://github.com/protobufjs/protobuf.js/#usage-with-typescript).

```typescript
// ECS.Component is a subclass of the Message class from protobufjs.
class MyComponentType extends ECS.Component {
  // ECS.ComponentField is simiply an alias for Field.d from protobufjs.
  @ECS.ComponentField(1, 'uint32')
  public int: number = 0;

  @ECS.ComponentField(2, 'string')
  public text: string = '';
}
```

### Initialize the engine object

```typescript
const engine = new ECS.Engine([MyComponentType, ...otherComponentTypes]);
```

### Create a world, an entity and its components

```typescript
const world = engine.createWorld();

const entityId = world.createEntity();

const myComponent = world.addComponentToEntity(entityId, MyComponentType);
myComponent.int = 100;
myComponent.text = 'my text';
```

### Build a system that can query entities by their components

```typescript
class MySystem extends ECS.System {
  public run(world: ECS.World): void {
    // queryEntities is a protected method from ECS.System
    this.queryEntities(
      world,
      MyComponentType
      // anotherComponentType, ...
    ).forEach(([entityId, myComponent /*, anotherComponent, ... */]) => {
      // do something
    });
  }
}

const mySystem = new MySystem();
mySystem.run(world);
```

### Serialization

```typescript
const serialized = engine.serializeWorld(world);

// this deserialized object should contain the exact same data as the
// pre-serialization world object.
const deserialized = engine.createWorld(serialized);
```

## API References

[References](docs/modules.md)
