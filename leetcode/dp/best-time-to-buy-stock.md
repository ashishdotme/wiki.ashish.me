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
    classDef overlap1 fill:#92400e,stroke:#78350f,stroke-width:2px,color:#fff
    classDef overlap2 fill:#1e40af,stroke:#1e3a8a,stroke-width:2px,color:#fff
    classDef base fill:#374151,stroke:#1f2937,color:#fff

    R["solve(0, 0)<br/>= max(0, -1+5) = <b>4</b>"]:::optimal

    R -->|"skip"| A["solve(1, 0)<br/>= max(0, -5+3) = <b>0</b>"]
    R -->|"buy@1 → -1"| B["solve(1, 1)<br/>= max(3, 5+0) = <b>5</b>"]:::optimal

    A -->|"skip"| C["solve(2, 0)<br/>= max(0, -3+0) = <b>0</b>"]:::overlap1
    A -->|"buy@5 → -5"| D["solve(2, 1)<br/>= max(0, 3+0) = <b>3</b>"]:::overlap2

    B -->|"skip"| E["solve(2, 1)<br/>= max(0, 3+0) = <b>3</b>"]:::overlap2
    B -->|"sell@5 → +5"| F["solve(2, 0)<br/>= max(0, -3+0) = <b>0</b>"]:::optimal

    C -->|"skip"| G["solve(3, 0) = <b>0</b>"]:::base
    C -->|"buy@3 → -3"| H["solve(3, 1) = <b>0</b>"]:::base

    D -->|"skip"| I["solve(3, 1) = <b>0</b>"]:::base
    D -->|"sell@3 → +3"| J["solve(3, 0) = <b>0</b>"]:::base

    E -->|"skip"| K["solve(3, 1) = <b>0</b>"]:::base
    E -->|"sell@3 → +3"| L["solve(3, 0) = <b>0</b>"]:::base

    F -->|"skip"| M["solve(3, 0) = <b>0</b>"]:::base
    F -->|"buy@3 → -3"| N["solve(3, 1) = <b>0</b>"]:::base
```

**Legend:**
- Green = optimal path (buy@1, sell@5 = profit 4)
- Yellow = overlapping subproblem `solve(2, 0)` (appears 2x)
- Blue = overlapping subproblem `solve(2, 1)` (appears 2x)
- Grey = base cases `solve(3, _) = 0`

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
