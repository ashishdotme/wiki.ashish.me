# Best Time to Buy and Sell Stock

[LeetCode 121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Recursive Formulation

State: `(day, holding)` where `holding` is 0 (no stock) or 1 (holding stock).

```
solve(i, 0) = max(solve(i+1, 0),  -prices[i] + solve(i+1, 1))   # skip or buy
solve(i, 1) = max(solve(i+1, 1),   prices[i] + solve(i+1, 0))   # skip or sell
base: i == n  ->  0
```

## Recursion Tree (Step by Step)

Example: `prices = [1, 5, 3]`. We call `solve(0, 0)` — starting at day 0, not holding stock.

### Step 1: The First Choice

At day 0 (price=1), we don't hold stock. Two options: skip this day, or buy.

```mermaid
graph TD
    classDef active fill:#166534,stroke:#14532d,stroke-width:3px,color:#fff
    classDef pending fill:#475569,stroke:#334155,color:#fff

    R["Day 0, No Stock<br/>price = 1<br/>solve(0, 0) = ?"]:::active
    A["Day 1, No Stock<br/>solve(1, 0) = ?"]:::pending
    B["Day 1, Holding<br/>solve(1, 1) = ?"]:::pending

    R -- "skip → don't buy" --> A
    R -- "buy at 1 → pay $1" --> B
```

To know which choice is better, we must solve both children first.

### Step 2: Explore the Skip Branch

We skipped day 0. Now at day 1 (price=5), still no stock. Again: skip or buy.

```mermaid
graph TD
    classDef done fill:#374151,stroke:#1f2937,color:#d1d5db
    classDef active fill:#166534,stroke:#14532d,stroke-width:3px,color:#fff
    classDef pending fill:#475569,stroke:#334155,color:#fff
    classDef base fill:#1f2937,stroke:#111827,color:#9ca3af

    R["Day 0, No Stock<br/>solve(0, 0) = ?"]:::done
    A["Day 1, No Stock<br/>price = 5<br/>solve(1, 0) = ?"]:::active
    B["Day 1, Holding<br/>solve(1, 1) = ?"]:::pending

    C["Day 2, No Stock<br/>solve(2, 0) = ?"]:::pending
    D["Day 2, Holding<br/>solve(2, 1) = ?"]:::pending

    R -- "skip" --> A
    R -- "buy at 1" --> B
    A -- "skip" --> C
    A -- "buy at 5 → pay $5" --> D
```

### Step 3: Reach Base Cases (Left Subtree)

Keep going deeper. Day 2 (price=3) branches hit day 3 = past the end = base case returns 0.

```mermaid
graph TD
    classDef done fill:#374151,stroke:#1f2937,color:#d1d5db
    classDef active fill:#166534,stroke:#14532d,stroke-width:3px,color:#fff
    classDef base fill:#1f2937,stroke:#111827,color:#9ca3af

    R["Day 0, No Stock<br/>solve(0, 0) = ?"]:::done
    A["Day 1, No Stock<br/>solve(1, 0) = ?"]:::done

    C["Day 2, No Stock<br/>price = 3<br/>solve(2, 0) = ?"]:::active
    D["Day 2, Holding<br/>price = 3<br/>solve(2, 1) = ?"]:::active

    G["base = 0"]:::base
    H["base = 0"]:::base
    I["base = 0"]:::base
    J["base = 0"]:::base

    R -- "skip" --> A
    A -- "skip" --> C
    A -- "buy at 5" --> D

    C -- "skip" --> G
    C -- "buy at 3" --> H
    D -- "hold" --> I
    D -- "sell at 3 → earn $3" --> J
```

### Step 4: Values Bubble Up (Left Subtree)

Base cases return 0. Now we can compute day 2 values, then day 1.

```mermaid
graph TD
    classDef resolved fill:#475569,stroke:#334155,color:#fff
    classDef base fill:#1f2937,stroke:#111827,color:#9ca3af
    classDef highlight fill:#92400e,stroke:#78350f,stroke-width:2px,color:#fff

    R["Day 0, No Stock<br/>solve(0, 0) = ?"]:::resolved

    A["Day 1, No Stock<br/>max(0, -5+3) = <b>0</b>"]:::resolved

    C["Day 2, No Stock<br/>max(0, -3+0) = <b>0</b>"]:::highlight
    D["Day 2, Holding<br/>max(0, 3+0) = <b>3</b>"]:::highlight

    G["0"]:::base
    H["0"]:::base
    I["0"]:::base
    J["0"]:::base

    R -- "skip" --> A
    A -- "skip → 0" --> C
    A -- "buy at 5 → -5+3 = -2" --> D

    C -- "skip → 0" --> G
    C -- "buy → -3" --> H
    D -- "hold → 0" --> I
    D -- "sell → 3" --> J
```

> `solve(1, 0) = max(skip=0, buy=-5+3=-2) = 0`. Buying at 5 is a bad deal.

### Step 5: Explore the Buy Branch

Now we solve the right branch: we bought at day 0. At day 1 (price=5), holding stock. Options: hold or sell.

```mermaid
graph TD
    classDef done fill:#374151,stroke:#1f2937,color:#d1d5db
    classDef active fill:#166534,stroke:#14532d,stroke-width:3px,color:#fff
    classDef overlap1 fill:#92400e,stroke:#78350f,stroke-width:2px,color:#fff
    classDef overlap2 fill:#1e40af,stroke:#1e3a8a,stroke-width:2px,color:#fff
    classDef base fill:#1f2937,stroke:#111827,color:#9ca3af

    R["Day 0, No Stock<br/>solve(0, 0) = ?"]:::done
    A["Day 1, No Stock = <b>0</b>"]:::done
    B["Day 1, Holding<br/>price = 5<br/>solve(1, 1) = ?"]:::active

    E["Day 2, Holding<br/>solve(2, 1) = <b>3</b>"]:::overlap2
    F["Day 2, No Stock<br/>solve(2, 0) = <b>0</b>"]:::overlap1

    K["0"]:::base
    L["0"]:::base
    M["0"]:::base
    N["0"]:::base

    R -- "skip" --> A
    R -- "buy at 1" --> B
    B -- "hold" --> E
    B -- "sell at 5 → earn $5" --> F

    E -- "hold → 0" --> K
    E -- "sell at 3 → 3" --> L
    F -- "skip → 0" --> M
    F -- "buy at 3 → -3" --> N
```

> **Overlapping subproblems!** `solve(2, 0)` and `solve(2, 1)` were already computed in Step 4. With memoization, we just look them up.

### Step 6: Final Answer

All values known. Bubble up to root.

```mermaid
graph TD
    classDef optimal fill:#166534,stroke:#14532d,stroke-width:3px,color:#fff
    classDef normal fill:#475569,stroke:#334155,color:#fff
    classDef overlap1 fill:#92400e,stroke:#78350f,stroke-width:2px,color:#fff
    classDef overlap2 fill:#1e40af,stroke:#1e3a8a,stroke-width:2px,color:#fff
    classDef base fill:#1f2937,stroke:#111827,color:#9ca3af

    R["Day 0, No Stock<br/>max(0, -1+5) = <b>4</b>"]:::optimal

    A["Day 1, No Stock<br/> = <b>0</b>"]:::normal
    B["Day 1, Holding<br/>max(3, 5+0) = <b>5</b>"]:::optimal

    R -- "skip → 0" --> A
    R -- "buy at 1 → -1 + 5 = 4 ✅" --> B
```

> `solve(0, 0) = max(skip=0, buy=-1+5=4) = 4`
>
> **Optimal strategy: buy at price 1, sell at price 5, profit = 4**

### Why DP?

The overlapping subproblems exposed above are the key insight:

| State | Appears in | Result |
|-------|-----------|--------|
| `solve(2, 0)` | Step 4 and Step 5 | 0 |
| `solve(2, 1)` | Step 4 and Step 5 | 3 |

Without memoization the tree has **O(2^n)** nodes. With memoization only **O(n)** unique states (2 per day).

## Solution

```python
def maxProfit(prices: list[int]) -> int:
    n = len(prices)
    memo = {}

    def solve(i, holding):
        if i == n:
            return 0
        if (i, holding) in memo:
            return memo[(i, holding)]

        skip = solve(i + 1, holding)
        if holding:
            act = prices[i] + solve(i + 1, 0)  # sell
        else:
            act = -prices[i] + solve(i + 1, 1)  # buy

        memo[(i, holding)] = max(skip, act)
        return memo[(i, holding)]

    return solve(0, 0)
```

Optimized to O(1) space -- only need two variables:

```python
def maxProfit(prices: list[int]) -> int:
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit
```
