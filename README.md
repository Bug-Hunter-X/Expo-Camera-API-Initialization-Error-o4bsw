# Expo Camera Initialization Bug

This repository demonstrates a common bug encountered when using the Expo Camera API: inconsistent behavior due to premature access to camera features before initialization. The issue may not always result in a readily apparent error, leading to unexpected behavior or crashes. The solution involves ensuring the camera is fully ready before accessing it.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app on an Expo Go client or using a simulator.
4. Observe the app behavior.  Notice the inconsistent capture functionality.

## Solution

The solution is presented in `bugSolution.js` and uses the `Camera.isReady` property to ensure the camera is fully initialized before proceeding with any operation.