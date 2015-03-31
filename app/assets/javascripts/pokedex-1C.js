Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var newPokemon = new Pokedex.Models.Pokemon(attrs);
  newPokemon.save({}, {
    success: function(){
      this.pokes.add(newPokemon);
      this.addPokemonToList(newPokemon);
      callback(newPokemon);
    }.bind(this),
  });
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  var attrs = $(event.currentTarget).serializeJSON();
  this.createPokemon(attrs, this.renderPokemonDetail.bind(this));
};
