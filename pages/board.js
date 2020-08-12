import React from 'react';
import {
  ContextsConsumer
} from "../utils/StateContext";

export default function board() {
  return (
    <ContextsConsumer>
      {
        ({
          mode
        }) => (
            <>
              <p>
                {
                  mode
                }
              </p>
            </>
          )
      }
    </ContextsConsumer>
  )
}
