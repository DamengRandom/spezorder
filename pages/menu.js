import React from 'react';
import { withRouter } from 'next/router';
import {
  ContextsConsumer
} from "../utils/StateContext";

const Menu = withRouter((props) => (
  <ContextsConsumer>
    {
      ({ state: { products } }) => (
          <>
            {console.log(products)}
            <p>hahah</p>
          </>
        )
    }
  </ContextsConsumer>
));

export default Menu;
