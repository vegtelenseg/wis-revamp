export default function(actionName, payload) {
  if (!actionName || !payload) {
    return Error('You need to pass a valid action name and a payload');
  }
  return {
    type: actionName,
    payload
  };
}
