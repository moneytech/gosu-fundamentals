package stackAndQueue

/**
 * ListNode - Used by Linked List implementations of Stack & Queue.
 * Created by barelampagos on 12/15/16.
 */
class ListNode<T> {
  var _data: T
  var _next: ListNode<T>

  construct(data: T) {
    _data = data
    _next = null
  }

  // Getters & Setters
  property get Data() : T {
    return _data
  }
  property set Data(data : T) {
    _data = data
  }
  property get Next() : ListNode<T> { return _next }
  property set Next(next : ListNode<T>) { _next = next }
}