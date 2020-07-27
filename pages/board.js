import React from 'react';
import {
  ContextsConsumer
} from "../utils/StateContext";

export default function board() {
  return (
    <ContextsConsumer>
      {
        ({
          user,
          testState
        }) => (
            <>
              <pre>
                {
                  JSON.stringify(user, null, 2)
                }
              </pre>
              <p>
                {
                  testState
                }
              </p>
            </>
          )
      }
    </ContextsConsumer>
  )
}
