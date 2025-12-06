---
title: Optimization Kotlin DSL
description: |
    A Kotlin DSL for defining and solving Linear and Mixed Integer Programming problems 
    with Google OR-Tools, inspired by AMPL-style modeling.
repositoryName: optimization-kotlin-dsl
repository: https://github.com/bartlomiejkrawczyk/optimization-kotlin-dsl
externalUrlName: Maven Central
externalUrl: https://central.sonatype.com/artifact/io.github.bartlomiejkrawczyk/optimization-kotlin-dsl
tags:
    - side_project
    - kotlin
    - linear_programming
    - ci_cd
    - mip
    - or_tools
---

# Overview

**Optimization Kotlin DSL** is a expressive Kotlin Domain-Specific Language (DSL) for defining and
solving optimization problems using [Google OR-Tools](https://developers.google.com/optimization).  
It simplifies model creation by providing idiomatic Kotlin syntax while supporting:

- Linear Programming (LP)
- Integer Programming (IP)
- Mixed Integer Programming (MIP)

Inspired by [`io.justdevit:simplex-kotlin-dsl`](https://github.com/temofey1989/simplex-kotlin-dsl), this library extends
its concept to cover a wider range of solver types.

# Story Behind the Project

The idea for this library came from a real-world problem: a friend of mine suggested creating a platform to optimize tournament match assignments. The client we approached was struggling with Excel-based scheduling, which was tedious and error-prone, and players were often dissatisfied because their preferences weren’t properly considered.

Initially, I built a rough solver prototype using mixed integer programming. While I mostly work with Kotlin, I discovered [OR-Tools](https://developers.google.com/optimization) written for Java. The library was powerful, but its Java abstraction felt cumbersome, and even the Python version didn’t offer the flexibility I wanted. I was inspired by AMPL's elegant way of defining variables, constraints, and objectives-allowing me to focus purely on the math, rather than boilerplate code.

This led me to develop a Kotlin DSL that brings an AMPL-like experience to Kotlin. Now, users can define optimization problems using a concise, readable syntax and leave the solver to handle the complexity.

The library has been published on [GitHub Packages](https://github.com/bartlomiejkrawczyk/optimization-kotlin-dsl) and [Maven Central](https://central.sonatype.com/artifact/io.github.bartlomiejkrawczyk/optimization-kotlin-dsl), and it is licensed under MIT.

# Example Usage

## Mixed Integer Problem

```kotlin
val (status, config) = optimize {
    solver(SolverType.SCIP_MIXED_INTEGER_PROGRAMMING)

    val x = intVar("x")
    val y = numVar("y")
    val z = boolVar("z")

    // OBJECTIVE
    x * 2 + y * 3 + 4 * z to Goal.MAX

    // CONSTRAINTS
    x + y le 3
    y - 1 le 2

    5 * y eq (x + 3) * 2

    val variables = listOf(x, y, z)

    for (variable in variables) {
        variable le 1.5
    }

    variables.sum() le y
    
    solve()
}

println("OBJECTIVE")
println("Optimal objective value = ${config.objective.value()}")

println("VARIABLES")
config.variables.forEach { variable ->
    println("${variable.name()} = ${variable.solutionValue()}")
}
````

**Output:**

```kotlin
OBJECTIVE
Optimal objective value = 4.3999999999999995
VARIABLES
x = -1.0
y = 0.7999999999999999
z = 1.0
```

## Flow Network

```kotlin
val (status, config) = optimize {
    solver(SolverType.GLOP_LINEAR_PROGRAMMING)

    val totalCost = numVar("totalCost", lowerBound = 0.0)
    val flows = tensorNumVar(
        tensorKeys = listOf(nodes, nodes),
        namePrefix = "flow",
        lowerBound = 0,
    )

    min {
        totalCost
    }

    "total cost constraint" {
        totalCost eq nodes.flatMap { f ->
            nodes.map { t ->
                costTensor[f, t] * flows[f, t]
            }
        }.sum()
    }

    "initial flow constraint" {
        nodes.map { z -> flows["s", z] }.sum() eq fGiven
    }

    for (v in nodesWithout) {
        "Kirchhoff's law constraint - $v" {
            nodes.map { z -> flows[v, z] }.sum() eq
                    nodes.map { u -> flows[u, v] }.sum()
        }
    }

    for (f in nodes) {
        for (t in nodes) {
            "max flow constraint - $f $t" {
                flows[f, t] le capacityMinCostTensor[f, t]
            }
        }
    }
    
    solve()
}
```
