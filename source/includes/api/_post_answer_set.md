## POST `/answer_sets`

Create an answer_set

<blockquote class="lang-specific"><p>POST /api/v1/answer_sets</p></blockquote>

```json--
{
  "data": {
    "type": "answer_sets",
    "attributes": {
      "would_recommend": 4,
      "comment": "Perfect !",
      "completed": true,
      "secondary_answers": {
        "QUESTION-UUID": "answer-value"
      },
      "dispatch_to_email": "example@email.com",
      "segments": {
        "gender": "male",
        "age": "42"
      }
    },
    "relationships": {
      "client": {
        "data": { "type": "clients", "id": "CLIENT-UUID" }
      },
      "survey_language": {
        "data": {"type": "survey_languages", "id": "SURVEY-LANGUAGE-UUID"}
      }
      },
      "survey": {
        "data": {"type": "surveys", "id": "SURVEY-UUID"}
      }
    }
  }
}
```

### attributes

attribute          | description
------------- | -------------
__comment__<br>_string_ | responder comment
__completed__<br>_boolean_ | Set to true to mark the answer_set as completed and trigger the associated scenarii and third party integrations
__would_recommend__<br>_integer_ | responder recommendation note
__segments__<br>_hash { string: string&#124;array[string] }_ | custom data associated with the answer set
__secondary_answers__<br>_hash { "QUESTION-UUID": "answer value" }_ | Optional. Hash of secondary questions and answers
__dispatch_to_email__<br>_string_ | Optional. Email of the client (responder)
__locale__<br>_string_ | Optional. Iso code of the answer language

### relationships

relationship          | description
------------------------------ | -------------
__client__<br>required if dispatch_to_email attribute is missing | answer_set responder
__survey_language__<br>required if locale and survey are missing | answer_set survey_language
__survey__<br>required if survey_language is missing | answer_set survey
