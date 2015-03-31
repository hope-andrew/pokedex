Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var $li = $("<li class='poke-list-item' data-id=" + pokemon.id + "></li>");
  $li.append(pokemon.escape("name"));
  $li.append("<br>");
  $li.append(pokemon.escape("poke_type"));
  this.$pokeList.append($li);
};

Pokedex.RootView.prototype.refreshPokemon = function () {
  var that = this;
  this.pokes.fetch({
    success: function(collection, response, options){
      that.pokes.each(function(poke){
        that.addPokemonToList(poke);
      });
    }
  });
};
