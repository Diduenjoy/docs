## PUT `/answer_sets/:answer_set_id`

Update an answer_set

<blockquote class="lang-specific"><p>PUT /api/v1/answer_sets/:answer_set_id</p></blockquote>
```json--
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
