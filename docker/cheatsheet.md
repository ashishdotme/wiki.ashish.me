---
id: cheatsheet
title: Cheatsheet
---

```sh
# Stop services only
docker-compose stop

# Stop and remove containers, networks..
docker-compose down 

# Down and remove volumes
docker-compose down --volumes 

# Down and remove images
docker-compose down --rmi <all|local> 

# Starts the container and leaves them running
docker-compose up -d
```
