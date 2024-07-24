
System design is the process of defining the elements of a system, as well as their interactions and relationships, in order to satisfy a set of specified requirements.

**Performance vs Scalability**

- If you have a **performance** problem, your system is slow for a single user.
- If you have a **scalability** problem, your system is fast for a single user but slow under heavy load.

**Latency vs Throughput**

Latency and throughput are two important measures of a system’s performance. **Latency** refers to the amount of time it takes for a system to respond to a request. **Throughput** refers to the number of requests that a system can handle at the same time.

Generally, you should aim for maximal throughput with acceptable latency.

**Availability vs Consistency**

Availability refers to the ability of a system to provide its services to clients even in the presence of failures. This is often measured in terms of the percentage of time that the system is up and running, also known as its uptime.

Consistency, on the other hand, refers to the property that all clients see the same data at the same time. This is important for maintaining the integrity of the data stored in the system.

In distributed systems, it is often a trade-off between availability and consistency. Systems that prioritize high availability may sacrifice consistency, while systems that prioritize consistency may sacrifice availability. Different distributed systems use different approaches to balance the trade-off between availability and consistency, such as using replication or consensus algorithms.

**Cap Theorem**




