[![NPM](https://nodei.co/npm/@char-mo/react.svg?style=flat&data=n,v)](https://nodei.co/npm/@char-mo/react/) ![Vercel Deploy](https://deploy-badge.vercel.app/vercel/char-mo) ![License](https://img.shields.io/badge/license-MIT-blue)

# Char-Mo

Character Motion (Char-Mo) React is an [npm package](https://www.npmjs.com/package/@char-mo/react) containing a collection of ASCII character based text animations/effects for use in React applications. To read the docs, see examples, and get more information, check out the [website](https://char-mo.vercel.app/)

## Installation

        npm i @char-mo/react

## Basic Usage

        import { Txt } from "@char-mo/react";

        <Txt enter={{ type: "typed sweep" }}>
            Hello World!
        </Txt>

more examples [here](https://char-mo.vercel.app/)

## Current Effects

Effects are split into different categories based on when they trigger. This package is relatively new so there aren't too many effects yet.

### Enters

Effects that trigger when the Txt object is first initialized

- typed sweep: characters type in as if written in a terminal
- randomized: characters appear in random order with an intermediate jumbled state
- number sweep: numbers shuffle and stabilize one by one

### Hovers

Effects that trigger when the Txt object is hovered over

- cursor sweep: a cursor character moves left to right through the text and idly flickers at the end
- twinkle: characters are randomly swapped out and put back at regular intervals

