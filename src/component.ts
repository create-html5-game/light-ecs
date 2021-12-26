import { Field, Message } from 'protobufjs/light';

/**
 * Base class for all component types. This is a subclass of the Message
 * class from protobufjs so can be treated as a protobuf type.
 */
export class Component extends Message {}

/**
 * Decorator for component fields. See
 * [protobufjs](https://github.com/protobufjs/protobuf.js#using-decorators)
 * for documentation.
 */
export const ComponentField = Field.d;
