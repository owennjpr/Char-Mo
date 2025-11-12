[![NPM](https://nodei.co/npm/@char-motion/react.svg?style=flat&data=n,v)](https://nodei.co/npm/@char-motion/react/) ![Vercel Deploy](https://deploy-badge.vercel.app/vercel/char-motion) ![License](https://img.shields.io/badge/license-MIT-blue)

# Char Motion

Char(acter) Motion is an [npm package](https://www.npmjs.com/package/@char-motion/react) containing a collection of ASCII character based text animations/effects for use in React applications. To read the docs, see examples, and get more information, check out the [website](https://char-motion.vercel.app/)

This readme is broken into 2 parts:

1. [Package Usage](#package-usage)
2. [How to Contribute](#contribution)
3. [Credits](#credits)

# Package Usage

## Installation

        npm i @char-motion/react

## Basic Usage

        import { Txt } from "@char-motion/react";

        <Txt enter={{ type: "typed sweep" }}>
            Hello World!
        </Txt>

more examples [here](https://char-motion.vercel.app/)

## Current Effects

Effects are split into different categories based on when they trigger. This package is relatively new so there aren't too many effects yet.

### Enters

Effects that trigger when the Txt object is first initialized

- typed sweep: characters type in as if written in a terminal
- randomized: characters appear in random order with an intermediate jumbled state
- number sweep: numbers shuffle and stabilize one by one

### Hovers

Effects that trigger when the Txt object is hovered over

- typed sweep: a cursor character moves left to right through the text and idly flickers at the end
- twinkle: characters are randomly swapped out and put back at regular intervals
- shuffle: text between delimiter characters is randomly shuffled

### Morphs

Effects that trigger when the child string is changed

- retype: deletes the characters right to left and retypes them left to right

# Contribution

I very much welcome contributions from anyone who has a cool idea for how to expand or improve this package. This section is meant for developers who want to directly work in this codebase, but if you have a suggestion you’re not sure how to implement, please feel free to open a feature request issue, I'd love to hear your ideas!

# Credits

This package is created and managed by Owen Prendergast.

Home page logo on the website was made with [patorjk's text to ASCII art generator](https://patorjk.com/software/taag/)
