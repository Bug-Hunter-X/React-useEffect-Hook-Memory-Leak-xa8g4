# React useEffect Hook Memory Leak
This repository demonstrates a common error in React applications: memory leaks caused by the improper use of the useEffect hook.

## Problem
The `MyComponent` component uses `setInterval` inside a `useEffect` hook without providing a cleanup function. This leads to multiple timers running concurrently after unmounting the component, causing memory leaks.

## Solution
The solution involves adding a cleanup function to the useEffect hook, to clear the interval before the component unmounts.