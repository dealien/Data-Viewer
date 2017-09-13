# Interactive Data Explorer

[Link to the explorer](https://dealien.github.io/Data-Viewer/)

## Data Format

Data can either be formatted vertically, where each sub-array represents a column of data in the table, or horizontally, where each sub-array represents one row of data in the table.

### Vertically
```json
{
  "data": [
    [1, 2, 3, 4, 5],
    [6388, 6367, 6500, 6635, 6312]
  ]
}
```

### Horizontally
```json
{
  "data": [
    [1, 6388],
    [2, 6367],
    [3, 6500],
    [4, 6635],
    [5, 6312]
  ]
}
```
