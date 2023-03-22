## PUT `/answer_sets/:id`

Update an answer_set

<blockquote class="lang-specific"><p>PUT /api/v1/answer_sets/:id</p></blockquote>

```json
{
  "data": {
    "type": "answer_sets",
    "attributes": {
        "resolved": true
    }
  }
}
```

### attributes

attribute          | description
------------- | -------------
__resolved__<br>required _boolean_ | answer_set status
