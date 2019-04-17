---
id: lifecycle
title: Component Lifecycle
---

## Contructor(props)  
- It's a default es6 class feature
- Used to call super(props)
- You can set up state
- You should not cause side effects

## ComponentWillMount()
- You can update state
- You can do last minute optimization
- You should not cause side effects
  
## Render()
- You can structure your code here
  
## ComponentDidMount()
- You can cause side effects
- You can call APIS and do data modification
- You should not update state though as it triggers re render

## ComponentWillReceiveProps()

## ShouldComponentUpdate()

## ComponentWillUpdate()

## ComponentDidUpdate()

## ComponentWillUnmount()
