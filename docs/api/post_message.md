import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## POST `/messages`

Create a message

**POST /api/v1/messages**

<Tabs groupId="api-language">
  <TabItem value="" label="">
    ```json
    {
      "data": {
        "type": "messages",
        "attributes": {
          "text": "Great store!",
          "is_note": false,
          "sender_email": "email@example.com"
        },
        "relationships": {
          "answer_set": {
            "data": { "id": "ANSWER-SET-UUID", "type": "answer_sets" }
          }
        }
      }
    }
    ```
  </TabItem>
</Tabs>

### attributes

attribute          | description
------------- | -------------
__text__<br />_string_ | message text
__is_note__<br />_boolean_ | equal "true" if the message is a note
__sender_email__<br />_string_ | message author email

### relationships

relationship          | description
------------------------------ | -------------
__answer_sets__  | message answer_set
