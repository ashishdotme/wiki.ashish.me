## Types of Relationships

#### 1. Association

Association is: Class A uses Class B.

Example:

- Employee uses Bus/train Services for transportation.
- Computer uses keyboard as input device

And in In UML diagram Association is denoted by a normal arrow head.

#### 2. Aggregation

Class A contains Class B, or Class A has an instance of Class B.

An aggregation is used when life of object is independent of container object. But still container object owns the aggregated object.

So if we delete class A that doesn't mean that class B will also be deleted. E.g. none, or many, teachers can belong to one or many departments.

The relationship between Teachers and Departments is aggregation.

#### 3. Composition

Class A owns Class B.

E.g. Body consists of Arm, Head, Legs. BankAccount consists of Balance and TransactionHistory.

So if class A gets deleted then also class B will get deleted.

![](https://i.sstatic.net/AJlpc9t8.png)

## Mermaid class UML diagram syntax

| Type    | Description   |
| ------- | ------------- |
| `<\|--` | Inheritance   |
| `*--`   | Composition   |
| `o--`   | Aggregation   |
| `-->`   | Association   |
| `--`    | Link (Solid)  |
| `..>`   | Dependency    |
| `..\|>` | Realization   |
| `..`    | Link (Dashed) |
