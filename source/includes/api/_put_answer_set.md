## POST `/answer_sets/:answer_set_id`

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
__resolved__<br>required _string_ | answer_set status


### relationships

relationship          | description
------------------------------ | -------------
__client__<br>required | answer_set responder
__survey_language__<br>required  | answer_set survey_language