var _globallyUniqueIdCounter = 0

export default function useId(instanceId) {
  var _uniqueIdCounter = 1
  var _uniqueInstance = instanceId || ++_globallyUniqueIdCounter
  return `id-${_uniqueInstance}-${_uniqueIdCounter}`
}
