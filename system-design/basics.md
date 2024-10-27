# Basics

## System Design

System design is the process of defining the elements of a distributed system, as well as their interactions and relationships, in order to satisfy a set of specified requirements. Example of distributed systems - different microservices (accounts, payments, orders, inventory) work together to handle transactions.

## Performance vs Scalability

- If you have a **performance** problem, your system is slow for a single user.
- If you have a **scalability** problem, your system is fast for a single user but slow under heavy load.

## Latency vs Throughput

Latency and throughput are two important measures of a system’s performance. **Latency** refers to the amount of time it takes for a system to respond to a request. **Throughput** refers to the number of requests that a system can handle at the same time.

Generally, you should aim for maximal throughput with acceptable latency.

## Availability vs Consistency

Availability refers to the ability of a system to provide its services to clients even in the presence of failures. This is often measured in terms of the percentage of time that the system is up and running, also known as its uptime.

Consistency, on the other hand, refers to the property that all clients see the same data at the same time. This is important for maintaining the integrity of the data stored in the system.

In distributed systems, it is often a trade-off between availability and consistency. Systems that prioritize high availability may sacrifice consistency, while systems that prioritize consistency may sacrifice availability. Different distributed systems use different approaches to balance the trade-off between availability and consistency, such as using replication or consensus algorithms.

## Cap Theorem

The **CAP Theorem** states that a distributed system can guarantee only two of the following three properties simultaneously:

1. **Consistency:** Every read receives the most recent write or an error.
2. **Availability:** Every request receives a response, without guarantee that it contains the most recent write.
3. **Partition Tolerance:** The system continues to operate despite network partitions.

**Example**

Imagine a distributed database system spread across multiple servers.

#### Scenario: Network Partition

- **Consistency and Partition Tolerance (CP):**
    - The system ensures all nodes agree on the latest data, but some requests may fail if parts of the network are inaccessible.
    - Example: A banking system prioritizes consistent account balances over availability.
- **Availability and Partition Tolerance (AP):**
    - The system remains operational and responsive even if data isn't consistent across all nodes.
    - Example: A social media platform where users can still post messages, but might see outdated comments during a partition.
- **Consistency and Availability (CA):**
    - This combination can only work if there are no network partitions, which is unrealistic for distributed systems.

In practice, systems choose trade-offs based on specific needs, like prioritizing availability in user-facing applications or consistency in financial transactions.



