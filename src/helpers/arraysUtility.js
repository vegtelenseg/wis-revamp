import { isEqual } from 'lodash';

const inArray = function(collection, element) {
  for (let i = 0; i < collection.length; i++) {
		if (isEqual(collection[i], element))
			return true;
		else
			continue;
  }
  return false;
};

const itemExists = function(collection, element) {
  if (!inArray(collection, element))
		return false;
  else
		return true;
};

export default itemExists;