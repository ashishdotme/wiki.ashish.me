# Introduction


## Topic

- Topics are like table, provides scalability
- Each topic has 1 or more than 1 partition
- Each partition is an ordered, immuatable sequence of records
- Each record is assigned a sequential number called **offset**
- Each partition is independent of each other
- Ordering is guaranteed only at the **partition level**
- Partition continously grows as new records are produced
- All the records are persisted in a distributed commit log in the file system where Kafka is installed
  