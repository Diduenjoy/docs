## POST `/answer_sets`

Create an answer_set

<blockquote class="lang-specific"><p>POST /api/v1/answer_sets</p></blockquote>
```json--
{
  "data": {
    "type": "messages",
    "attributes": {
      "text": "Great store!",
      "is_note": false,
      "sender_email": "email@example.com"
    },
    "relationships": {
      "feedback": {
        "data": { "id": "FEEDBACK-UUID", "type": "feedbacks" }
      }
    }
}
```

### attributes

attribute          | description
------------- | -------------
__text__<br>_string_ | message text
__is_note__<br>_boolean_ | equal "true" if the message is a note
__sender_email__<br>_string_ | message author email

### relationships

relationship          | description
------------------------------ | -------------
__feedback__  | message feedback