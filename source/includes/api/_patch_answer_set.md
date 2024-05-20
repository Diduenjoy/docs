## PATCH `/answer_sets/:id`

Update attributes of an answer_set

<blockquote class="lang-specific"><p>PATCH /api/v1/answer_sets/:id</p></blockquote>
```json--
{
  "data": {
    "type": "answer_sets",
    "attributes": {
        "resolved": true,
        "resolver": "john.doe@example.com",
        "root_causes": ["ROOT-CAUSE-1-UUID", "ROOT-CAUSE-2-UUID"],
        "action_taken": ["ACTION-TAKEN-1-UUID", "ACTION-TAKEN-2-UUID"]
    }
  }
}
```

### attributes

attribute          | description
------------- | -------------
__resolved__<br> _boolean_ _optional_ | new answer_set status.
__resolver__<br> _string_ _optional_ | answer_set resolver email.
__root_causes__<br> _array[string]_ _optional_ | list of root_causes to link to the answer_set. <b>It will overwrite the previous list</b>.
__action_taken__<br> _array[string]_ _optional_ | list of action_taken to link to the answer_set. <b>It will overwrite the previous list</b>.
