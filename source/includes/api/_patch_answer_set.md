## PATCH `/answer_sets/:id`

Update attributes of an answer_set

<blockquote class="lang-specific"><p>PATCH /api/v1/answer_sets/:id</p></blockquote>
```json--
{
  "data": {
    "type": "answer_sets",
    "attributes": {
        "resolved": true,
        "resolver": "john.doe@example.com"
    }
  }
}
```

### attributes

attribute          | description
------------- | -------------
__resolved__<br> _boolean_ _optional_ | new answer_set status
__resolver__<br> _string_ _optional_ | answer_set resolver email. Given in the payload, the answer_set will be automatically resolved even if __resolved__ is set to `false`.
