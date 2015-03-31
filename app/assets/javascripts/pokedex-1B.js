Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var $detail = $("<div class='detail'>");
  var $img = $("<img src='"+pokemon.get('image_url')+"'>");
  $detail.append($img);
  for(var attr in pokemon.attributes){
    $detail.append(attr + " : " + pokemon.attributes[attr] + "\n");
    }
  // pokemon.attributes.forEach(function(prop){
  //   $detail.append(prop + " ");
  // });

  var $toysUl = $("<ul class='toys'>");
  var that = this;
  pokemon.fetch({
    success: function(){
      pokemon.toys().each(function(toy){
        that.addToyToList(toy);
      });
    }
  });
  $detail.append($toysUl);
  this.$pokeDetail.html($detail);
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var id = $(event.currentTarget).data("id");
  var pokemon = this.pokes.get(id);
  this.renderPokemonDetail(pokemon);
};
