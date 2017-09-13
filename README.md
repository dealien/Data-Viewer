# Interactive Data Explorer

[Link to the explorer](https://dealien.github.io/Data-Viewer/)

## Config File

### Data Format

Data can either be formatted vertically, where each sub-array represents a column of data in the table, or horizontally, where each sub-array represents one row of data in the table.

#### Vertical Data Format
```json
{
  "data": [
    [1, 2, 3, 4, 5],
    [6388, 6367, 6500, 6635, 6312]
  ]
}
```

#### Horizontal Data Format
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

### Additional Info
