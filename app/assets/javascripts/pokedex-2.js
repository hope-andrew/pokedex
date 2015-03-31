Pokedex.RootView.prototype.addToyToList = function (toy) {
  var $li = $("<li class='toy-list-item' data-id='" + toy.get("id") + "' data-pokemon-id='" + toy.escape("pokemon_id") + "'>");
  $li.append("Toy Name: " + toy.attributes.name + "\n");
  $li.append("Toy Happiness: " + toy.attributes.happiness + "\n");
  $li.append("Toy Price: " + toy.attributes.price + "\n");
  var $ul = $("ul.toys");
  $ul.append($li);
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) {
  var $toyDiv = $("<div class='detail'>");
  var $img = $("<img src='" + toy.get('image_url') + "'>");
  $toyDiv.append($img);
  for(var attr in toy.attributes){
    $toyDiv.append(attr + " : " + toy.attributes[attr] + "\n");
  }
  this.$toyDetail.html($toyDiv);
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
  var toyId = $(event.currentTarget).data("id");
  var pokemonId = $(event.currentTarget).data("pokemon-id");
  var pokemon = this.pokes.get(pokemonId);
  var toy = pokemon.toys().get(toyId);
  this.renderToyDetail(toy);
};
