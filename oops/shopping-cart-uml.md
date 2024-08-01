
Shopping cart

```mermaid
classDiagram
class Item {
-itemId
+isRestricted()
}

class Customer {
-name
+getAddress()
}
class Address {
-country
-state
}
Customer "1" *-- "1" Address : composition 
```
