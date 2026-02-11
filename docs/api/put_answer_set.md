import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## PUT `/answer_sets/:id`

Update an answer_set

**PUT /api/v1/answer_sets/:id**

<Tabs groupId="api-language">
  <TabItem value="" label="">
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
  </TabItem>
</Tabs>

### attributes

attribute          | description
------------- | -------------
__resolved__<br />required _boolean_ | answer_set status
