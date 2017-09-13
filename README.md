# Interactive Data Explorer

[Link to the explorer](https://dealien.github.io/Data-Viewer/)

## Data Format

Data can either be formatted vertically, where each sub-array represents a column of data in the table, or horizontally, where each sub-array represents one row of data in the table.

### Vertically
```json
{
  "headers": [
    [
      "Student", "Age"
    ],
    [
      "Student ID number", "Age of each student in days"
    ]
  ],
  "data": [
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    [
      6388,
      6367,
      6500,
      6635,
      6312,
      6551,
      10800,
      6476,
      6687,
      6335
    ]
  ]
}
```

### Horizontally
```json
{
  "headers": [
    [
      "Student", "Age"
    ],
    [
      "Student ID number", "Age of each student in days"
    ]
  ],
  "data": [
    [1, 6388],
    [2, 6367],
    [3, 6500],
    [4, 6635],
    [5, 6312],
    [6, 6551],
    [7, 10800],
    [8, 6476],
    [9, 6687],
    [10, 6335]
  ]
}
```
