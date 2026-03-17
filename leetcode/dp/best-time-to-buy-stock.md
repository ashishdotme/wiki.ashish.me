# Best Time to Buy and Sell Stock

[LeetCode 121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Recursive Formulation

State: `(day, holding)` where `holding` is 0 (no stock) or 1 (holding stock).

```
solve(i, 0) = max(solve(i+1, 0),  -prices[i] + solve(i+1, 1))   # skip or buy
solve(i, 1) = max(solve(i+1, 1),   prices[i] + solve(i+1, 0))   # skip or sell
base: i == n  ->  0
```

## Recursion Tree

Example: `prices = [1, 5, 3]`

```mermaid
graph TD
    classDef optimal fill:#166534,stroke:#14532d,stroke-width:3px,color:#fff
    classDef normal fill:#475569,stroke:#334155,color:#fff
    classDef overlap1 fill:#92400e,stroke:#78350f,stroke-width:2px,color:#fff
    classDef overlap2 fill:#1e40af,stroke:#1e3a8a,stroke-width:2px,color:#fff
    classDef base fill:#374151,stroke:#1f2937,color:#d1d5db

    subgraph day0 ["Day 0 — price = 1"]
        R["No Stock → <b>4</b>"]:::optimal
    end

    subgraph day1 ["Day 1 — price = 5"]
        A["No Stock → <b>0</b>"]:::normal
        B["Holding → <b>5</b>"]:::optimal
    end

    subgraph day2 ["Day 2 — price = 3"]
        C["No Stock → <b>0</b>"]:::overlap1
        D["Holding → <b>3</b>"]:::overlap2
        E["Holding → <b>3</b>"]:::overlap2
        F["No Stock → <b>0</b>"]:::overlap1
    end

    subgraph day3 ["Day 3 — past end"]
        G["0"]:::base
        H["0"]:::base
        I["0"]:::base
        J["0"]:::base
        K["0"]:::base
        L["0"]:::base
        M["0"]:::base
        N["0"]:::base
    end

    R -- "skip" --> A
    R -- "BUY at 1 ✅" --> B

    A -- "skip" --> C
    A -- "buy at 5" --> D

    B -- "hold" --> E
    B -- "SELL at 5 ✅" --> F

    C -- "skip" --> G
    C -- "buy at 3" --> H

    D -- "hold" --> I
    D -- "sell at 3" --> J

    E -- "hold" --> K
    E -- "sell at 3" --> L

    F -- "skip" --> M
    F -- "buy at 3" --> N
```

**How to read:**
- Each node shows `state → best profit from here`
- Edges = decisions (skip/buy/sell) at that day's price
- **Green** = optimal path: buy at 1, sell at 5 = **profit 4**
- **Amber** = overlapping `(day 2, no stock)` — computed twice, same result
- **Blue** = overlapping `(day 2, holding)` — computed twice, same result
- **Grey** = base cases (no more days)

## Overlapping Subproblems

The tree exposes repeated computation -- the core motivation for DP:

| State | Computed at | Result |
|-------|------------|--------|
| `solve(2, 0)` | nodes C, F | 0 |
| `solve(2, 1)` | nodes D, E | 3 |
| `solve(3, 0)` | nodes G, J, L, M | 0 |
| `solve(3, 1)` | nodes H, I, K, N | 0 |

Without memoization: **O(2^n)** nodes. With memoization: **O(n)** unique states (2 per day).

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
