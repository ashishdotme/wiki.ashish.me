# SQL

## ACID Properties

1. **Atomicity**
    
    - **Definition:** Each transaction is all-or-nothing. If any part of the transaction fails, the entire transaction fails.
    - **Example:** If you're transferring money between bank accounts, either both the debit and credit occur, or neither does.
    
1. **Consistency**
    
    - **Definition:** Transactions must move the database from one valid state to another, maintaining all predefined rules.
    - **Example:** If a transaction updates an account balance, the total amount of money should remain the same before and after the transaction.
    
1. **Isolation**
    
    - **Definition:** Transactions should not affect each other. They should behave as if they're executed sequentially, even if they're run in parallel.
    - **Example:** If two transactions are occurring simultaneously, one transferring funds and another checking balance, they should not interfere with each other.
    
1. **Durability**
    
    - **Definition:** Once a transaction is committed, it remains so, even in the event of a system failure.
    - **Example:** After a successful transfer, the system crashes. Once back up, the transaction should still be reflected in the database.

### Example Scenario

Imagine a bank transaction where Alice transfers $100 to Bob:

- **Atomicity:** If the debit from Alice's account fails, the credit to Bob's account won't happen.
- **Consistency:** The total money in Alice's and Bob's accounts remains unchanged.
- **Isolation:** Another transaction checking Bob's balance won’t see the transfer until it’s complete.
- **Durability:** Once the transfer is confirmed, it remains so despite any crashes.

These properties ensure that databases operate correctly and predictably, even in complex scenarios.

# NOSQL
## Introduction

1. **Scalability**
    - **Horizontal Scaling**: Easily distribute data across multiple servers.
2. **Data Model Flexibility**
    - **Dynamic Schemas**: When your data structure is evolving or unstructured.
3. **Performance**
    - **High Volume of Reads/Writes**: Low-latency requirements for large datasets.
4. **Specific Use Cases**
    - **Big Data Applications**: Handling massive data and analytics.
    - **Real-Time Applications**: Such as chat apps or IoT platforms.
    - **Content Management Systems**: With varied and flexible content types.
### Key Considerations

- **Consistency vs. Availability**: Decide based on your application needs (CAP theorem).
- **Data Relationships**: NoSQL is better for denormalized data but less ideal for complex joins.

