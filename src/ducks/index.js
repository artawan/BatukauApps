/**
 * Import reducers from shared ducks modules (default export)
 * We are following Ducks module proposition:
 * https://github.com/erikras/ducks-modular-redux
 */

import Routing from './Routing.duck';
import UI from './UI.duck';

export {
  Routing,
  UI,
};
