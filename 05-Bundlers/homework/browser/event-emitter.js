//(function () {

  //window.EventEmitter = EventEmitter;

  // Nuestra función constructora EventEmitter
  function EventEmitter () {
    this.subscribers = {};
  }

  // Para ser utilizado como:
  // instanceOfEE.on('touchdown', cheerFn);
  EventEmitter.prototype.on = function (eventName, eventListener) {

    // Si el objeto subscribers de esta instancia
    // la key que coincida con el nombre del evento dado, create the
    // cree la key y asignale el valor de una matriz vacía
    if (!this.subscribers[eventName]) {
        this.subscribers[eventName] = [];
    }

    // Inserte la función listener dada en la matriz
    // ubicada en la instancia del objeto subscribers.
    this.subscribers[eventName].push(eventListener);

  };

  // Para ser utilizado com:
  // instanceOfEE.emit('codec', 'Hey Snake, Otacon is calling!');
  EventEmitter.prototype.emit = function (eventName) {

    // Si no hay subscribers a este eventName, ¿por qué?
    if (!this.subscribers[eventName]) {
        return;
    }
     // Tome los remaining arguments para nuestra función de emisión
    var remainingArgs = [].slice.call(arguments, 1);

    // Para cada subscribers, llámalo con nuestros argumentos.
    this.subscribers[eventName].forEach(function (listener) {
        listener.apply(null, remainingArgs);
    });

  };


  module.exports = EventEmitter;//Exportamos la funcion constructora EventEmitter

//})();
