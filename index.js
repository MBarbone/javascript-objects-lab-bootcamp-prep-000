var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, recipes, {prop2: 2});
  
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

