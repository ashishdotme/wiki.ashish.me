# Availability vs Consistency

## Consistency Pattern

Methods to ensure data consistency across distributed systems. Three main types:

**Strong Consistency**

 Immediate data updates, high integrity, but low availability and high latency2. Example - when a user initiates a transfer of funds from one account to another, the system immediately updates the balance of both accounts and all other system components are immediately aware of the change. This ensures that all users can see the updated balance of both accounts and prevents any discrepancies.

**Weak Consistency**:

Delayed data updates, high availability, low latency, but potential inconsistencies. Example - When a user plays a game, their actions are immediately visible to other players in the same data center, but if there was a lag or temporary connection loss, the actions may not be seen by some of the users and the game will continue. This can lead to inconsistencies between different versions of the game state, but it also allows for a high level of availability and low latency.

**Eventual Consistency**:

Data updates eventually propagate, balancing availability and integrity, but with possible temporary inconsistencies. Example - An example of eventual consistency is a social media platform where users can post updates, comments, and messages. The platform is designed for high availability and low latency, so the data is stored in multiple data centers around the world. When a user posts an update, the update is immediately visible to other users in the same data center, but it may take some time for the update to propagate to other data centers. This means that some users may see the update while others may not, depending on which data center they are connected to. This can lead to inconsistencies between different versions of the data, but it also allows for a high level of availability and low latency.

## Availability Pattern


- **Failover**
    - **Description:** Automatically switches to a backup system if the primary system fails.
    - **Example:** A database cluster where, if the primary database fails, a standby replica takes over immediately.
- **Load Balancing**
    - **Description:** Distributes incoming requests across multiple servers to ensure no single server is overwhelmed.
    - **Example:** A web application uses a load balancer to route user requests to multiple web servers, ensuring the app remains responsive.
- **Caching**
    - **Description:** Stores copies of frequently accessed data to reduce load and latency.
    - **Example:** A content delivery network (CDN) caches website content closer to users to provide faster access and reduce server load.
- **Replication**
    - **Description:** Duplicates data across multiple systems to ensure availability even if one system goes down.
    - **Example:** A NoSQL database like Cassandra replicates data across several nodes, so it's still accessible if some nodes fail.